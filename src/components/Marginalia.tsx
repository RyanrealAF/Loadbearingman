import React from 'react';
import { formatText } from '../utils/textFormatting';
import { DeepDive } from '../App';

export const Marginalia = ({ 
  text, 
  progress, 
  onNavigate, 
  onDeepDive, 
  deepDives 
}: { 
  text: string, 
  progress: number, 
  onNavigate: (id: string) => void,
  onDeepDive: (dive: DeepDive) => void,
  deepDives: DeepDive[]
}) => (
  <div className="relative group">
    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-stone-200 group-hover:bg-stone-400 transition-colors" />
    <div className="pl-6 py-2 space-y-4">
      <div className="text-lg italic leading-relaxed text-stone-500 font-serif">
        {formatText(text, onNavigate, onDeepDive, deepDives)}
      </div>
      <div className="flex items-center gap-4">
        <div className="flex-grow bg-stone-100 h-px" />
        <span className="font-serif text-[10px] italic text-stone-300 uppercase tracking-widest">
          Chapter Progress: {progress}%
        </span>
      </div>
    </div>
  </div>
);
