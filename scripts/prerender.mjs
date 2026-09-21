// 建置後處理：把 React 頁面預先渲染成 HTML，寫進 dist/index.html 的 #root。
// 流程：vite build（前端）→ 本腳本
//
// 這裡刻意不使用 `vite build --ssr`：Cloudflare 部署時會自動把 @cloudflare/vite-plugin
// 塞進 vite.config.ts，導致 SSR 輸出的檔名與位置改變（dist-server/assets/entry-server-<hash>.js），
// 舊做法就會找不到檔案。改用 Vite 的 ssrLoadModule 直接載入原始碼，並用 configFile:false
// 忽略 vite.config.ts，就不會受 Cloudflare 自動設定影響。
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createServer} from 'vite';
import react from '@vitejs/plugin-react';

const root = fileURLToPath(new URL('..', import.meta.url));

const distIndex = [
  path.join(root, 'dist', 'index.html'),
  path.join(root, 'dist', 'client', 'index.html'),
].find((f) => fs.existsSync(f));
if (!distIndex) {
  throw new Error('prerender: 找不到 dist/index.html，請確認 vite build 已成功');
}

const vite = await createServer({
  root,
  configFile: false,
  logLevel: 'error',
  appType: 'custom',
  server: {middlewareMode: true, hmr: false, watch: null},
  plugins: [react()],
});

let appHtml;
try {
  const {render} = await vite.ssrLoadModule('/src/entry-server.tsx');
  appHtml = render();
} finally {
  await vite.close();
}

const template = fs.readFileSync(distIndex, 'utf8');
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(`prerender: 在 ${path.relative(root, distIndex)} 找不到 ${marker}`);
}

// 用函式當取代值，避免內容中的 $ 符號被當成特殊語法
fs.writeFileSync(distIndex, template.replace(marker, () => `<div id="root">${appHtml}</div>`));
console.log(`prerender: 已寫入 ${(appHtml.length / 1024).toFixed(1)} KB 的靜態 HTML → ${path.relative(root, distIndex)}`);
