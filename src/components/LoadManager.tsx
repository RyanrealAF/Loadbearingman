import React from 'react';
import { motion } from 'motion/react';
import { Weight, Package, Shield, Coffee, Book, Activity, Layers } from 'lucide-react';

interface LoadItem {
  id: string;
  name: string;
  weight: number;
  category: 'survival' | 'protection' | 'utility' | 'knowledge';
  icon: React.ReactNode;
}

const LOAD_ITEMS: LoadItem[] = [
  { id: 'tarp', name: 'Heavy Duty Tarp', weight: 4, category: 'survival', icon: <Shield size={14} /> },
  { id: 'sleeping-bag', name: '0° Sleeping Bag', weight: 6, category: 'survival', icon: <Package size={14} /> },
  { id: 'water', name: '3L Water', weight: 6.6, category: 'survival', icon: <Activity size={14} /> },
  { id: 'stove', name: 'Jetboil + Fuel', weight: 2, category: 'utility', icon: <Coffee size={14} /> },
  { id: 'notebooks', name: 'Field Notebooks (4)', weight: 3, category: 'knowledge', icon: <Book size={14} /> },
  { id: 'laptop', name: 'Rugged Laptop + Solar', weight: 5, category: 'knowledge', icon: <Layers size={14} /> },
  { id: 'clothing', name: 'Layered Clothing', weight: 4.4, category: 'protection', icon: <Shield size={14} /> },
];

const LoadManager: React.FC = () => {
  const totalWeight = LOAD_ITEMS.reduce((sum, item) => sum + item.weight, 0);
  
  return (
    <div className="p-6 bg-stone-50 border border-stone-200 rounded-sm space-y-6">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <div className="flex items-center gap-3 text-[#8b2e0f]">
          <Weight size={18} />
          <h3 className="font-['Bebas_Neue'] text-xl tracking-wider">The 31lb Baseline</h3>
        </div>
        <span className="font-mono text-sm font-bold text-stone-600">{totalWeight.toFixed(1)} lbs</span>
      </div>

      <div className="space-y-3">
        {LOAD_ITEMS.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="text-stone-400 group-hover:text-[#8b2e0f] transition-colors">
                {item.icon}
              </div>
              <span className="font-serif italic text-sm text-stone-700">{item.name}</span>
            </div>
            <span className="font-mono text-[10px] text-stone-400">{item.weight} lbs</span>
          </motion.div>
        ))}
      </div>

      <div className="pt-4 border-t border-stone-200">
        <div className="flex h-2 w-full rounded-full overflow-hidden bg-stone-200">
          <div className="h-full bg-emerald-700" style={{ width: '40%' }} title="Survival" />
          <div className="h-full bg-amber-700" style={{ width: '25%' }} title="Knowledge" />
          <div className="h-full bg-blue-700" style={{ width: '20%' }} title="Protection" />
          <div className="h-full bg-stone-500" style={{ width: '15%' }} title="Utility" />
        </div>
        <div className="mt-2 flex justify-between text-[8px] font-mono uppercase tracking-widest text-stone-400">
          <span>Survival</span>
          <span>Knowledge</span>
          <span>Utility</span>
        </div>
      </div>
      
      <p className="text-[10px] font-serif italic text-stone-500 leading-relaxed">
        "Weight is honest information. In a chaotic environment, the unvarnished number of what survival costs provides a structural anchor."
      </p>
    </div>
  );
};

export default LoadManager;
