/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
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
  Quote,
  Menu,
  ChevronLeft,
  ArrowUp
} from 'lucide-react';

import AcademicPaper from './components/AcademicPaper.tsx';
import MiniMap from './components/MiniMap.tsx';
import LoadManager from './components/LoadManager.tsx';
import { Marginalia } from './components/Marginalia.tsx';
import { PAPERS } from './data/papers';
import { formatText } from './utils/textFormatting';

// --- Types ---

type SceneId = 'prologue' | 'chapter-1' | 'chapter-2' | 'chapter-3' | 'chapter-4' | 'chapter-5' | 'chapter-6' | 'epilogue' | 'academic-paper';

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
  selectedPaperId: string | null;
  sidebarOpen: boolean;
  readingMode: 'day' | 'night';
}

// --- Content ---

interface StoryBeat {
  title: string;
  location: string;
  text: string;
  marginalia: string;
  nextScene: SceneId;
  deepDives: DeepDive[];
  relatedPaperIds?: string[];
}

const STORY_BEATS: Record<SceneId, StoryBeat> = {
  prologue: {
    title: "THE LOAD-BEARING MAN: A Story",
    location: "Author's Note",
    text: "The city got two faces. One it shows you at noon—clean teeth, tourist smile, sunscreen and brunch. The other shows up around 3 a.m.—makeup smeared, neon flickering, truth leaking through the cracks like cheap tequila. I’ve slept through both. — Marcus, notebook, Day 9\n\nAuthor’s note: Marcus is a composite. The road is real. The observations come from lived ground-level experience. Some details are reshaped for narrative clarity. The sociology underneath this story is explored more formally in the companion academic paper. This version just shows the bones.",
    marginalia: "The road is real. The observations come from lived ground-level experience.",
    nextScene: 'chapter-1',
    deepDives: [
      {
        id: 'academic-paper-link',
        label: "Research Library: The Folk Devil Series",
        icon: <FileText size={16} />,
        content: "The sociology underneath this story is explored more formally in a series of companion academic papers. Access the full research library below."
      },
      {
        id: '31lb-baseline',
        label: "The 31lb Baseline",
        icon: <Weight size={16} />,
        content: "Weight is honest information. In a chaotic environment, the unvarnished number of what survival costs provides a structural anchor. 31 pounds is the overhead of existence when stripped of institutional support."
      }
    ],
    relatedPaperIds: ['bwb-001']
  },
  'chapter-1': {
    title: "CHAPTER ONE: What the Poster Doesn't Show",
    location: "California Coast",
    text: "The California coast they sell in airports is technically real. Marcus had seen it once. Back when airports were places he moved through instead of places he sat outside watching other people move through. Turquoise water. The pier stretching polite into the horizon. Some blonde in a sundress laughing into the wind like rent didn’t exist. Sky that perfect Photoshop blue. Now he was riding through the actual version. Same coastline. Different truth. The highway climbed over a town where the main drag had three vape shops, a payday loan joint glowing like a bad decision, a taqueria that had been feeding people since 1987, and a mural of a farmworker that kept getting tagged and repainted like a quiet argument nobody ever finished. Marcus kind of respected that mural. Someone paints dignity. Someone else sprays “fuck your dignity.” Then somebody fixes it again. That’s a conversation. Even if nobody admits it. Even if it never resolves. The wall keeps having it anyway, which is more than most people can say. The wall has been honest about the argument in a way the people having it usually refuse to be. The bike under him was a twenty-year-old Trek held together with a zip tie and stubbornness. He related. The pack weighed thirty-one pounds. He knew because he’d weighed it twice. When life gets chaotic, weight becomes useful information. Thirty-one pounds is honest. Thirty-one pounds doesn’t perform for an audience. It’s just the unvarnished number of what survival costs when you strip the overhead away. No presentation layer. No optimistic rounding. Just the mass of what’s actually necessary. He was eleven days out of San Diego. San Francisco sat up ahead inside the fog like a rumor. Between here and there: California. No filters. No crop. Just the raw cut.",
    marginalia: "The wall has been honest about the argument in a way the people having it usually refuse to be.",
    nextScene: 'chapter-2',
    deepDives: [
      {
        id: 'poster-vs-raw',
        label: "The Poster vs. The Raw Cut",
        icon: <Layers size={16} />,
        content: "The 'Poster City' is a curated performance of civic virtue. It requires the systematic exclusion of 'unexpected variables' to maintain its teeth-clean teeth, tourist smile. The 'Raw Cut' is the unedited machine running in the dark."
      },
      {
        id: 'intermission-show',
        label: "The Intermission Show",
        icon: <BookOpen size={16} />,
        content: "Housed people treat night as an intermission. For the outsider, the intermission is the real show. The city at 2 a.m. is a completely different animal."
      }
    ],
    relatedPaperIds: ['fd-001']
  },
  'chapter-2': {
    title: "CHAPTER TWO: The Poster City and Its Keepers",
    location: "9:00 AM - Farmers Market",
    text: "At 9 a.m. Marcus rolled into a farmers market that looked like a goddamn lifestyle magazine editorial meeting that had gotten out of hand and started growing vegetables. Heirloom tomatoes in colors that shouldn’t exist. Lavender honey. Cold brew in glass jars with little chalkboard signs. A guy playing acoustic guitar near the entrance—soft fingerpicking drifting through the air like the morning had hired background music to make sure nobody got too reflective. It was actually beautiful. Not ironic beautiful. Just curated beautiful. And Marcus had enough miles on him to know that curated beautiful is still beautiful. The curation doesn’t cancel the thing itself. He’d made peace with that distinction somewhere around Santa Barbara. The performance of a value doesn’t automatically negate the value being performed. People can mean something and perform it at the same time. The performance is how the meaning gets communicated. This is not a contradiction. This is just how humans work. He locked his bike and walked through slow. He wasn’t in a hurry. He was rarely in a hurry. Urgency is mostly manufactured. People watching at a farmers market is like a sociology seminar with better snacks and lower admission requirements. There’s a posture people adopt there. Canvas tote over the shoulder. Coffee cup as prop. The relaxed expression of someone who has made thoughtful choices about how to exist on the planet and wouldn’t object if this were acknowledged. Upright. Unhurried. Slightly glowing with the specific satisfaction of people who believe they are, at this moment, doing the right thing. Not performing the right thing—actually doing it. The farmer’s market is one of the few places where that distinction collapses completely, which may be why people love it so much. There’s a voice too. Just loud enough for nearby strangers to overhear. Not shouting—performing. The farmers market voice is calibrated for ambient receipt. What you say should be receivable as evidence of who you are. You are the kind of person who asks about the farming practices of a tomato. The record should reflect this. The strangers around you are the record. There’s a transaction style. You ask the vendor a question you already know the answer to, because the question was never really about the answer. It was about demonstrating, in a semipublic setting, that you are someone who cares about provenance. That’s not dishonest. That’s social. All performance is deliberate without necessarily being insincere. Marcus had learned to stop collapsing those two things. He watched all of it with genuine affection. The tomatoes were actually good. The honey vendor had the specific radiance of someone who had found the exact intersection of their values and their livelihood and settled there without apology. The Townes Van Zandt song drifting from the guitar player—Marcus thought: yeah, man. You and me both. Standing at the edge of something watching it happen, playing for people who aren’t quite listening. I know that assignment. A woman in two-hundred-dollar yoga gear noticed him noticing. Her body shifted half an inch. Tiny movement. Subtle. Smooth. Two steps sideways with the fluid naturalness of someone who has practiced—has genuinely practiced—moving away from unexpected variables without appearing to move away from unexpected variables. The universal nonverbal for: unexpected variable detected, adjusting position, nothing to see here. She didn’t glare. Didn’t say anything. Didn’t make it a thing. That was the sophistication of it. She made it nothing, which is how you make it stick. If Marcus had his notebook out he would have written: Avoidance, Level: Olympic.",
    marginalia: "All performance is deliberate without necessarily being insincere.",
    nextScene: 'chapter-3',
    deepDives: [
      {
        id: 'avoidance-mechanics',
        label: "Avoidance Mechanics",
        icon: <Search size={16} />,
        content: "The micro-adjustment of body language communicates a data point to the space: this presence is a variable to be managed. The space organizes around the variable, creating a brief, unconscious consensus of exclusion."
      }
    ],
    relatedPaperIds: ['fd-001']
  },
  'chapter-3': {
    title: "CHAPTER THREE: What He Was For",
    location: "7:00 AM - Taqueria",
    text: "The taqueria in the next town opened at 7 a.m. because 7 a.m. tacos are not a lifestyle choice. They’re for the overnight shift workers whose bodies have stopped respecting clocks. For the people whose schedules bent the architecture of the day into something the brunch economy doesn’t recognize. For the people who were up at 4 and haven’t decided whether to sleep or keep going. The woman in the back made tortillas by hand. The calm repetition of someone who had executed the same motion ten thousand times and knew exactly what the motion would produce. Skill at that level stops being performance and becomes permanence—a thing that continues through you rather than belonging to you, that will outlast you the way the taqueria itself would outlast every venture concept that had tried to establish itself within a three-block radius in the last decade. The taqueria had been here since 1987. The juice bar had lasted fourteen months. The artisanal pickle shop had lasted six. The tortilla woman had been here since before all of them and would be here after. Some things are load-bearing. Some things are decorative. The market sorts them out eventually. Marcus sat outside. Sun hitting the table at the right angle. Outside was where he thought best. Open air, open sight lines. No walls deciding what was visible. Two guys at the next table were deep in something. Not a casual disagreement. Something that had been cooking for weeks, that had accumulated history and grievance, that was using this particular morning as today’s venue the way long arguments use whatever surface is available. One had neck tattoos Marcus had learned to read the way you learn to read weather—as information about where you are, what the pressure is, which direction things might move. The other had the exhaustion of a man who’d been orbiting that world without full membership in it. That’s its own complicated country. Costs a lot to maintain the distance. You’re paying the social tax of proximity without receiving the social benefits of belonging. They paused when Marcus sat down. He ordered. He watched a pigeon work a dropped tortilla chip with the focused precision of a professional. Complete commitment to the problem. No self-consciousness. No awareness of being observed and no modification of behavior in response to being observed. Just the chip, and the methodology for acquiring it. Marcus respected it. He didn’t look at the two men. But he felt the thing happen. It was atmospheric before it was visible. A pressure change—the way a room shifts when two people who’ve been pulling against each other suddenly have a reason to stop. The argument didn’t pause. It redirected. Two people oriented against each other found a third point and briefly, wordlessly, oriented toward it together instead. Not friends. Not resolved. Just momentarily aligned. Marcus had felt this enough times to recognize it the way you recognize weather coming before you can see the clouds. It had a texture. A quality of attention that was more unified than the normal ambient awareness of strangers sharing a space. Two instruments that had been playing against each other landing, for a moment, on the same note. He ate his food. The tortillas were perfect. The pigeon got the chip. He paid. He left the tip. He got back on the bike.",
    marginalia: "The outsider is free consensus.",
    nextScene: 'chapter-4',
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
    ],
    relatedPaperIds: ['fd-001', 'uw-001']
  },
  'chapter-4': {
    title: "CHAPTER FOUR: The Education of the Outside",
    location: "The Curriculum",
    text: "By the time he hit the next stretch of coast Marcus had been working out a question for forty miles: Not what had been done to him. What the position had given him. Because it had given him something. He wasn’t being sentimental about it. He wasn’t performing gratitude for adversity. He was trying to be accurate, which meant acknowledging both the cost and the curriculum. And the cost was real—it had to be named before the curriculum could be named, because collapsing them together was its own kind of dishonesty. The cost: You carry a weight that isn’t distributed. Every room you enter you enter contested. Every transaction requires more energy than it should because the baseline is wrong—you’re not starting from neutral, you’re starting from the deficit that the outsider-coding has already established before you’ve said anything or done anything. You pay a social tax on every interaction that the housed person pays nothing on. The coffee at the farmers market costs the same dollar amount but it costs more in the currency that doesn’t appear on receipts. The currency of having to prove, continuously, that you’re not the thing they’ve already decided you are. And you can’t pay that tax down. You can’t accumulate credit. Good behavior doesn’t reduce the rate. The rate is set not by your conduct but by your category, and the category is set by something that precedes your conduct entirely. You can be impeccably polite and correctly change and composure-in-the-face-of-provocation and none of it moves the needle. The function requires the outsider to remain available, which means the outsider’s good behavior has to be either invisible or reinterpreted as cunning. The system doesn’t have a redemption pathway. It doesn’t need one. Redemption would defeat the purpose. That was the cost. He was clear about it because clarity was the only thing it couldn’t take from him. The curriculum was this: he had been given access to the city that the city didn’t consent to. Housed people experience the city the way the city wants to be experienced—curated, managed, presenting its better version during the hours it keeps available for public inspection. He had experienced the city the way you experience a person when they don’t know you’re in the room: the dropped performance, the private negotiation, the actual face rather than the presented one. He had seen a city councilman once, 2 a.m., in a parking lot doing something the councilman would not have done if he’d known anyone was awake. He had seen a pastor leave a building he shouldn’t have been leaving at an hour he shouldn’t have been there. Not because Marcus was investigating or documenting. Just because he was present and awake while the city thought it was unobserved. The city had not consented to being seen. It had simply forgotten he was there. Or it had decided, based on the category, that he didn’t count as an audience. None of it was exceptional. That was the thing. This wasn’t surveillance of remarkable behavior. It was just the normal operations of people and institutions that had stopped performing because they believed the audience had gone home. The delivery infrastructure, the maintenance crews, the people who kept the poster version available and presentable for morning—all of it running in the dark, essential, invisible, unacknowledged in any version of the city that anyone chose to advertise. The witness position wasn’t comfortable. Marcus was not recommending it. But it was a position, and it had epistemological consequences—consequences about what you knew and couldn’t un-know and couldn’t be argued out of. That last part was the problem. You could challenge someone’s opinion. You could challenge their inference. You could challenge their analysis. You couldn’t challenge what they’d watched with their own eyes from twenty feet away in a sleeping bag. Testimony is harder to dismiss than argument. The city had given him testimony by accident, just by running itself while he was present, and that testimony lived in him now and could not be extracted.",
    marginalia: "A man who has seen the whole system is inconvenient not because he is dangerous but because he is a witness.",
    nextScene: 'chapter-5',
    deepDives: [
      {
        id: 'witness-problem',
        label: "The Witness Problem",
        icon: <Search size={16} />,
        content: "You cannot unwitness something. The city's preferred version requires the outsider to be illegible—to be the problem—so that the unedited version of the city cannot circulate."
      }
    ],
    relatedPaperIds: ['uw-001', 'psych-001']
  },
  'chapter-5': {
    title: "CHAPTER FIVE: What Gets Carried and What Gets Built",
    location: "Morro Bay to SLO",
    text: "The coast between Morro Bay and San Luis Obispo does something specific to light in the late afternoon. It flattens it, makes it horizontal, turns it almost architectural—like the light itself is load-bearing, holding up the visible world from the west. Marcus had been watching this effect for three days and hadn’t found the right word for it yet. He’d been trying. The notebook had four attempts. None of them were right. He stopped on a cliff overlook and ate an apple and watched the Pacific doing its thing. The question that had been building for forty miles was still building. It had gotten more specific. It wasn’t just about the cost and the curriculum anymore. It was about what you do with the information the position generates. Because the information is real. The testimony is real. The witness is credible even if the category says otherwise. A fact doesn’t stop being a fact because the person who observed it has been assigned an illegibility function by the community whose operations the fact would complicate. The question was: what do you do with what you know, when what you know is not supposed to be knowable by someone in your position? He didn’t have an answer yet. He ate the apple. He kept riding. There was a conversation in the next town that he thought about for the rest of the trip. He’d stopped at a library to use the WiFi and charge his phone—libraries are the only institution in America that still functions with something close to unconditional access, which is why they’re always being defunded by people who don’t understand what they’re actually paying for. A librarian had looked up from the reference desk when he walked in. Not the reflexive assessment he’d gotten elsewhere. Just: person entering building, does this person need something. “Anything I can help you find?” she said. He thought about it for a second. “Do you have anything on Durkheim?” She pulled up the catalog. “We have a couple things. You looking for primary or secondary?” “Either,” he said. “I’m trying to understand something about how communities hold together when they don’t have a lot in common.” She found it. He sat for two hours. He took notes in the same notebook where he’d been recording everything else. When he left she said, “Good luck with the research.” He said, “Thank you for treating this like research.” She looked a little confused. He didn’t explain. He went back to the bike. He thought about that interaction for fifty miles. The unconditional access. The question asked without prior assessment. The research treated as research because the person doing it said it was research, and that was enough. The default that was applied. He couldn’t identify any other institution in the last eleven days that had applied that default.",
    marginalia: "The research treated as research because the person doing it said it was research, and that was enough.",
    nextScene: 'chapter-6',
    deepDives: [
      {
        id: 'structural-labor',
        label: "Structural Labor",
        icon: <Layers size={16} />,
        content: "The folk devil position constitutes a form of involuntary structural labor. The costs are borne by the individual, while the benefits of social cohesion accrue to the community."
      }
    ],
    relatedPaperIds: ['bwb-001', 'psych-001']
  },
  'chapter-6': {
    title: "CHAPTER SIX: The City at Night Tells the Truth",
    location: "San Francisco - Dusk",
    text: "He reached San Francisco at dusk, which was the best possible time to reach it. The light does a specific thing on the California coast in the evening. Goes gold, then amber, then a color that doesn’t exist in any language Marcus knew—some threshold frequency between orange and disappearance. Fog sliding in under the bridge. The towers catching the last light like they were holding onto it on purpose. From a car it looks cinematic. From a bike you’re inside the light, not watching it. That’s the difference. Eleven days of coast had given him a lot of things from the inside. He found a concrete ledge under an overpass near the water. Not inside the camp—territories matter and protocols exist for reasons, and you don't walk into an established community without introduction and expect to be received as anything but a problem. But close enough to the water to have a view, sitting up, of the bay and the bridge lights coming on. He ate something from the pack and watched the city execute its nightly switch. Tourist infrastructure lit up, filled with people who had paid for the poster version. Financial towers emptied, their occupants dispersed to the neighborhoods that didn’t appear in any tourism materials. The working neighborhoods—the actual structural base of the city, the places that fed and moved and maintained everything that made the poster version possible—kept doing what they always did. Unhurried. Unperforming. The restaurants feeding the people who needed feeding. The buses moving the people who needed moving. The whole enormous mechanism of a city that didn’t care whether anyone was watching. The poster city and the actual city running simultaneously on the same infrastructure. Both real. Both necessary. The poster city needing the actual city to exist, and declining to acknowledge it. The actual city needing the poster city’s resources to keep running, and receiving those resources at a discount, through back channels, without credit. The two cities in a relationship that neither had formally agreed to, sustained by the labor of people neither city talked about in public. He thought: I have been both of those cities’ infrastructure for eleven days. The poster city used me as its villain. The actual city taught me its operating system. Neither one asked permission. A man settled nearby at the right distance. The distance that communicates: I am not a threat, I am not asking for anything, I am not going to make this complicated. The distance that people who sleep outside learn to calibrate because getting it wrong—too close or too far—sends the wrong signal and signals have consequences. He was older. Vietnamese American. The particular stillness of someone who had been in a lot of different situations and learned early that stillness is usually the strongest opening move. They sat in silence while the bridge lights came fully on. “You just arrive?” the man said. “Eleven days from San Diego,” Marcus said. The man made a sound that wasn’t quite a laugh. Appreciation, maybe, for the specificity. When you live outside, numbers are more reliable than impressions. People who live outside know this about each other. “See anything interesting?” “Yeah,” Marcus said. “Lot of good things. Lot of funny shit too.” “Funny how?” Marcus leaned back on the ledge. Thought about eleven days. The coyote. The crying banker. The tortilla woman making something that would outlast her. The bathrobe philosopher and the structural engineering of a good brick wall. The farmers market, beautiful and performing simultaneously, both things true at once. The teenager in the doorway. The pigeon’s complete professional commitment to the tortilla chip. The couple’s four-minute operatic reconciliation. The guitar player doing Townes in the middle of the boutique vegetable situation. The librarian who asked what he needed and meant it. “You ever just watch a fancy farmers market?” he said. “Stand at the edge and actually watch it?” The man smiled. “Yeah.” “Everyone performing health. Canvas bag. Question about the tomatoes they already know the answer to. Loud enough that the people nearby receive it as character evidence.” Marcus shrugged. “But the tomatoes are actually good. The honey is actually good. Both things are running on the same hardware at the same time. You can only see both if you’re outside the performance.” The man nodded. “Same town, twelve hours later. Guy in a bathrobe evaluates the thermal properties of my windbreak like we’re reviewing real estate. Both of those people are the city. Neither knows the other exists the way I know both of them. I carry both versions. The city keeps them in separate files.” Fog moved further in across the water. The bridge was half visible now, half implied. “That’s what they’re afraid of,” the man said. Marcus looked at him. “You just arrive?” the man said. “Eleven days from San Diego,” Marcus said. The man made a sound that wasn’t quite a laugh. Appreciation, maybe, for the specificity. When you live outside, numbers are more reliable than impressions. People who live outside know this about each other. “See anything interesting?” “Yeah,” Marcus said. “Lot of good things. Lot of funny shit too.” “Funny how?” Marcus leaned back on the ledge. Thought about eleven days. The coyote. The crying banker. The tortilla woman making something that would outlast her. The bathrobe philosopher and the structural engineering of a good brick wall. The farmers market, beautiful and performing simultaneously, both things true at once. The teenager in the doorway. The pigeon’s complete professional commitment to the tortilla chip. The couple’s four-minute operatic reconciliation. The guitar player doing Townes in the middle of the boutique vegetable situation. The librarian who asked what he needed and meant it. “You ever just watch a fancy farmers market?” he said. “Stand at the edge and actually watch it?” The man smiled. “Yeah.” “Everyone performing health. Canvas bag. Question about the tomatoes they already know the answer to. Loud enough that the people nearby receive it as character evidence.” Marcus shrugged. “But the tomatoes are actually good. The honey is actually good. Both things are running on the same hardware at the same time. You can only see both if you’re outside the performance.” The man nodded. “Same town, twelve hours later. Guy in a bathrobe evaluates the thermal properties of my windbreak like we’re reviewing real estate. Both of those people are the city. Neither knows the other exists the way I know both of them. I carry both versions. The city keeps them in separate files.” Fog moved further in across the water. The bridge was half visible now, half implied. “That’s what they’re afraid of,” the man said. Marcus looked at him. “You just arrive?” the man said. “Eleven days from San Diego,” Marcus said. The man made a sound that wasn’t quite a laugh. Appreciation, maybe, for the specificity. When you live outside, numbers are more reliable than impressions. People who live outside know this about each other. “See anything interesting?” “Yeah,” Marcus said. “Lot of good things. Lot of funny shit too.” “Funny how?” Marcus leaned back on the ledge. Thought about eleven days. The coyote. The crying banker. The tortilla woman making something that would outlast her. The bathrobe philosopher and the structural engineering of a good brick wall. The farmers market, beautiful and performing simultaneously, both things true at once. The teenager in the doorway. The pigeon’s complete professional commitment to the tortilla chip. The couple’s four-minute operatic reconciliation. The guitar player doing Townes in the middle of the boutique vegetable situation. The librarian who asked what he needed and meant it. “You ever just watch a fancy farmers market?” he said. “Stand at the edge and actually watch it?” The man smiled. “Yeah.” “Everyone performing health. Canvas bag. Question about the tomatoes they already know the answer to. Loud enough that the people nearby receive it as character evidence.” Marcus shrugged. “But the tomatoes are actually good. The honey is actually good. Both things are running on the same hardware at the same time. You can only see both if you’re outside the performance.” The man nodded. “Same town, twelve hours later. Guy in a bathrobe evaluates the thermal properties of my windbreak like we’re reviewing real estate. Both of those people are the city. Neither knows the other exists the way I know both of them. I carry both versions. The city keeps them in separate files.” Fog moved further in across the water. The bridge was half visible now, half implied. “That’s what they’re afraid of,” the man said. Marcus looked at him. “That you can see that.” He was quiet a moment. The bridge fog shifted. “Man who sees the whole system—he’s inconvenient. So they make him the problem. Easier than letting him describe what he’s seen.” “Yeah,” Marcus said. “Question is what you do with it.” Marcus hadn’t expected that. He looked at the man. “You got testimony,” the man said. “Real testimony. Not argument. Not inference. What you actually saw. From where you actually were. That’s a different kind of thing than what most people have.” He looked at the water. “Most people got opinions. You got witness.” “Nobody’s going to receive it as that,” Marcus said. “Not yet,” the man said. “But testimony doesn’t expire. It stays what it is until someone decides to look at it properly.” He said it the way you say something you worked out a long time ago and haven’t needed to revise since. Then he stood, unhurried, and walked in the direction of the camp. Marcus watched him go. The bridge sat in the fog. The city sat under it, running its nightly operations in all registers simultaneously—poster version and real version and the version that only exists when no one is managing it. Beautiful and ridiculous and true. All at once. Somewhere a siren moved through several streets and faded. Someone laughed in the distance, the laugh carrying further than they’d intended in the night air. Marcus lay back on the concrete ledge. He thought: I have seen the whole machine. He thought: eso no lo pueden perdonar. That’s the one thing they can’t forgive. He opened the notebook. Wrote the date. Wrote: Eleven days. San Diego to San Francisco. What the position costs. What the position gives. What you do with testimony when the institution that should receive it has been built to refuse it. Starting to figure out the last one. He closed the notebook.",
    marginalia: "Testimony doesn't expire. It stays what it is until someone decides to look at it properly.",
    nextScene: 'epilogue',
    deepDives: [
      {
        id: 'thermal-real-estate',
        label: "Thermal Real Estate",
        icon: <Weight size={16} />,
        content: "The city teaches its curriculum through the physical properties of its materials. Brick is a battery; concrete is a thief. Survival is a technical negotiation with the architecture."
      }
    ]
  },
  'epilogue': {
    title: "The Load-Bearing Man",
    location: "The End of the Road",
    text: "Some communities carry their weight on bridges and buildings. Others carry it on people. The load-bearing man didn’t volunteer for the position. The architecture was built around him anyway. He closed his eyes. And slept.",
    marginalia: "The architecture was built around him anyway.",
    nextScene: 'prologue',
    deepDives: [
      {
        id: 'inconvenient-truth',
        label: "Inconvenient Truths",
        icon: <BookOpen size={16} />,
        content: "Testimony is harder to dismiss than argument. The city has given Marcus testimony by accident, just by running itself while he was present."
      }
    ]
  },
  'academic-paper': {
    title: "BUILD WHILE BLEEDING",
    location: "Formal Theory",
    text: "The academic paper is being viewed in the overlay.",
    marginalia: "Theory as survival.",
    nextScene: 'prologue',
    deepDives: []
  }
};

