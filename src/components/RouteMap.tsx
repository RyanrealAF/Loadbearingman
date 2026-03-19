import React from 'react';
import { motion } from 'motion/react';

interface RouteMapProps {
  distanceTraveled: number;
  totalDistance?: number;
}

export const RouteMap: React.FC<RouteMapProps> = ({ 
  distanceTraveled, 
  totalDistance = 1000 // Default total distance for scaling
}) => {
  const progress = Math.min(distanceTraveled / totalDistance, 1);
  
  // A stylized winding path
  const pathData = "M 10 90 Q 30 10 50 50 T 90 10";
  
  return (
    <div className="relative w-32 h-32 bg-stone-100/50 rounded-full border border-stone-200 flex items-center justify-center overflow-hidden shadow-inner group">
      <svg viewBox="0 0 100 100" className="w-24 h-24 transform -rotate-12">
        {/* Background Path */}
        <path
          d={pathData}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-stone-300"
          strokeLinecap="round"
        />
        
        {/* Progress Path */}
        <motion.path
          d={pathData}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-[#8b2e0f]"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Indicator Dot */}
        <motion.circle
          r="4"
          fill="#8b2e0f"
          initial={{ offset: 0 }}
          animate={{ 
            cx: 90, // This is a simplification, ideally we'd calculate point on path
            cy: 10,
            opacity: progress > 0.95 ? 1 : 0.5
          }}
          className="shadow-lg"
        />
      </svg>
      
      {/* Label Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white p-2 text-center pointer-events-none">
        <span className="text-[8px] uppercase tracking-widest font-mono">Progress</span>
        <span className="text-xs font-serif italic">{Math.round(progress * 100)}%</span>
      </div>
      
      {/* Compass Accents */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 text-[6px] font-mono text-stone-400">N</div>
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[6px] font-mono text-stone-400">S</div>
    </div>
  );
};
