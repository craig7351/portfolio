import coverAiTech from "@/assets/cover-ai-tech.jpg";
import coverPortrait from "@/assets/cover-portrait.jpg";
import coverCyberpunk from "@/assets/cover-cyberpunk.jpg";
import coverVibecoding from "@/assets/cover-vibecoding.jpg";
import imgAiCss1 from "@/assets/(1).webp";
import imgAiCss2 from "@/assets/(2).webp";
import imgAiCss3 from "@/assets/(3).webp";
import imgAiCss4 from "@/assets/(4).webp";

export interface MediaItem {
  type: "image" | "video";
  url: string;
}

export interface Post {
  id: number;
  title: string;
  date: string;
  category: "AI技術教學" | "AI攝影作品" | "Vibecoding作品";
  tags: string[];
  summary: string;
  content: string;
  media: MediaItem[];
  coverImage: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "[AI CSS 切圖+應用]",
    date: "2026-01-16",
    category: "AI技術教學",
    tags: ["AI", "CSS", "Gemini", "Canvas", "Vibecoding"],
    summary: "目的是透過AI來想辦法取得一張小圖在大圖中的位置存成JSON. 之後網頁要show小圖的時候, 就可以直接display",
    content: `[AI CSS 切圖+應用]
目的是透過AI來想辦法取得一張小圖在大圖中的位置存成JSON.
之後網頁要show小圖的時候, 就可以直接display

工具: Gemini - Canvas
Canvas share link:  https://gemini.google.com/share/d499005233e8
作法:
1.透過那個link, 下次有新圖片(要重新切圖), 把圖片餵給 Gemini (圖片要有文字跟圖片都表格排序) 
透過Gemini自然語言再來修改這個app
文字為key, "幫我用這張圖片的文字內容 重新生成綠框"
做好以後 就可以進去網頁 手動調整綠框 最後copy 存成JSON

2.
VibeCoding的時候:
圖片上傳: https://cdn.imgchest.com
圖片網址 https://cdn.imgchest.com/files/cda7558d323b.png
然後給AI圖片網址跟CSS 切版JSON, 然後跟他說
"key為用品名, 在該用品名的頁面根據JSON讀到對應用品的圖片"
所以他就可以再紅茶的商品頁頁show紅茶的圖了!!!

Ps.
切圖的圖片生成方法: 
先用Banana 讀入飲料JSON, 請他
"用上面品名 畫出一張列表, 日本可愛漫畫風格, 要出現所有飲料圖案 跟品名, 每一杯飲料品名跟圖案要固定同樣大小的表格"
你就會得到附件的圖.`,
    media: [
      { type: "image", url: imgAiCss1 },
      { type: "image", url: imgAiCss2 },
      { type: "image", url: imgAiCss3 },
      { type: "image", url: imgAiCss4 }
    ],
    coverImage: imgAiCss1
  },
  {
    id: 2,
    title: "用 AI 重現電影級人像攝影",
    date: "2024-01-12",
    category: "AI攝影作品",
    tags: ["Portrait", "Cinematic", "Midjourney"],
    summary: "分享如何使用 AI 工具創造具有電影感的人像作品，從光影到色調的完整調控...",
    content: `# 電影級人像攝影

這組作品靈感來自王家衛的電影美學，透過 AI 工具重現那種獨特的霓虹光影氛圍。

## 創作理念

追求那種香港夜晚的迷離感，霓虹燈與陰影的交織...`,
    media: [
      { type: "image", url: coverPortrait },
      { type: "image", url: coverPortrait },
      { type: "image", url: coverPortrait }
    ],
    coverImage: coverPortrait
  },
  {
    id: 3,
    title: "Vibecoding 實作：快速打造個人網站",
    date: "2024-01-10",
    category: "Vibecoding作品",
    tags: ["Cursor", "React", "Lovable", "AI Development"],
    summary: "分享我如何只靠口說與 AI 協作完成這個網站的開發過程，零程式背景也能做到...",
    content: `# Vibecoding 開發日誌

當初在 FB 寫下這段開發日誌時，我完全沒想到 AI 輔助開發能這麼順暢。

## 什麼是 Vibecoding？

Vibecoding 是一種全新的程式開發方式，透過自然語言描述你的需求，讓 AI 幫你撰寫程式碼...`,
    media: [
      { type: "image", url: coverVibecoding },
      { type: "video", url: "https://example.com/demo.mp4" }
    ],
    coverImage: coverVibecoding
  },
  {
    id: 4,
    title: "ComfyUI 工作流程分享：動態影像生成",
    date: "2024-01-08",
    category: "AI技術教學",
    tags: ["ComfyUI", "Animation", "Workflow"],
    summary: "完整的 ComfyUI 動態影像生成工作流程，從靜態圖像到流暢動畫的轉換技巧...",
    content: `# ComfyUI 動態影像工作流程

這篇分享我在 ComfyUI 中開發的動態影像生成節點配置...`,
    media: [
      { type: "video", url: "https://example.com/animation.mp4" },
      { type: "image", url: coverAiTech }
    ],
    coverImage: coverAiTech
  },
  {
    id: 5,
    title: "賽博龐克城市 AI 攝影系列",
    date: "2024-01-05",
    category: "AI攝影作品",
    tags: ["Cyberpunk", "City", "Neon"],
    summary: "一組以未來城市為主題的 AI 生成攝影作品，探索霓虹與雨夜的美學...",
    content: `# 賽博龐克城市系列

這組作品探索了未來都市的視覺想像，融合了東京新宿與香港的城市意象...`,
    media: [
      { type: "image", url: coverCyberpunk },
      { type: "image", url: coverCyberpunk },
      { type: "image", url: coverCyberpunk },
      { type: "image", url: coverCyberpunk }
    ],
    coverImage: coverCyberpunk
  },
  {
    id: 6,
    title: "打造 AI 聊天機器人：從零到部署",
    date: "2024-01-02",
    category: "Vibecoding作品",
    tags: ["Chatbot", "OpenAI", "Supabase"],
    summary: "手把手教你如何使用 Lovable 和 Supabase 快速建立一個功能完整的 AI 聊天機器人...",
    content: `# AI 聊天機器人開發全記錄

這個專案展示了如何在不寫任何後端程式碼的情況下，建立一個完整的 AI 對話系統...`,
    media: [
      { type: "image", url: coverVibecoding }
    ],
    coverImage: coverVibecoding
  }
];

export const categories = ["全部", "AI技術教學", "AI攝影作品", "Vibecoding作品"] as const;
export type Category = typeof categories[number];
