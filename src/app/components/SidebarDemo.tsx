"use client";
import React from "react";
import Sidebar from "./Sidebar";

export default function SidebarDemo() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* デモ用の簡易ヘッダー */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              ☰
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              TaskFlow
            </h1>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebarコンポーネント */}
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

        {/* メインコンテンツエリア */}
        <main className="flex-1 p-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sidebarコンポーネントのデモ
            </h2>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                • サイドバー状態: {isSidebarOpen ? "開いている" : "閉じている"}
              </p>
              <p>• デスクトップ: 常に表示</p>
              <p>• モバイル: ハンバーガーメニューで開閉</p>
              <p>• プロジェクト一覧とナビゲーション機能</p>
            </div>
            <button
              onClick={toggleSidebar}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors lg:hidden"
            >
              {isSidebarOpen ? "サイドバーを閉じる" : "サイドバーを開く"}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
