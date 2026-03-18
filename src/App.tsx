/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  ChevronRight,
  Book,
  Weight,
  BookOpen,
  X,
  Layers,
  Activity,
  Search,
  Bookmark,
  FileText,
  Quote
} from 'lucide-react';

// --- Types ---

type SceneId = 'intro' | 'farmers-market' | 'taqueria' | 'night-roaster' | 'san-francisco' | 'conclusion';

interface DeepDive {
  id: string;
  label: string;
  content: string;
  icon: React.ReactNode;
}

interface StoryState {
  scene: SceneId;
  load: number;
  vibeShift: number;
  distanceTraveled: number;
  activeDeepDive: DeepDive | null;
}

// --- Content ---

interface StoryBeat {
  title: string;
  location: string;
  text: string;
  marginalia: string;
  nextScene: SceneId;
  deepDives: DeepDive[];
}

const STORY_BEATS: Record<SceneId, StoryBeat> = {
  intro: {
    title: "Chapter One: What the Poster Doesn't Show",
    location: "California Coast, 11 Days Out",
    text: "The California coast they sell in airports is technically real. Turquoise water. The pier stretching polite into the horizon. Now Marcus was riding through the actual version. Same coastline. Different truth. The bike under him was a twenty-year-old Trek held together with a zip tie and stubbornness. The pack weighed thirty-one pounds. When life gets chaotic, weight becomes useful information.",
    marginalia: "The city maintains a dual-layered reality. The primary layer is a curated performance; the secondary layer is the functional infrastructure of survival.",
    nextScene: 'farmers-market',
    deepDives: [
      {
        id: 'poster-vs-raw',
        label: "The Poster vs. The Raw Cut",
        icon: <Layers size={16} />,
        content: "The 'Poster City' is a curated performance of civic virtue. It requires the systematic exclusion of 'unexpected variables' to maintain its teeth-clean teeth, tourist smile. The 'Raw Cut' is the unedited machine running in the dark, where the actual work of survival and maintenance happens."
      },
      {
        id: '31lb-baseline',
        label: "The 31lb Baseline",
        icon: <Weight size={16} />,
        content: "Weight is honest information. In a chaotic environment, the unvarnished number of what survival costs provides a structural anchor. 31 pounds is the overhead of existence when stripped of institutional support."
      }
    ]
  },
  'farmers-market': {
    title: "Chapter Two: The Poster City",
    location: "9:00 AM - Farmers Market",
    text: "Heirloom tomatoes in colors that shouldn't exist. Lavender honey. A woman in two-hundred-dollar yoga gear noticed him noticing. Her body shifted half an inch. Tiny movement. Subtle. Smooth. Two steps sideways. The universal nonverbal for: unexpected variable detected, adjusting position, nothing to see here.",
    marginalia: "Avoidance behavior is a primary mechanism for maintaining the 'Poster City' boundary. The outsider is processed as a data variable to be bypassed.",
    nextScene: 'taqueria',
    deepDives: [
      {
        id: 'farmers-market-voice',
        label: "The Farmers Market Voice",
        icon: <Activity size={16} />,
        content: "A voice calibrated for ambient receipt. What you say is receivable as evidence of who you are. The performance of caring about provenance is a social currency used to purchase a sense of belonging at the edge of the market."
      },
      {
        id: 'avoidance-mechanics',
        label: "Avoidance Mechanics",
        icon: <Search size={16} />,
        content: "The micro-adjustment of body language communicates a data point to the space: this presence is a variable to be managed. The space organizes around the variable, creating a brief, unconscious consensus of exclusion."
      }
    ]
  },
  'taqueria': {
    title: "Chapter Three: What He Was For",
    location: "7:00 AM - Next Town Taqueria",
    text: "Two guys at the next table were deep in something. Not a casual disagreement. They paused when Marcus sat down. Then, the pressure change—the way a room shifts when two people who've been pulling against each other suddenly have a reason to stop. They oriented toward a third point. Him.",
    marginalia: "The outsider functions as a low-cost consensus mechanism. Internal group tensions are resolved by orienting toward a shared external variable.",
    nextScene: 'night-roaster',
    deepDives: [
      {
        id: 'free-consensus',
        label: "Free Consensus",
        icon: <Layers size={16} />,
        content: "The capacity to generate cross-factional alignment without requiring negotiation or compromise. Two people who cannot agree on anything find a shared target, allowing them to suspend their antagonism at zero cost to either party."
      },
      {
        id: 'ancodi-complex',
        label: "The ANCODI Complex",
        icon: <Activity size={16} />,
        content: "The co-activation of Anxiety, Contempt, and Disgust. This affective configuration triggers intergroup aggression reliably, bypassing shared values and operating at the level of shared rejection."
      }
    ]
  },
  'night-roaster': {
    title: "Chapter Four: The Education of the Outside",
    location: "11:00 PM - Behind the Coffee Roaster",
    text: "Brick holds the day's heat and releases it slow. Concrete steals it. A man in a bathrobe walking a dog stops. 'Good spot,' he says. 'Brick holds heat,' Marcus replies. The man nods. Both of those people are the city. The yoga gear and the bathrobe philosopher. Neither knows the other exists the way Marcus knows both of them.",
    marginalia: "The outsider possesses a unified view of the city's disparate files. Knowledge is gained through direct negotiation with the physical architecture.",
    nextScene: 'san-francisco',
    deepDives: [
      {
        id: 'thermal-real-estate',
        label: "Thermal Real Estate",
        icon: <Weight size={16} />,
        content: "The city teaches its curriculum through the physical properties of its materials. Brick is a battery; concrete is a thief. Survival is a technical negotiation with the architecture."
      },
      {
        id: 'intermission-show',
        label: "The Intermission Show",
        icon: <BookOpen size={16} />,
        content: "Housed people treat night as an intermission. For the outsider, the intermission is the real show. The city at 2 a.m. is a completely different animal, running its actual operations without the casing on."
      }
    ]
  },
  'san-francisco': {
    title: "Chapter Five: The City at Night Tells the Truth",
    location: "Dusk - San Francisco Overpass",
    text: "He reached San Francisco at dusk. Fog sliding in under the bridge. An older Vietnamese American man settled nearby. 'You just arrive?' he asked. 'Eleven days from San Diego,' Marcus said. The man smiled. 'Man who sees the whole system—he's inconvenient. So they make him the problem.'",
    marginalia: "The witness is perceived as a threat to the curated narrative. Making the witness 'the problem' is a defensive maneuver by the system.",
    nextScene: 'conclusion',
    deepDives: [
      {
        id: 'witness-problem',
        label: "The Witness Problem",
        icon: <Search size={16} />,
        content: "You cannot unwitness something. The city's preferred version requires the outsider to be illegible—to be the problem—so that the unedited version of the city cannot circulate with any authority."
      },
      {
        id: 'inconvenient-truth',
        label: "Inconvenient Truths",
        icon: <BookOpen size={16} />,
        content: "Testimony is harder to dismiss than argument. The city has given Marcus testimony by accident, just by running itself while he was present. This knowledge lives in him now and cannot be extracted."
      }
    ]
  },
  'conclusion': {
    title: "The Load-Bearing Man",
    location: "The End of the Road",
    text: "Some communities carry their weight on bridges and buildings. Others carry it on people. The load-bearing man didn't volunteer for the position. The architecture was built around him anyway. Marcus closed his eyes. And slept.",
    marginalia: "The 'Load-Bearing Man' is a structural necessity in certain social architectures, bearing the weight of communal cohesion through exclusion.",
    nextScene: 'intro',
    deepDives: [
      {
        id: 'structural-labor',
        label: "Structural Labor",
        icon: <Layers size={16} />,
        content: "The folk devil position constitutes a form of involuntary structural labor. The costs are borne by the individual, while the benefits of social cohesion accrue to the community."
      }
    ]
  }
};

