import React from 'react';
import { motion } from 'motion/react';

interface MiniMapProps {
  distanceTraveled: number;
  totalDistance: number;
}

const LOCATIONS = [
  { name: 'San Diego', progress: 0, x: 80, y: 180 },
  { name: 'Oceanside', progress: 0.15, x: 75, y: 155 },
  { name: 'Laguna', progress: 0.3, x: 70, y: 130 },
  { name: 'Long Beach', progress: 0.45, x: 65, y: 105 },
  { name: 'Malibu', progress: 0.6, x: 55, y: 80 },
  { name: 'Santa Barbara', progress: 0.75, x: 50, y: 55 },
  { name: 'San Francisco', progress: 1, x: 60, y: 20 },
];

const MiniMap: React.FC<MiniMapProps> = ({ distanceTraveled, totalDistance }) => {
  const [hoveredLocation, setHoveredLocation] = React.useState<string | null>(null);
  const progress = Math.min(1, distanceTraveled / totalDistance);
  
  // Simple SVG path representing the California coast from SD to SF
  const coastPath = "M 80 180 Q 60 140 50 100 Q 40 60 60 20";
  
  return (
    <div className="relative w-24 h-48 bg-stone-50/50 rounded-lg border border-stone-200 p-2 overflow-visible group">
      <div className="absolute top-2 left-0 right-0 text-[8px] text-center font-mono uppercase tracking-tighter text-stone-400">
        Route: SD → SF
      </div>
      
      <svg viewBox="0 0 100 200" className="w-full h-full opacity-40 overflow-visible">
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

        {/* Location Markers */}
        {LOCATIONS.map((loc) => (
          <g 
            key={loc.name} 
            className="cursor-pointer"
            onMouseEnter={() => setHoveredLocation(loc.name)}
            onMouseLeave={() => setHoveredLocation(null)}
          >
            <circle
              cx={loc.x}
              cy={loc.y}
              r={progress >= loc.progress ? "2" : "1"}
              fill={progress >= loc.progress ? "#8b2e0f" : "#d1d5db"}
              className="transition-all duration-300"
            />
            {hoveredLocation === loc.name && (
              <foreignObject x={loc.x + 5} y={loc.y - 10} width="60" height="20">
                <div className="bg-stone-900 text-white text-[6px] px-1 py-0.5 rounded shadow-lg whitespace-nowrap font-mono uppercase">
                  {loc.name}
                </div>
              </foreignObject>
            )}
          </g>
        ))}

        {/* Current Position Marker */}
        <motion.circle
          r="4"
          fill="#8b2e0f"
          className="shadow-lg"
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
