import React from "react";
import { X, Home, Calendar, Settings, FolderOpen, Plus } from "lucide-react";

// ナビゲーションアイテムの型定義
interface NavItem {
  name: string;
  icon: React.ElementType;
  href: string;
  active?: boolean;
}

// プロジェクトの型定義
interface Project {
  name: string;
  color: string;
}

// Sidebarコンポーネントの型定義
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navItems: NavItem[] = [
    { name: "ダッシュボード", icon: Home, href: "#", active: true },
    { name: "プロジェクト", icon: FolderOpen, href: "#" },
    { name: "カレンダー", icon: Calendar, href: "#" },
    { name: "設定", icon: Settings, href: "#" },
  ];

  const projects: Project[] = [
    { name: "ウェブアプリ開発", color: "bg-purple-500" },
    { name: "マーケティング", color: "bg-orange-500" },
    { name: "デザインシステム", color: "bg-blue-500" },
    { name: "モバイルアプリ", color: "bg-green-500" },
  ];

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200  transform transition-transform  duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-lg font-semibold text-gray-900 ">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                  item.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover-bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              プロジェクト
            </h3>
            <button className="p-1 rounded hover:bg-gray-100 transition colors">
              <Plus className="w-4 h-4 text-gray-500 " />
            </button>
          </div>

          <div className="space-y-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 px-3 py-2 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              >
                <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                <span className="text-sm text-gray-700 truncate">
                  {project.name}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full mt-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>プロジェクトを追加</span>
          </button>
        </div>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
}

export default Sidebar;