// --- Components ---

const DeepDiveModal = ({ dive, onClose }: { dive: DeepDive, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-950/60 backdrop-blur-sm"
    onClick={onClose}
  >
    <motion.div 
      initial={{ scale: 0.95, y: 10 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.95, y: 10 }}
      className="bg-[#fffdfa] border border-stone-300 p-12 rounded-lg max-w-2xl w-full shadow-2xl space-y-8 relative"
      onClick={e => e.stopPropagation()}
    >
      {/* Page Corner Fold Effect */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-stone-100 border-l border-b border-stone-300 rounded-bl-lg shadow-inner" />
      
      <div className="flex items-center justify-between border-b border-stone-200 pb-6">
        <div className="flex items-center gap-4 text-stone-400">
          <Bookmark size={18} />
          <span className="font-serif text-xs italic tracking-wide">Appendix Excerpt</span>
        </div>
        <button onClick={onClose} className="text-stone-300 hover:text-stone-900 transition-colors p-2">
          <X size={24} />
        </button>
      </div>

      <div className="space-y-4">
        <h3 className="text-3xl font-serif text-stone-900 leading-tight italic">{dive.label}</h3>
      </div>

      <div className="relative">
        <Quote className="absolute -left-8 -top-4 text-stone-100 w-16 h-16 -z-10" />
        <p className="text-stone-800 leading-relaxed font-serif text-xl italic">
          {dive.content}
        </p>
      </div>

      <div className="pt-8 flex justify-center">
        <button 
          onClick={onClose}
          className="px-10 py-3 border border-stone-900 text-stone-900 font-serif italic text-sm hover:bg-stone-900 hover:text-stone-50 transition-all rounded-sm"
        >
          Return to Story
        </button>
      </div>
    </motion.div>
  </motion.div>
);

const Marginalia = ({ text, progress }: { text: string, progress: number }) => (
  <div className="relative group">
    <div className="absolute -left-8 top-0 bottom-0 w-1 bg-stone-200 group-hover:bg-stone-400 transition-colors" />
    <div className="pl-6 py-2 space-y-4">
      <div className="text-lg italic leading-relaxed text-stone-500 font-serif">
        {text}
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

const PageInfo = ({ miles, load, scene }: { miles: number, load: number, scene: SceneId }) => {
  const pageMap: Record<SceneId, number> = {
    intro: 1,
    'farmers-market': 12,
    taqueria: 28,
    'night-roaster': 45,
    'san-francisco': 62,
    conclusion: 84
  };

  return (
    <div className="flex justify-between items-center w-full font-serif italic text-stone-400 text-xs tracking-wide">
      <div className="flex items-center gap-4">
        <span>Page {pageMap[scene]}</span>
        <div className="w-1 h-1 rounded-full bg-stone-300" />
        <span>{miles} Miles Traveled</span>
      </div>
      <div className="flex items-center gap-2">
        <Weight size={12} />
        <span>{load} lbs</span>
      </div>
    </div>
  );
};

export default function App() {
  const [state, setState] = useState<StoryState>({
    scene: 'intro',
    load: 31,
    vibeShift: 0,
    distanceTraveled: 0,
    activeDeepDive: null
  });

  const currentBeat = STORY_BEATS[state.scene];

  const handleNext = () => {
    const nextId = currentBeat.nextScene;
    if (nextId === 'intro') {
      setState({
        scene: 'intro',
        load: 31,
        vibeShift: 0,
        distanceTraveled: 0,
        activeDeepDive: null
      });
      return;
    }

    setState(prev => ({
      ...prev,
      scene: nextId,
      load: prev.load + (Math.random() > 0.5 ? 1 : 0),
      vibeShift: Math.min(100, prev.vibeShift + 15),
      distanceTraveled: prev.distanceTraveled + 20,
    }));
  };

  return (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center p-4 md:p-8 font-serif selection:bg-stone-200 selection:text-stone-900">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      <main className="relative w-full max-w-4xl bg-[#fffdfa] min-h-[85vh] shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm flex flex-col md:flex-row overflow-hidden">
        {/* Book Spine / Left Margin */}
        <div className="hidden md:block w-16 bg-stone-100 border-r border-stone-200 relative">
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-transparent to-black/5" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] font-serif italic text-stone-400 tracking-[0.3em] uppercase">
            The Load-Bearing Man
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-grow flex flex-col p-8 md:p-16 relative">
          {/* Header */}
          <header className="mb-12">
            <PageInfo miles={state.distanceTraveled} load={state.load} scene={state.scene} />
            <div className="h-px bg-stone-100 w-full mt-4" />
          </header>

          {/* Story Content */}
          <div className="flex-grow space-y-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={state.scene}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-10"
              >
                <div className="space-y-4">
                  <span className="text-stone-400 text-xs italic tracking-widest uppercase">
                    {currentBeat.location}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight italic">
                    {currentBeat.title}
                  </h1>
                </div>

                <div className="relative">
                  <p className="text-xl md:text-2xl leading-relaxed text-stone-800 font-serif first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-stone-900">
                    {currentBeat.text}
                  </p>
                </div>

                {/* Footnotes / Deep Dives */}
                <div className="pt-8 border-t border-stone-100 space-y-6">
                  <div className="flex items-center gap-3 text-[10px] italic text-stone-400 uppercase tracking-widest">
                    <BookOpen size={14} />
                    <span>Footnotes & Appendices</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {currentBeat.deepDives.map((dive: DeepDive) => (
                      <button
                        key={dive.id}
                        onClick={() => setState(s => ({ ...s, activeDeepDive: dive }))}
                        className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 transition-colors border-b border-stone-200 hover:border-stone-900 pb-1"
                      >
                        <span className="font-serif italic">[{dive.label}]</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Marginalia */}
                <Marginalia text={currentBeat.marginalia} progress={state.vibeShift} />

                {/* Page Turn Button */}
                <div className="pt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-4 text-stone-900 font-serif italic text-lg hover:pr-4 transition-all duration-300"
                  >
                    <span>Turn the Page</span>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-stone-100 flex justify-between items-center">
            <div className="flex items-center gap-3 text-stone-300">
              <Book size={16} />
              <span className="text-[10px] italic tracking-widest uppercase">Volume I</span>
            </div>
            <div className="text-[10px] font-serif italic text-stone-300">
              Copyright © 2026 Ethnographic Press
            </div>
          </footer>
        </div>

        {/* Right Page Edge Shadow */}
        <div className="hidden md:block w-4 bg-gradient-to-l from-black/5 to-transparent" />
      </main>

      {/* Deep Dive Modal */}
      <AnimatePresence>
        {state.activeDeepDive && (
          <DeepDiveModal 
            dive={state.activeDeepDive} 
            onClose={() => setState(s => ({ ...s, activeDeepDive: null }))} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
