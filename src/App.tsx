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

type SceneId = 'prologue' | 'orange-county' | 'santa-barbara' | 'pismo-taqueria' | 'big-sur' | 'santa-cruz' | 'san-francisco' | 'epilogue';

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
  prologue: {
    title: "Prologue: The Weight of Departure",
    location: "San Diego - Mile 0",
    text: "The departure was not a grand event. It was a series of small, mechanical decisions. Marcus tightened the straps on the panniers, feeling the familiar resistance of thirty-one pounds of essential existence. The bike, a twenty-year-old Trek with a frame that hummed with the ghosts of previous owners, leaned against a salt-crusted railing. Behind him, the city was waking up in a haze of expensive coffee and morning news. Ahead, the road stretched north, a thin ribbon of asphalt separating the Pacific from the performance of civilization. He wasn't leaving a life; he was simply moving the weight of it to a more honest location.",
    marginalia: "Departure is the first act of witnessing. To move is to begin seeing the seams in the world's carefully constructed casing.",
    nextScene: 'orange-county',
    deepDives: [
      {
        id: '31lb-baseline',
        label: "The 31lb Baseline",
        icon: <Weight size={16} />,
        content: "Weight is honest information. In a chaotic environment, the unvarnished number of what survival costs provides a structural anchor. 31 pounds is the overhead of existence when stripped of institutional support."
      }
    ]
  },
  'orange-county': {
    title: "Chapter One: The Poster Coast",
    location: "Orange County - Mile 85",
    text: "The California coast they sell in airports is technically real. Turquoise water. The pier stretching polite into the horizon. But as Marcus rode through the manicured suburbs of the south, he saw the actual version. Same coastline, different truth. The lawns were too green for the drought, the air smelled of chlorine and expensive sunscreen. Here, the 'Poster City' was at its most aggressive. It was a curated performance of civic virtue, a place where the unexpected was systematically filtered out. He was a smudge on a perfect lens, a variable that the architecture wasn't designed to solve.",
    marginalia: "The 'Poster City' requires the systematic exclusion of 'unexpected variables' to maintain its tourist smile. The outsider is the unedited truth.",
    nextScene: 'santa-barbara',
    deepDives: [
      {
        id: 'poster-vs-raw',
        label: "The Poster vs. The Raw Cut",
        icon: <Layers size={16} />,
        content: "The 'Poster City' is a curated performance of civic virtue. It requires the systematic exclusion of 'unexpected variables' to maintain its teeth-clean teeth, tourist smile. The 'Raw Cut' is the unedited machine running in the dark."
      }
    ]
  },
  'santa-barbara': {
    title: "Chapter Two: The Market of Exclusion",
    location: "Santa Barbara - Mile 210",
    text: "In the shadow of the mission, the farmers market was a theater of provenance. Heirloom tomatoes in colors that shouldn't exist. Lavender honey. Marcus stood at the edge, his salt-stained shirt a stark contrast to the two-hundred-dollar yoga gear swirling around him. A woman noticed him noticing. Her body shifted half an inch—a tiny, subtle movement. Two steps sideways. It was the universal nonverbal for: unexpected variable detected, adjusting position, nothing to see here. The market didn't just sell food; it sold the comfort of a shared, curated reality.",
    marginalia: "Avoidance behavior is a primary mechanism for maintaining social boundaries. The outsider is processed as a data variable to be bypassed.",
    nextScene: 'pismo-taqueria',
    deepDives: [
      {
        id: 'avoidance-mechanics',
        label: "Avoidance Mechanics",
        icon: <Search size={16} />,
        content: "The micro-adjustment of body language communicates a data point to the space: this presence is a variable to be managed. The space organizes around the variable, creating a brief, unconscious consensus of exclusion."
      }
    ]
  },
  'pismo-taqueria': {
    title: "Chapter Three: The Structural Solution",
    location: "Pismo Beach - Mile 290",
    text: "The taqueria was loud, smelling of cilantro and hot oil. Two guys at the next table were deep in a disagreement that felt older than the building. They paused when Marcus sat down, the air between them thick with unresolved tension. Then, the pressure change—the way a room shifts when two people who've been pulling against each other suddenly have a reason to stop. They oriented toward a third point. Him. They didn't know him, but they knew what he was for. He was the solution to their friction, a shared target that allowed them to suspend their antagonism at zero cost.",
    marginalia: "The outsider functions as a low-cost consensus mechanism. Internal group tensions are resolved by orienting toward a shared external variable.",
    nextScene: 'big-sur',
    deepDives: [
      {
        id: 'free-consensus',
        label: "Free Consensus",
        icon: <Layers size={16} />,
        content: "The capacity to generate cross-factional alignment without requiring negotiation or compromise. Two people who cannot agree on anything find a shared target, allowing them to suspend their antagonism."
      },
      {
        id: 'ancodi-complex',
        label: "The ANCODI Complex",
        icon: <Activity size={16} />,
        content: "The co-activation of Anxiety, Contempt, and Disgust. This affective configuration triggers intergroup aggression reliably, bypassing shared values."
      }
    ]
  },
  'big-sur': {
    title: "Chapter Four: The Silence of the Grade",
    location: "Big Sur - Mile 360",
    text: "The climb out of San Simeon is a lesson in humility. The road clings to the cliffs like a desperate thought. Marcus felt every ounce of the thirty-one pounds as he ground up the grades, the Pacific crashing hundreds of feet below. Here, the city was gone, replaced by the indifferent roar of the ocean and the silence of the redwoods. In the absence of people, the weight became purely physical. There was no social friction to bear, only the gravity of the earth. It was a different kind of load, one that didn't require a witness, only endurance.",
    marginalia: "In the wild, weight is just physics. In the city, weight is a social statement. The transition between the two is where the truth lives.",
    nextScene: 'santa-cruz',
    deepDives: [
      {
        id: 'structural-labor',
        label: "Structural Labor",
        icon: <Layers size={16} />,
        content: "The folk devil position constitutes a form of involuntary structural labor. The costs are borne by the individual, while the benefits of social cohesion accrue to the community."
      }
    ]
  },
  'santa-cruz': {
    title: "Chapter Five: The Thermal Curriculum",
    location: "Santa Cruz - Mile 440",
    text: "Night in Santa Cruz is a technical negotiation. Marcus found a spot behind a coffee roaster where the brick walls still hummed with the day's heat. Brick is a battery; concrete is a thief. A man in a bathrobe walking a dog stopped. 'Good spot,' he said, his voice low. 'Brick holds heat,' Marcus replied. The man nodded, a brief moment of shared understanding between two versions of the city. The city teaches its curriculum through the physical properties of its materials, but only to those who are forced to listen. To the bathrobe philosopher, Marcus was a peer; to the yoga gear, he was a ghost.",
    marginalia: "The city teaches its curriculum through the physical properties of its materials. Survival is a technical negotiation with the architecture.",
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
        content: "Housed people treat night as an intermission. For the outsider, the intermission is the real show. The city at 2 a.m. is a completely different animal."
      }
    ]
  },
  'san-francisco': {
    title: "Chapter Six: The System Witness",
    location: "San Francisco - Mile 510",
    text: "He reached the overpass at dusk, the fog sliding in under the Golden Gate like a cold secret. An older man, his face a map of long-forgotten journeys, settled nearby. 'You just arrive?' he asked. 'Eleven days from San Diego,' Marcus said. The man smiled, a slow, knowing thing. 'Man who sees the whole system—he's inconvenient. So they make him the problem.' Marcus looked out at the lights of the city, the machine running its actual operations without the casing on. He had seen the whole thing, from the manicured lawns to the thermal batteries. He was the witness they couldn't afford to believe.",
    marginalia: "The witness is perceived as a threat to the curated narrative. Making the witness 'the problem' is a defensive maneuver by the system.",
    nextScene: 'epilogue',
    deepDives: [
      {
        id: 'witness-problem',
        label: "The Witness Problem",
        icon: <Search size={16} />,
        content: "You cannot unwitness something. The city's preferred version requires the outsider to be illegible—to be the problem—so that the unedited version of the city cannot circulate."
      }
    ]
  },
  'epilogue': {
    title: "Epilogue: The Load-Bearing Man",
    location: "The End of the Road",
    text: "The journey was over, but the weight remained. Some communities carry their weight on bridges and buildings, engineered and calculated. Others carry it on people, unacknowledged and invisible. The load-bearing man didn't volunteer for the position, but the architecture of the city was built around him anyway. He was the anchor for their cohesion, the target for their tensions, the witness to their unedited truths. Marcus closed his eyes, the hum of the road still in his bones. The road was real. The weight was real. And for now, that was enough.",
    marginalia: "The 'Load-Bearing Man' is a structural necessity in certain social architectures, bearing the weight of communal cohesion through exclusion.",
    nextScene: 'prologue',
    deepDives: [
      {
        id: 'inconvenient-truth',
        label: "Inconvenient Truths",
        icon: <BookOpen size={16} />,
        content: "Testimony is harder to dismiss than argument. The city has given Marcus testimony by accident, just by running itself while he was present."
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
    prologue: 1,
    'orange-county': 12,
    'santa-barbara': 28,
    'pismo-taqueria': 45,
    'big-sur': 62,
    'santa-cruz': 84,
    'san-francisco': 102,
    epilogue: 120
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
    scene: 'prologue',
    load: 31,
    vibeShift: 0,
    distanceTraveled: 0,
    activeDeepDive: null
  });

  const currentBeat = STORY_BEATS[state.scene];

  const handleNext = () => {
    const nextId = currentBeat.nextScene;
    if (nextId === 'prologue') {
      setState({
        scene: 'prologue',
        load: 31,
        vibeShift: 0,
        distanceTraveled: 0,
        activeDeepDive: null
      });
      return;
    }

    const milesMap: Record<SceneId, number> = {
      prologue: 0,
      'orange-county': 85,
      'santa-barbara': 210,
      'pismo-taqueria': 290,
      'big-sur': 360,
      'santa-cruz': 440,
      'san-francisco': 510,
      epilogue: 510
    };

    setState(prev => ({
      ...prev,
      scene: nextId,
      load: prev.load + (Math.random() > 0.7 ? 1 : 0),
      vibeShift: Math.min(100, prev.vibeShift + 12),
      distanceTraveled: milesMap[nextId],
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
