# Book-Ai Creativity Hub

這是一個專注於 AI 藝術創作、教學與 Vibecoding 的個人作品集網站。該專案使用現代化的前端技術棧構建，旨在展示 AI 工具（如 Stable Diffusion, ComfyUI, Gemini 等）的應用與創作成果。

## 技術棧 (Tech Stack)

本專案使用以下技術構建：

-   **核心框架**: [React](https://react.dev/)
-   **建置工具**: [Vite](https://vitejs.dev/)
-   **語言**: [TypeScript](https://www.typescriptlang.org/)
-   **樣式與 UI**:
    -   [Tailwind CSS](https://tailwindcss.com/)
    -   [shadcn/ui](https://ui.shadcn.com/)
    -   [Lucide React](https://lucide.dev/) (Icons)
    -   [Framer Motion](https://www.framer.com/motion/) (Animations)
-   **路由**: [React Router](https://reactrouter.com/)
-   **狀態與資料**: [TanStack Query](https://tanstack.com/query/latest)

## 功能 (Features)

-   **作品展示 (Index)**: 網格化展示 AI 藝術作品 (Posts)，支援分類過濾。
-   **關於我 (About)**: 展示作者背景、技能 (AI 繪圖, Prompt Engineering, Vibecoding) 與經歷。
-   **互動體驗**: 使用 Framer Motion 實現流暢的頁面切換與動畫效果。

## 安裝與執行 (Installation & Usage)

確保您的環境中已安裝 Node.js。

1.  **安裝依賴**:
    ```bash
    npm install
    ```

2.  **啟動開發伺服器**:
    ```bash
    npm run dev
    ```

3.  **建置生產版本**:
    ```bash
    npm run build
    ```

## 專案結構 (Project Structure)

-   `src/components`: UI 元件 (包含 shadcn 元件與自定義元件)
-   `src/pages`: 頁面組件 (Index, About, NotFound)
-   `src/data`: 靜態資料 (如作品集資料 `posts.ts`)
-   `src/assets`: 靜態資源 (圖片等)

## 授權 (License)

[MIT](LICENSE)
