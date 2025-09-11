import React from "react";
// StatsCardの型定義
interface StatsCardProps {
  title: string; // カードのタイトル
  value: number | string; // 表示する値
  icon: React.ComponentType<any>; // アイコンコンポーネント
  color: string; // アイコンの色クラス
  bgColor: string; // 背景色クラス
  trend?: {
    // オプション：トレンド表示
    value: number;
    isUp: boolean;
  };
}

function StatsCard({
  title,
  value,
  icon: Icon,
  color,
  bgColor,
  trend,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md border border-gray-200 p-6 transition-shadow">
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${bgColor} mr-4`}>
          <Icon className={`w-6 h-6 ${color}`} />
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 ">
            {title}
          </p>
          <div className="flex items-center space-x-2">
            <p className="text-2xl font-bold text-gray-900 ">
              {value}
            </p>

            {trend && (
              <div className={`flex items-center text-sm ${
                trend.isUp ? 'text-green-600' : 'text-red-600'
              }`}>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
