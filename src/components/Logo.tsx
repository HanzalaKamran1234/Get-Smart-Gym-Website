import React from "react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showTagline = false, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-8 text-lg",
    md: "h-10 text-xl",
    lg: "h-14 text-2xl",
  };

  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Golden Shield & Dumbbell Icon */}
      <svg
        className={`${iconSizes[size]} text-gold animate-pulse-slow`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5e0a3" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#aa7c11" />
          </linearGradient>
        </defs>
        <path
          d="M12 2L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 2Z"
          stroke="url(#gold-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Dumbbell bar */}
        <path
          d="M8 12H16"
          stroke="url(#gold-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* Left plates */}
        <rect
          x="6"
          y="9"
          width="2"
          height="6"
          rx="1"
          fill="url(#gold-grad)"
        />
        <rect
          x="4"
          y="10.5"
          width="2"
          height="3"
          rx="0.5"
          fill="url(#gold-grad)"
        />
        {/* Right plates */}
        <rect
          x="16"
          y="9"
          width="2"
          height="6"
          rx="1"
          fill="url(#gold-grad)"
        />
        <rect
          x="18"
          y="10.5"
          width="2"
          height="3"
          rx="0.5"
          fill="url(#gold-grad)"
        />
      </svg>

      <div className="flex flex-col leading-none">
        <div className={`font-outfit font-black tracking-wider ${sizeClasses[size]}`}>
          <span className="text-white">GET SMART</span>
          <span className="text-gold ml-1">GYM</span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-0.5 font-medium">
            Building Healthy Nation
          </span>
        )}
      </div>
    </div>
  );
}
