"use client";
import {
  BarChart3,
  Bell,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Home,
  Settings,
  TrendingUp,
  User,
  User2,
  X,
} from "lucide-react";
import React, { useState } from "react";

function Header({ onMenuToggle, sidebarOpen }) {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20 px-4 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-100 active:scale-95"
          >
            <div className="relative">
              <X size={20} className="text-white" />
            </div>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center rotate-12 hover:rotate-0 transition-all duration-500">
              <BarChart3 size={16} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-wider">
              Task Flow
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 relative group hover:scale-125">
            <Bell size={20} className="text-white group-hover:animate-pulse" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-xs text-white font-bold animate-bounce">
              1
            </div>
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/100  transition-all duration-300 cursor-pointer hover:scale-125">
            <User size={16} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

const Sidebar = ({ isOpen, navItems, onNavClick }) => {
  return (
    <>
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white/10 backdrop-blur-md border-r border-white/20 
        transform transition-all duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <nav className="p-4 space-y-2 mt-4">
          {navItems.map((item, index) => (
            <div key={item.name} style={{ animationDelay: `${index * 100}ms` }}>
              <button
                onClick={() => onNavClick(item.name)}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group
                  ${
                    item.active
                      ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-white shadow-lg shadow-purple-500/20 scale-105"
                      : "text-white/70 hover:bg-white/10 hover:text-white hover:scale-105"
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-1 rounded-lg transition-all duration-300 ${
                      item.active ? "bg-white/20" : "group-hover:bg-white/10"
                    }`}
                  >
                    <item.icon size={18} />
                  </div>
                  {item.name}
                </div>
                <ChevronRight
                  size={16}
                  className={`transition-transform duration-300 ${
                    item.active ? "rotate-90" : "group-hover:translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={16} className="text-white" />
              <span className="text-sm font-medium text-white">今月の進捗</span>
            </div>
            <div className="text-2xl font-bold text-white mb-1">78%</div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => {}}
        ></div>
      )}
    </>
  );
};

function StatsCard() {
  return (
    <div>
      <div>
        <div>
          <p></p>
          <p></p>
          <div></div>
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

// function TaskItem(params:type) {

// }

// function TaskList(params:type) {

// }

// function WelcomeSection(params:type) {

// }

function TaskDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("ダッシュボード");

  const stats = [
    {
      title: "完了済み",
      value: "24",
      color: "from-green-500 to-emerald-600",
      icon: CheckCircle,
    },
    {
      title: "進行中",
      value: "8",
      color: "from-blue-500 to-cyan-600",
      icon: Clock,
    },
    {
      title: "今週の目標",
      value: "85%",
      color: "from-purple-500 to-violet-600",
      icon: BarChart3,
    },
  ];

  const tasks = [
    {
      id: 1,
      title: "ウェブサイトのデザイン完成",
      progress: 75,
      dueDate: "2024-12-15",
    },
    { id: 2, title: "API実装とテスト", progress: 40, dueDate: "2024-12-18" },
    { id: 3, title: "プレゼン資料作成", progress: 90, dueDate: "2024-12-12" },
    {
      id: 4,
      title: "コードレビューとリファクタリング",
      progress: 25,
      dueDate: "2024-12-20",
    },
  ];

  const navItems = [
    {
      name: "ダッシュボード",
      icon: Home,
      active: activeNav === "ダッシュボード",
    },
    { name: "タスク", icon: CheckCircle, active: activeNav === "タスク" },
    { name: "カレンダー", icon: Calendar, active: activeNav === "カレンダー" },
    { name: "設定", icon: Settings, active: activeNav === "設定" },
  ];

  const handleNavClick = (navName) => {
    setActiveNav(navName);
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        sidebarOpen={sidebarOpen}
      />
      <div className="flex">
        <Sidebar
          isOpen={sidebarOpen}
          navItems={navItems}
          onNavClick={handleNavClick}
        />
        <main>
          <div>
            <div>
              <StatsCard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TaskDashboard;
