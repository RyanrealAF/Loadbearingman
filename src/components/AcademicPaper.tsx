import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { PAPERS, AcademicPaperData } from '../data/papers';

interface AcademicPaperProps {
  onBack: () => void;
  selectedPaperId: string | null;
  onSelectPaper: (id: string | null) => void;
}

const AcademicPaper: React.FC<AcademicPaperProps> = ({ onBack, selectedPaperId, onSelectPaper }) => {
  const selectedPaper = PAPERS.find(p => p.id === selectedPaperId);

  const renderLibrary = () => (
    <div className="max-w-[900px] mx-auto px-6 py-20 relative">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-[#8b2e0f] font-['Space_Mono',_monospace] text-[0.62rem] uppercase tracking-[0.12em] hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={14} />
        Return to Story
      </button>

      <div className="mb-16">
        <h1 className="font-['Bebas_Neue',_sans-serif] text-6xl tracking-[0.05em] text-[#0e0c0a] mb-4">
          Research <span className="text-[#8b2e0f]">Library</span>
        </h1>
        <p className="font-['EB_Garamond',_serif] italic text-xl text-[#6b6560] leading-relaxed max-w-2xl">
          Formal sociological and psychological studies examining the folk devil as social infrastructure and the mechanics of survival-rooted creation.
        </p>
      </div>

      <div className="grid gap-8">
        {PAPERS.map((paper) => (
          <motion.button
            key={paper.id}
            whileHover={{ x: 10 }}
            onClick={() => onSelectPaper(paper.id)}
            className="group text-left border-l-2 border-[#c9bfb3] hover:border-[#8b2e0f] pl-8 py-4 transition-all"
          >
            <div className="font-['Space_Mono',_monospace] text-[0.6rem] tracking-[0.2em] text-[#b89a4e] uppercase mb-2">
              {paper.year} &mdash; {paper.author}
            </div>
            <h2 className="font-['Bebas_Neue',_sans-serif] text-3xl tracking-[0.02em] text-[#0e0c0a] group-hover:text-[#8b2e0f] transition-colors mb-2">
              {paper.title}
            </h2>
            <p className="font-['EB_Garamond',_serif] text-[#6b6560] line-clamp-2 italic">
              {paper.subtitle}
            </p>
          </motion.button>
        ))}
      </div>

      <footer className="mt-32 pt-8 border-t border-[#c9bfb3] font-['Space_Mono',_monospace] text-[0.55rem] tracking-[0.1em] text-[#6b6560] uppercase">
        <span>Street-Level Studies &nbsp;·&nbsp; buildwhilebleeding.com</span>
      </footer>
    </div>
  );

  const renderPaper = (paper: AcademicPaperData) => (
    <div className="max-w-[780px] mx-auto px-10 py-20 pb-32 relative">
      {/* Left rule line */}
      <div className="hidden lg:block fixed left-[calc(50%-390px-32px)] top-0 bottom-0 w-px bg-[#8b2e0f] opacity-30" />

      {/* Navigation */}
      <button 
        onClick={() => onSelectPaper(null)}
        className="mb-12 flex items-center gap-2 text-[#8b2e0f] font-['Space_Mono',_monospace] text-[0.62rem] uppercase tracking-[0.12em] hover:opacity-70 transition-opacity"
      >
        <ArrowLeft size={14} />
        Back to Library
      </button>

      {/* ---- HEADER ---- */}
      <div className="flex justify-between items-baseline border-b-2 border-[#0e0c0a] pb-2.5 mb-14 font-['Space_Mono',_monospace] text-[0.62rem] tracking-[0.12em] text-[#6b6560] uppercase">
        <span className="font-['Bebas_Neue',_sans-serif] text-[0.95rem] tracking-[0.22em] text-[#8b2e0f]">Build While Bleeding</span>
        <span>Vol. I &nbsp;·&nbsp; Street-Level Studies</span>
        <span>buildwhilebleeding.com</span>
      </div>

      {/* ---- TITLE BLOCK ---- */}
      <div className="mb-13 border-l-4 border-[#8b2e0f] pl-6">
        <div className="font-['Space_Mono',_monospace] text-[0.6rem] tracking-[0.2em] text-[#b89a4e] uppercase mb-3">Academic Paper &mdash; Original Theory</div>
        <h1 className="font-['Bebas_Neue',_sans-serif] text-[clamp(2.8rem,6vw,4.2rem)] leading-[0.95] tracking-[0.04em] text-[#0e0c0a] mb-4.5">
          {paper.title}
        </h1>
        <p className="font-['EB_Garamond',_serif] italic text-[1.15rem] text-[#6b6560] leading-[1.5] max-w-[540px]">
          {paper.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap gap-8 font-['Space_Mono',_monospace] text-[0.6rem] tracking-[0.1em] text-[#6b6560] uppercase">
          <span className="flex flex-col gap-1"><strong className="text-[#0e0c0a] text-[0.65rem]">Author</strong> {paper.author}</span>
          <span className="flex flex-col gap-1"><strong className="text-[#0e0c0a] text-[0.65rem]">Domain</strong> {paper.domain}</span>
          <span className="flex flex-col gap-1"><strong className="text-[#0e0c0a] text-[0.65rem]">Contact</strong> {paper.contact}</span>
          <span className="flex flex-col gap-1"><strong className="text-[#0e0c0a] text-[0.65rem]">Year</strong> {paper.year}</span>
        </div>
      </div>

      {/* ---- ABSTRACT ---- */}
      <div className="border border-[#c9bfb3] border-l-[3px] border-l-[#b89a4e] bg-[#b89a4e]/[0.04] px-7 py-6 mb-13">
        <div className="font-['Space_Mono',_monospace] text-[0.58rem] tracking-[0.2em] uppercase text-[#b89a4e] mb-3">Abstract</div>
        <p className="text-[0.95rem] leading-[1.75] text-[#6b6560] italic mb-6">
          {paper.abstract}
        </p>
        {paper.authorNote && (
          <div className="pt-6 border-t border-[#c9bfb3]/50">
            <div className="font-['Space_Mono',_monospace] text-[0.58rem] tracking-[0.2em] uppercase text-[#b89a4e] mb-3">Author Note</div>
            <p className="text-[0.85rem] leading-[1.6] text-[#6b6560] italic">
              {paper.authorNote}
            </p>
          </div>
        )}
      </div>

      {/* ---- SECTIONS ---- */}
      {paper.sections.map((section, idx) => (
        <div key={section.id} className="mb-12">
          <div className="flex items-baseline gap-4 mb-4.5">
            <span className="font-['Space_Mono',_monospace] text-[0.6rem] text-[#8b2e0f] tracking-[0.1em] flex-shrink-0">§ 0{idx + 1}</span>
            <h2 className="font-['Bebas_Neue',_sans-serif] text-[1.45rem] tracking-[0.08em] text-[#0e0c0a] leading-none border-b border-[#c9bfb3] pb-2 flex-1">{section.title}</h2>
          </div>
          <div className="text-[1.05rem] leading-[1.82] text-[#0e0c0a] text-justify hyphens-auto space-y-4.5">
            {section.content.map((para, pIdx) => (
              <p key={pIdx}>{para}</p>
            ))}
          </div>
          {idx < paper.sections.length - 1 && (
            <div className="flex items-center gap-3 my-10 opacity-35">
              <div className="flex-1 h-px bg-[#0e0c0a]" />
              <span className="font-['Bebas_Neue'] text-[0.9rem] tracking-[0.15em] text-[#8b2e0f]">· BWB ·</span>
              <div className="flex-1 h-px bg-[#0e0c0a]" />
            </div>
          )}
        </div>
      ))}

      {/* ---- REFERENCES ---- */}
      <div className="mt-20 pt-8 border-t border-[#c9bfb3]">
        <div className="font-['Space_Mono',_monospace] text-[0.6rem] tracking-[0.2em] uppercase text-[#b89a4e] mb-6">References</div>
        <div className="space-y-3 font-['EB_Garamond',_serif] text-[0.9rem] text-[#6b6560]">
          {paper.references.map((ref, rIdx) => (
            <p key={rIdx} className="pl-4 -indent-4">{ref}</p>
          ))}
        </div>
      </div>

      <footer className="border-t border-[#c9bfb3] pt-5 mt-20 flex justify-between font-['Space_Mono',_monospace] text-[0.55rem] tracking-[0.1em] text-[#6b6560] uppercase">
        <span>&copy; {paper.year} {paper.author} &mdash; <a href={`https://${paper.domain}`} className="text-[#8b2e0f] no-underline">{paper.domain}</a></span>
        <span>Street-Level Studies &nbsp;·&nbsp; Vol. I</span>
        <span><a href={`mailto:${paper.contact}`} className="text-[#8b2e0f] no-underline">{paper.contact}</a></span>
      </footer>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#f0ebe2] text-[#0e0c0a] font-['EB_Garamond',_serif] min-h-screen relative overflow-x-hidden selection:bg-[#8b2e0f]/20 selection:text-[#8b2e0f]"
    >
      {/* Grain overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-50 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%270_0_512_512%27_xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter_id=%27n%27%3E%3CfeTurbulence_type=%27fractalNoise%27_baseFrequency=%270.9%27_numOctaves=%274%27_stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect_width=%27100%25%27_height=%27100%25%27_filter=%27url(%23n)%27_opacity=%270.04%27/%3E%3C/svg%3E')]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedPaperId || 'library'}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {selectedPaper ? renderPaper(selectedPaper) : renderLibrary()}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default AcademicPaper;
