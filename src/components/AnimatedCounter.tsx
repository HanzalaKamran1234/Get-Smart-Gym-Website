"use client";

import React, { useState, useEffect, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ end, duration = 1500, suffix = "", className = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function: easeOutQuad
            const easedProgress = percentage * (2 - percentage);
            
            setCount(Math.floor(easedProgress * end));

            if (progress < duration) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [end, duration]);

  return (
    <div ref={elementRef} className={className}>
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}
