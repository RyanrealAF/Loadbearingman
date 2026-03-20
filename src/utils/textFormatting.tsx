import React from 'react';

export const formatText = (text: string, onSelectPaper: any, onDeepDive: any, deepDives: any) => {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, index) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      const [, linkText, linkUrl] = match;
      if (linkUrl.startsWith('http')) {
        return (
          <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-[#8b2e0f] border-b border-[#8b2e0f]/30 hover:border-[#8b2e0f] transition-all font-serif italic">
            {linkText}
          </a>
        );
      }
      return (
        <button
          key={index}
          onClick={() => onSelectPaper(linkUrl.replace('/papers/', ''))}
          className="text-[#8b2e0f] border-b border-[#8b2e0f]/30 hover:border-[#8b2e0f] transition-all font-serif italic cursor-pointer"
        >
          {linkText}
        </button>
      );
    }
    return part;
  });
};
