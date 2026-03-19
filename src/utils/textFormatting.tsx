import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, BookOpen } from 'lucide-react';
import { PAPERS } from '../data/papers';

export const GLOSSARY: Record<string, string> = {
  'folk devil': 'A person or group of people portrayed in folklore or the media as outsiders and deviant, and who are blamed for crimes or other social problems.',
  'social infrastructure': 'The physical and social systems that support community life, including libraries, parks, and informal networks.',
  'epistemological': 'Relating to the theory of knowledge, especially with regard to its methods, validity, and scope.',
  'denormalization': 'The process of trying to improve the read performance of a database, at the expense of some write performance, by adding redundant copies of data or by grouping data.',
  'survival-rooted creation': 'A mode of building and producing that emerges from within active deprivation, systemic pressure, and ongoing crisis.',
  'moral panic': 'A feeling of fear spread among a large number of people that some evil threatens the well-being of society.',
  'collective effervescence': 'A community or society may at times come together and simultaneously communicate the same thought and participate in the same action.',
  'complex PTSD': 'A psychological disorder that can develop in response to prolonged, repeated experience of interpersonal trauma in a context in which the individual has little or no chance of escape.',
  'acquired helplessness': 'A condition in which a person suffers from a sense of powerlessness, arising from a traumatic event or persistent failure to succeed.',
  'hypervigilance': 'An enhanced state of sensory sensitivity accompanied by an exaggerated intensity of behaviors whose purpose is to detect activity.',
  'witness problem': 'The structural discrediting of an individual to prevent their direct observations of systemic operations from being received as credible testimony.',
  'narrative authority': 'The social capacity to define oneself, to contest misrepresentations, and to have one\'s account of events considered on its merits.',
};

export const LIBRARY_LINKS: Record<string, string> = {
  'Build While Bleeding': 'bwb-theory',
  'folk devil': 'folk-devil-infrastructure',
  'moral panic': 'folk-devil-infrastructure',
  'ANCODI Complex': 'folk-devil-infrastructure',
  'collective effervescence': 'folk-devil-infrastructure',
  'destabilization campaigns': 'unseen-war',
  'complex PTSD': 'unseen-war',
  'acquired helplessness': 'harassment-architecture',
  'narrative dispossession': 'harassment-architecture',
  'involuntary structural labor': 'carried-weight',
  'interpretive charity': 'carried-weight',
  'street-level epistemology': 'bwb-theory',
  'moral panic literature': 'folk-devil-infrastructure',
  'tip-badge loop': 'folk-devil-infrastructure',
  'Breadcrumb Web': 'unseen-war',
  'outsider-coding': 'folk-devil-infrastructure',
  'free consensus': 'folk-devil-infrastructure',
  'atmospheric poisoning': 'unseen-war',
  'civilian weaponization': 'unseen-war',
  'institutional badge play': 'unseen-war',
  'entrapment loop': 'unseen-war',
  'digital erasure': 'unseen-war',
  'Dead Man\'s Switch': 'unseen-war',
  'hypervigilance': 'carried-weight',
  'survival-rooted creation': 'bwb-theory',
  'Economic hemorrhage': 'bwb-theory',
  'Social erosion': 'bwb-theory',
  'Institutional antagonism': 'bwb-theory',
  'Physiological depletion': 'bwb-theory',
  'Necessity-filtered authenticity': 'bwb-theory',
  'Compressed urgency': 'bwb-theory',
  'Oppositional identity': 'bwb-theory',
  'counter-institutional infrastructure': 'bwb-theory',
  'collective condemnation': 'folk-devil-infrastructure',
  'narrative corridor': 'folk-devil-infrastructure',
  'founding narrative': 'folk-devil-infrastructure',
  'witness problem': 'carried-weight',
  'institutional access': 'carried-weight',
  'narrative authority': 'carried-weight',
  'coordinated harassment': 'harassment-architecture',
  'atmospheric intelligence': 'harassment-architecture',
  'testimony': 'unseen-war',
  'witness': 'carried-weight',
  'sociology': 'folk-devil-infrastructure',
  'survival costs': 'bwb-theory',
  'institutional support': 'bwb-theory',
  'unexpected variables': 'folk-devil-infrastructure',
  'consensus of exclusion': 'folk-devil-infrastructure',
};

