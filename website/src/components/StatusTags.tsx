"use client";
import React from 'react';

const StatusTags: React.FC = () => {
  const statusItems = [
    {
      label: "In progress",
      icon: "⭕",
      color: "bg-cyan-500/20 border-cyan-400/30"
    },
    {
      label: "To-do",
      icon: "➕",
      color: "bg-blue-500/20 border-blue-400/30"
    },
    {
      label: "In Review",
      icon: "📋",
      color: "bg-yellow-500/20 border-yellow-400/30"
    },
    {
      label: "Design Review",
      icon: "🎨",
      color: "bg-purple-500/20 border-purple-400/30"
    },
    {
      label: "Rework",
      icon: "🔄",
      color: "bg-red-500/20 border-red-400/30"
    },
    {
      label: "Done",
      icon: "✅",
      color: "bg-green-500/20 border-green-400/30"
    },
    {
      label: "Not Started",
      icon: "➖",
      color: "bg-pink-500/20 border-pink-400/30"
    },
    {
      label: "Blocked",
      icon: "❌",
      color: "bg-red-600/20 border-red-500/30"
    },
    {
      label: "On Hold",
      icon: "⏸️",
      color: "bg-blue-600/20 border-blue-500/30"
    },
    {
      label: "Archived",
      icon: "📦",
      color: "bg-gray-600/20 border-gray-500/30"
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-[#140c14]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          {/* Row 1 - 5 items */}
          <div className="flex justify-center gap-4">
            {statusItems.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className={`relative backdrop-blur-md border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color}`}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-white text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 - 4 items */}
          <div className="flex justify-center gap-4">
            {statusItems.slice(5, 9).map((item, index) => (
              <div
                key={index + 5}
                className={`relative backdrop-blur-md border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color}`}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-white text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 3 - 3 items */}
          <div className="flex justify-center gap-4">
            {statusItems.slice(9, 12).map((item, index) => (
              <div
                key={index + 9}
                className={`relative backdrop-blur-md border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color}`}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-white text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 4 - 2 items */}
          <div className="flex justify-center gap-4">
            {statusItems.slice(12, 14).map((item, index) => (
              <div
                key={index + 12}
                className={`relative backdrop-blur-md border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color}`}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-white text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 5 - 1 item */}
          <div className="flex justify-center gap-4">
            {statusItems.slice(14, 15).map((item, index) => (
              <div
                key={index + 14}
                className={`relative backdrop-blur-md border rounded-full px-4 py-3 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color}`}
              >
                {/* Top highlight */}
                <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-white text-lg">{item.icon}</span>
                  <span className="text-white font-medium text-sm whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusTags;
