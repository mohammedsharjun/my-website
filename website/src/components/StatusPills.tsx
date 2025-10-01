"use client";
import React from 'react';

const StatusPills: React.FC = () => {
  const statusItems = [
    // Row 1
    {
      label: "hashtag",
      color: "bg-gradient-to-r from-purple-500 to-orange-500",
      textColor: "text-white"
    },
    {
      label: "entertainment",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-white"
    },
    {
      label: "Twitter",
      color: "bg-blue-400",
      textColor: "text-white",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      label: "careers",
      color: "bg-gradient-to-r from-green-500 to-green-300",
      textColor: "text-white"
    },
    {
      label: "movie",
      color: "bg-gradient-to-r from-red-500 to-red-800",
      textColor: "text-white"
    },
    {
      label: "video games",
      color: "bg-transparent border border-white/30",
      textColor: "text-white",
      glow: "shadow-[0_0_10px_rgba(59,130,246,0.3)]"
    },
    {
      label: "technology",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    
    // Row 2
    {
      label: "YouTube",
      color: "bg-transparent border border-white/30",
      textColor: "text-white",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      label: "events",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "concerts",
      color: "bg-gradient-to-r from-purple-300 to-pink-500",
      textColor: "text-white"
    },
    {
      label: "music",
      color: "bg-gradient-to-r from-green-500 to-blue-400",
      textColor: "text-white"
    },
    {
      label: "playstation",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "hollywood",
      color: "bg-white border border-black",
      textColor: "text-black"
    },
    {
      label: "xbox series x",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "#",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    
    // Row 3
    {
      label: "facebook",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "f",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      label: "academy awards",
      color: "bg-gradient-to-r from-blue-500 to-blue-300",
      textColor: "text-white"
    },
    {
      label: "grammy",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "art",
      color: "bg-white border border-black",
      textColor: "text-black"
    },
    {
      label: "→",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "interviews",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      textColor: "text-white"
    },
    
    // Row 4
    {
      label: "stories",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-white"
    },
    {
      label: "tiktok",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "TikTok",
      color: "bg-transparent border border-white/30",
      textColor: "text-white",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      label: "fashion",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "celebrity",
      color: "bg-gradient-to-r from-green-300 to-green-500",
      textColor: "text-white"
    },
    {
      label: "telegram",
      color: "bg-gradient-to-r from-blue-300 to-blue-500",
      textColor: "text-white"
    },
    {
      label: "✈",
      color: "bg-transparent border border-white/30",
      textColor: "text-blue-500"
    },
    {
      label: "bollywood",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      textColor: "text-white"
    },
    {
      label: "mobile",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    
    // Row 5
    {
      label: "whatsapp",
      color: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white"
    },
    {
      label: "Instagram",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500",
      textColor: "text-white"
    },
    {
      label: "Instagram",
      color: "bg-transparent border border-white/30",
      textColor: "text-white",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      label: "apple",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "←",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "microsoft",
      color: "bg-gradient-to-r from-blue-300 to-blue-500",
      textColor: "text-white"
    },
    {
      label: "Microsoft",
      color: "bg-transparent border border-white/30",
      textColor: "text-white",
      icon: (
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-1.5 h-1.5 bg-red-500"></div>
          <div className="w-1.5 h-1.5 bg-green-500"></div>
          <div className="w-1.5 h-1.5 bg-blue-500"></div>
          <div className="w-1.5 h-1.5 bg-yellow-500"></div>
        </div>
      )
    },
    {
      label: "nintendo",
      color: "bg-gradient-to-r from-pink-300 to-pink-500",
      textColor: "text-white"
    },
    
    // Row 6
    {
      label: "multimedia",
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      textColor: "text-white"
    },
    {
      label: "social media",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "internet",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "▶",
      color: "bg-transparent border border-white/30",
      textColor: "text-pink-500"
    },
    {
      label: "innovation",
      color: "bg-gradient-to-r from-pink-500 to-pink-300",
      textColor: "text-white"
    },
    {
      label: "😊",
      color: "bg-transparent border border-white/30",
      textColor: "text-yellow-400"
    },
    {
      label: "documentary",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    
    // Row 7
    {
      label: "television show",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "⏪",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    },
    {
      label: "youtube",
      color: "bg-gradient-to-r from-red-500 to-yellow-500",
      textColor: "text-white"
    },
    {
      label: "netflix",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "pinterest",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "golden globe",
      color: "bg-gradient-to-r from-purple-500 to-orange-500",
      textColor: "text-white"
    },
    
    // Row 8
    {
      label: "google",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "performance",
      color: "bg-gradient-to-r from-green-300 to-yellow-500",
      textColor: "text-white"
    },
    {
      label: "video clip",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "PlayStation",
      color: "bg-transparent border border-white/30",
      textColor: "text-blue-500"
    },
    {
      label: "instrumental",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "live",
      color: "bg-gradient-to-r from-pink-500 to-red-500",
      textColor: "text-white"
    },
    {
      label: "live concert",
      color: "bg-black border border-white/30",
      textColor: "text-white"
    },
    {
      label: "+",
      color: "bg-transparent border border-white/30",
      textColor: "text-white"
    }
  ];

  return (
    <section className="relative py-20 px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {statusItems.map((item, index) => (
            <div
              key={index}
              className={`
                relative px-4 py-2 rounded-full text-sm font-medium
                flex items-center gap-2
                transition-all duration-300 hover:scale-105
                ${item.color} ${item.textColor} ${item.glow || ''}
              `}
            >
              {item.icon && (
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
              )}
              <span className="whitespace-nowrap">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatusPills;