export const LibraryLink = ({ term, paperId, onNavigate }: { term: string, paperId: string, onNavigate: (id: string) => void, key?: string }) => {
  const [show, setShow] = useState(false);
  const definition = GLOSSARY[term.toLowerCase()];

  return (
    <span className="relative inline-block">
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(paperId);
        }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="inline-flex items-center gap-1 text-[#8b2e0f] hover:text-[#a03a1a] font-serif italic border-b border-[#8b2e0f]/30 hover:border-[#8b2e0f] transition-all group"
      >
        {term}
        <FileText size={10} className="opacity-40 group-hover:opacity-100 transition-opacity" />
      </button>
      <AnimatePresence>
        {show && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-stone-900 text-white text-[10px] font-serif italic leading-relaxed rounded shadow-xl z-50 pointer-events-auto"
          >
            <span className="block font-bold uppercase tracking-widest mb-1 text-stone-400">Research Link</span>
            <p className="mb-2">This term is explored in depth in the research paper: <span className="text-white font-bold">"{PAPERS.find(p => p.id === paperId)?.title}"</span></p>
            {definition && <p className="mb-2 border-t border-white/10 pt-2 opacity-80">{definition}</p>}
            <div className="mt-2 w-full py-1 bg-[#8b2e0f] text-white rounded flex items-center justify-center gap-2 text-[9px] uppercase tracking-tighter">
              Click to read full paper
            </div>
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export const GlossaryTerm = ({ term, children, onNavigate }: { term: string, children: React.ReactNode, onNavigate?: (id: string) => void, key?: string }) => {
  const [show, setShow] = useState(false);
  const definition = GLOSSARY[term.toLowerCase()];
  const linkedPaperId = Object.entries(LIBRARY_LINKS).find(([k]) => k.toLowerCase() === term.toLowerCase())?.[1];

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="border-b border-stone-300 hover:border-stone-900 cursor-help transition-colors"
      >
        {children}
      </span>
      <AnimatePresence>
        {show && definition && (
          <motion.span
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-stone-900 text-white text-[10px] font-serif italic leading-relaxed rounded shadow-xl z-50 pointer-events-auto"
          >
            <span className="block font-bold uppercase tracking-widest mb-1 text-stone-400">{term}</span>
            <p className="mb-2">{definition}</p>
            {linkedPaperId && onNavigate && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(linkedPaperId);
                }}
                className="mt-2 w-full py-1 bg-[#8b2e0f] text-white rounded flex items-center justify-center gap-2 text-[9px] uppercase tracking-tighter hover:bg-[#a03a1a] transition-colors"
              >
                <BookOpen size={10} />
                Read Research Paper
              </button>
            )}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-stone-900" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
};

export const formatText = (text: string, onNavigate: (id: string) => void) => {
  const allTerms = [
    ...Object.keys(LIBRARY_LINKS).map(term => ({ term, type: 'library' as const })),
    ...Object.keys(GLOSSARY).map(term => ({ term, type: 'glossary' as const }))
  ].sort((a, b) => b.term.length - a.term.length);

  let formatted: (string | React.ReactNode)[] = [text];
  const processedTerms = new Set<string>();

  allTerms.forEach(({ term, type }) => {
    if (processedTerms.has(term.toLowerCase())) return;
    processedTerms.add(term.toLowerCase());

    const newFormatted: (string | React.ReactNode)[] = [];
    formatted.forEach(part => {
      if (typeof part === 'string') {
        const regex = new RegExp(`(${term})`, 'gi');
        const split = part.split(regex);
        split.forEach((s, i) => {
          if (s.toLowerCase() === term.toLowerCase()) {
            if (type === 'library') {
              const paperId = Object.entries(LIBRARY_LINKS).find(([k]) => k.toLowerCase() === term.toLowerCase())?.[1];
              if (paperId) {
                newFormatted.push(<LibraryLink key={s + i} term={s} paperId={paperId} onNavigate={onNavigate} />);
              } else {
                newFormatted.push(s);
              }
            } else {
              newFormatted.push(<GlossaryTerm key={s + i} term={s} onNavigate={onNavigate}>{s}</GlossaryTerm>);
            }
          } else if (s !== '') {
            newFormatted.push(s);
          }
        });
      } else {
        newFormatted.push(part);
      }
    });
    formatted = newFormatted;
  });

  return formatted;
};