// --- Components ---

const PageInfo = ({ miles, load, scene, readingTime }: { miles: number, load: number, scene: SceneId, readingTime: number }) => {
  const pageMap: Record<SceneId, number> = {
    prologue: 1,
    'chapter-1': 12,
    'chapter-2': 28,
    'chapter-3': 45,
    'chapter-4': 62,
    'chapter-5': 84,
    'chapter-6': 102,
    epilogue: 120,
    'academic-paper': 0
  };

  return (
    <div className="flex justify-between items-center w-full font-serif italic text-stone-400 text-xs tracking-wide">
      <div className="flex items-center gap-4">
        <span>Page {pageMap[scene]}</span>
        <div className="w-1 h-1 rounded-full bg-stone-300" />
        <span>{miles} Miles Traveled</span>
        <div className="w-1 h-1 rounded-full bg-stone-300" />
        <span>{readingTime} min read</span>
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
    activeDeepDive: null,
    selectedPaperId: null,
    sidebarOpen: false,
    readingMode: 'day'
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isPageTurning, setIsPageTurning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentBeat = STORY_BEATS[state.scene];

  const readingTime = Math.ceil(currentBeat.text.split(' ').length / 200);

  const handleNext = () => {
    setIsPageTurning(true);
    
    setTimeout(() => {
      const nextId = currentBeat.nextScene;
      if (nextId === 'prologue') {
        setState({
          scene: 'prologue',
          load: 31,
          vibeShift: 0,
          distanceTraveled: 0,
          activeDeepDive: null,
          selectedPaperId: null,
          sidebarOpen: false
        });
        setIsPageTurning(false);
        return;
      }

      const milesMap: Record<SceneId, number> = {
        prologue: 0,
        'chapter-1': 85,
        'chapter-2': 210,
        'chapter-3': 290,
        'chapter-4': 360,
        'chapter-5': 440,
        'chapter-6': 510,
        epilogue: 510,
        'academic-paper': 0
      };

      setState(prev => ({
        ...prev,
        scene: nextId,
        load: prev.load + (Math.random() > 0.7 ? 1 : 0),
        vibeShift: Math.min(100, prev.vibeShift + 12),
        distanceTraveled: milesMap[nextId],
      }));
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsPageTurning(false);
    }, 400);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 flex items-center justify-center p-4 md:p-8 font-serif selection:bg-stone-200 selection:text-stone-900 ${state.readingMode === 'day' ? 'bg-stone-950' : 'bg-stone-900'}`}>
      {/* Reading Mode Toggle */}
      <div className="fixed top-8 right-8 z-[80] flex items-center gap-4">
        <button
          onClick={() => setState(s => ({ ...s, readingMode: s.readingMode === 'day' ? 'night' : 'day' }))}
          className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono ${
            state.readingMode === 'day' 
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
              : 'bg-[#8b2e0f] border-[#8b2e0f]/50 text-white hover:bg-[#a03a1a]'
          }`}
        >
          {state.readingMode === 'day' ? 'Reading Light: On' : 'Reading Light: Off'}
        </button>
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 z-[70] flex pointer-events-none">
        <motion.div
          initial={false}
          animate={{ x: state.sidebarOpen ? 0 : -320 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className={`w-80 border-r shadow-2xl pointer-events-auto flex flex-col transition-colors duration-700 ${
            state.readingMode === 'day' ? 'bg-[#f0ebe2] border-stone-300' : 'bg-[#141210] border-stone-800'
          }`}
        >
          <div className={`p-6 border-b flex items-center justify-between transition-colors duration-700 ${
            state.readingMode === 'day' ? 'border-stone-300' : 'border-stone-800'
          }`}>
            <h2 className={`font-['Bebas_Neue'] text-2xl tracking-wider transition-colors duration-700 ${
              state.readingMode === 'day' ? 'text-[#8b2e0f]' : 'text-[#b89a4e]'
            }`}>Research Library</h2>
            <button 
              onClick={() => setState(s => ({ ...s, sidebarOpen: false }))}
              className={`p-2 rounded-full transition-colors ${
                state.readingMode === 'day' ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-stone-800 text-stone-400'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            <div className="space-y-2">
              <h3 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest text-stone-400 mb-2">Chapters</h3>
              {Object.keys(STORY_BEATS).filter(key => key !== 'academic-paper').map(key => (
                <button
                  key={key}
                  onClick={() => setState(s => ({ ...s, scene: key as SceneId, sidebarOpen: false }))}
                  className={`w-full text-left p-2 rounded-md transition-all font-serif italic text-sm ${
                    state.scene === key 
                      ? (state.readingMode === 'day' ? 'bg-[#8b2e0f] text-white' : 'bg-[#b89a4e] text-stone-900') 
                      : (state.readingMode === 'day' ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-stone-800 text-stone-400')
                  }`}
                >
                  {STORY_BEATS[key as SceneId].title}
                </button>
              ))}
            </div>

            <div className={`h-px my-4 transition-colors duration-700 ${
              state.readingMode === 'day' ? 'bg-stone-300' : 'bg-stone-800'
            }`} />

            <div className="space-y-2">
              <h3 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest text-stone-400 mb-2">Research Papers</h3>
              <button
                onClick={() => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: null, sidebarOpen: false }))}
                className={`w-full text-left p-4 rounded-md transition-all font-['Space_Mono'] text-[0.65rem] uppercase tracking-wider ${
                  !state.selectedPaperId && state.scene === 'academic-paper' 
                    ? (state.readingMode === 'day' ? 'bg-[#8b2e0f] text-white' : 'bg-[#b89a4e] text-stone-900') 
                    : (state.readingMode === 'day' ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-stone-800 text-stone-400')
                }`}
              >
                Library Overview
              </button>
              {PAPERS.map(paper => (
                <button
                  key={paper.id}
                  onClick={() => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: paper.id, sidebarOpen: false }))}
                  className={`w-full text-left p-4 rounded-md transition-all group ${
                    state.selectedPaperId === paper.id 
                      ? (state.readingMode === 'day' ? 'bg-[#8b2e0f] text-white' : 'bg-[#b89a4e] text-stone-900') 
                      : (state.readingMode === 'day' ? 'hover:bg-stone-200 text-stone-600' : 'hover:bg-stone-800 text-stone-400')
                  }`}
                >
                  <div className="font-['Space_Mono'] text-[0.55rem] uppercase tracking-widest mb-1 opacity-70">
                    {paper.year}
                  </div>
                  <div className="font-['EB_Garamond'] text-sm italic font-medium leading-tight">
                    {paper.title}
                  </div>
                </button>
              ))}
            </div>

            <div className={`h-px my-4 transition-colors duration-700 ${
              state.readingMode === 'day' ? 'bg-stone-300' : 'bg-stone-800'
            }`} />

            <div className="space-y-2">
              <h3 className="font-['Space_Mono'] text-[0.65rem] uppercase tracking-widest text-stone-400 mb-2">The Load</h3>
              <LoadManager />
            </div>
          </div>
          <div className={`p-6 border-t transition-colors duration-700 ${
            state.readingMode === 'day' ? 'border-stone-300 bg-stone-100/50' : 'border-stone-800 bg-stone-900/50'
          }`}>
            <p className="font-['Space_Mono'] text-[0.5rem] uppercase tracking-widest text-stone-400">
              Street-Level Studies · Vol. I
            </p>
          </div>
        </motion.div>

        {!state.sidebarOpen && (
          <motion.div className="flex flex-col gap-4 mt-6 ml-6">
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              onClick={() => setState(s => ({ ...s, sidebarOpen: true }))}
              className={`w-12 h-12 border rounded-full shadow-lg flex items-center justify-center transition-all pointer-events-auto group ${
                state.readingMode === 'day' 
                  ? 'bg-white border-stone-300 text-stone-600 hover:text-[#8b2e0f] hover:border-[#8b2e0f]' 
                  : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-[#b89a4e] hover:border-[#b89a4e]'
              }`}
            >
              <BookOpen size={20} className="group-hover:scale-110 transition-transform" />
            </motion.button>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="pointer-events-auto"
            >
              <MiniMap distanceTraveled={state.distanceTraveled} totalDistance={510} />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_70%)]" />
      </div>

      {/* Page Turn Flash */}
      <AnimatePresence>
        {isPageTurning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[200] pointer-events-none ${
              state.readingMode === 'day' ? 'bg-white' : 'bg-stone-900'
            }`}
          />
        )}
      </AnimatePresence>

      {/* Reading Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 origin-left z-[100] transition-colors duration-700 ${
          state.readingMode === 'day' ? 'bg-[#8b2e0f]' : 'bg-[#b89a4e]'
        }`}
        style={{ scaleX }}
      />

      <main className={`relative w-full max-w-4xl min-h-[85vh] shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-sm flex flex-col md:flex-row overflow-hidden transition-colors duration-700 ${
        state.readingMode === 'day' ? 'bg-[#fffdfa]' : 'bg-[#1a1816]'
      }`}>
        {/* Paper Texture Overlay */}
        <div className={`absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-700 ${
          state.readingMode === 'day' ? 'opacity-[0.03]' : 'opacity-[0.01]'
        }`} 
          style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }} />
        
        {/* Book Spine / Left Margin */}
        <div className={`hidden md:block w-16 border-r transition-colors duration-700 relative ${
          state.readingMode === 'day' ? 'bg-stone-100 border-stone-200' : 'bg-[#141210] border-stone-800'
        }`}>
          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-r from-transparent to-black/5" />
          <div className="absolute top-12 left-1/2 -translate-x-1/2 [writing-mode:vertical-rl] rotate-180 text-[10px] font-serif italic text-stone-400 tracking-[0.3em] uppercase">
            The Load-Bearing Man
          </div>
        </div>

        {/* Page Content */}
        <div className={`flex-grow flex flex-col p-8 md:p-16 relative transition-colors duration-700 ${
          state.readingMode === 'day' ? 'text-stone-900' : 'text-stone-300'
        }`}>
          {/* Header */}
          <header className="mb-12">
            <PageInfo miles={state.distanceTraveled} load={state.load} scene={state.scene} readingTime={readingTime} />
            <div className={`h-px w-full mt-4 transition-colors duration-700 ${
              state.readingMode === 'day' ? 'bg-stone-100' : 'bg-stone-800'
            }`} />
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
                  <div className="flex justify-between items-start">
                    <span className="text-stone-400 text-xs italic tracking-widest uppercase">
                      {currentBeat.location}
                    </span>
                  </div>
                  <h1 className={`text-4xl md:text-5xl font-serif leading-tight italic transition-colors duration-700 ${
                    state.readingMode === 'day' ? 'text-stone-900' : 'text-[#b89a4e]'
                  }`}>
                    {currentBeat.title}
                  </h1>
                </div>

                <div className="relative">
                  <p className={`text-xl md:text-2xl leading-relaxed font-serif transition-colors duration-700 ${
                    state.readingMode === 'day' ? 'text-stone-800' : 'text-stone-400'
                  } first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:transition-colors first-letter:duration-700 ${
                    state.readingMode === 'day' ? 'first-letter:text-stone-900' : 'first-letter:text-[#8b2e0f]'
                  }`}>
                    {formatText(currentBeat.text, (id) => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: id })))}
                  </p>
                </div>

                {/* Footnotes / Deep Dives */}
                <div className="pt-8 border-t border-stone-100 space-y-8">
                  <div className="space-y-4">
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

                  {currentBeat.relatedPaperIds && currentBeat.relatedPaperIds.length > 0 && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-[10px] italic text-stone-400 uppercase tracking-widest">
                        <FileText size={14} />
                        <span>Related Research</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentBeat.relatedPaperIds.map(paperId => {
                          const paper = PAPERS.find(p => p.id === paperId);
                          if (!paper) return null;
                          return (
                            <button
                              key={paperId}
                              onClick={() => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: paperId }))}
                              className="group text-left p-4 bg-stone-50 border border-stone-200 rounded-sm hover:border-[#8b2e0f] transition-all"
                            >
                              <div className="font-['Space_Mono'] text-[0.5rem] uppercase tracking-widest text-stone-400 mb-1">
                                {paper.year} · {paper.id}
                              </div>
                              <div className="font-serif italic text-sm text-stone-700 group-hover:text-[#8b2e0f] transition-colors">
                                {paper.title}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Marginalia */}
                <Marginalia 
                  text={currentBeat.marginalia} 
                  progress={state.vibeShift} 
                  onNavigate={(id) => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: id }))}
                />

                {/* Page Turn Button */}
                <div className="pt-8 flex justify-end">
                  <button
                    onClick={handleNext}
                    className={`group flex items-center gap-4 font-serif italic text-lg hover:pr-4 transition-all duration-300 ${
                      state.readingMode === 'day' ? 'text-stone-900' : 'text-[#b89a4e]'
                    }`}
                  >
                    <span>Turn the Page</span>
                    <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <footer className={`mt-16 pt-8 border-t flex justify-between items-center transition-colors duration-700 ${
            state.readingMode === 'day' ? 'border-stone-100' : 'border-stone-800'
          }`}>
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-stone-950/60 backdrop-blur-sm"
            onClick={() => setState(s => ({ ...s, activeDeepDive: null }))}
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
                <button onClick={() => setState(s => ({ ...s, activeDeepDive: null }))} className="text-stone-300 hover:text-stone-900 transition-colors p-2">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-serif text-stone-900 leading-tight italic">{state.activeDeepDive.label}</h3>
              </div>

              <div className="relative">
                <Quote className="absolute -left-8 -top-4 text-stone-100 w-16 h-16 -z-10" />
                <p className="text-stone-800 leading-relaxed font-serif text-xl italic">
                  {formatText(state.activeDeepDive.content, (id) => setState(s => ({ ...s, scene: 'academic-paper', selectedPaperId: id, activeDeepDive: null })))}
                </p>
              </div>

              <div className="pt-8 flex flex-col items-center gap-4">
                {state.activeDeepDive.id === 'academic-paper-link' && (
                  <button 
                    onClick={() => setState(s => ({ ...s, scene: 'academic-paper', activeDeepDive: null }))}
                    className="w-full px-10 py-4 bg-[#8b2e0f] text-white font-serif italic text-lg hover:bg-[#a03a1a] transition-all rounded-sm shadow-lg flex items-center justify-center gap-3"
                  >
                    <BookOpen size={20} />
                    Open Research Library
                  </button>
                )}
                <button 
                  onClick={() => setState(s => ({ ...s, activeDeepDive: null }))}
                  className="px-10 py-3 border border-stone-900 text-stone-900 font-serif italic text-sm hover:bg-stone-900 hover:text-stone-50 transition-all rounded-sm"
                >
                  Return to Story
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`fixed bottom-8 right-8 w-12 h-12 border rounded-full shadow-lg flex items-center justify-center transition-all z-[70] group ${
              state.readingMode === 'day' 
                ? 'bg-white border-stone-300 text-stone-600 hover:text-[#8b2e0f] hover:border-[#8b2e0f]' 
                : 'bg-stone-800 border-stone-700 text-stone-400 hover:text-[#b89a4e] hover:border-[#b89a4e]'
            }`}
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Academic Paper Overlay */}
      <AnimatePresence>
        {state.scene === 'academic-paper' && (
          <div className="fixed inset-0 z-[60] overflow-y-auto">
            <AcademicPaper 
              selectedPaperId={state.selectedPaperId}
              onSelectPaper={(id) => setState(s => ({ ...s, selectedPaperId: id }))}
              onBack={() => setState(s => ({ ...s, scene: 'prologue', selectedPaperId: null }))} 
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
