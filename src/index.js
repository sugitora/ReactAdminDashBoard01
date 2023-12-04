// Reactライブラリをインポート
import React from "react";
// ReactDOMライブラリをインポート（ウェブ用）
import ReactDOM from "react-dom/client";
// アプリケーションのグローバルスタイルを定義するCSSをインポート
import "./index.css";
// ルートコンポーネントであるAppをインポート
import App from "./App";
// ルーティング機能を提供するreact-router-domライブラリからBrowserRouterをインポート
import { BrowserRouter } from "react-router-dom";

// ルートDOM要素を取得し、Reactアプリケーションのルートを作成
const root = ReactDOM.createRoot(document.getElementById("root"));
// アプリケーションをレンダリング
root.render(
  // 厳格モードを有効にしてアプリケーションをラップ（開発中の潜在的な問題を識別するのに役立つ）
  <React.StrictMode>
    {/* ブラウザルーティングを有効にするコンポーネント */}
    <BrowserRouter>
      {/* ルートコンポーネントをレンダリング */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

