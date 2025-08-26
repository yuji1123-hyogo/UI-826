"use client";
import React from "react";
import { Bell, Menu } from "lucide-react";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center  justify-between">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            TaskFlow
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span>🌞</span>
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full cursor-pointer hover:scale-105 transition-transform"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
