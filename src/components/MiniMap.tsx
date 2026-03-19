import React from 'react';
import { motion } from 'motion/react';

interface MiniMapProps {
  distanceTraveled: number;
  totalDistance: number;
}

const MiniMap: React.FC<MiniMapProps> = ({ distanceTraveled, totalDistance }) => {
  const progress = Math.min(1, distanceTraveled / totalDistance);
  
  // Simple SVG path representing the California coast from SD to SF
  const coastPath = "M 80 180 Q 60 140 50 100 Q 40 60 60 20";
  
  return (
    <div className="relative w-24 h-48 bg-stone-50/50 rounded-lg border border-stone-200 p-2 overflow-hidden group">
      <div className="absolute top-2 left-0 right-0 text-[8px] text-center font-mono uppercase tracking-tighter text-stone-400">
        Route: SD → SF
      </div>
      
      <svg viewBox="0 0 100 200" className="w-full h-full opacity-40">
        {/* Coastline */}
        <path 
          d={coastPath} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-stone-300"
        />
        
        {/* Progress Path */}
        <motion.path 
          d={coastPath} 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="text-[#8b2e0f]"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />

        {/* Current Position Marker */}
        <motion.circle
          r="3"
          fill="#8b2e0f"
          initial={{ offset: 0 }}
          animate={{ 
            cx: 80 - (progress * 20), // Rough approximation based on path
            cy: 180 - (progress * 160) 
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </svg>
      
      <div className="absolute bottom-2 left-0 right-0 text-[8px] text-center font-mono text-stone-500">
        {Math.round(progress * 100)}% Complete
      </div>
    </div>
  );
};

export default MiniMap;
