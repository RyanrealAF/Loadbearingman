export interface PaperSection {
  id: string;
  title: string;
  content: string[];
  isQuote?: boolean;
}

export interface AcademicPaperData {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  domain: string;
  contact: string;
  year: string;
  abstract: string;
  authorNote?: string;
  sections: PaperSection[];
  references: string[];
  footerNote?: string;
}

export const PAPERS: AcademicPaperData[] = [
  {
    id: 'bwb-theory',
    title: "Build While Bleeding",
    subtitle: "Survival-Rooted Creation as Resistance, Identity, and Infrastructure Among the Marginalized Builder",
    author: "RyanrealAF",
    domain: "buildwhilebleeding.com",
    contact: "purarecoveryryan@gmail.com",
    year: "2025",
    abstract: "This paper introduces and theorizes Build While Bleeding (BWB) as a distinct framework of survival-rooted creation — a mode of building, making, and producing that emerges not from conditions of stability and resource abundance, but from within active deprivation, systemic pressure, and ongoing personal crisis. Drawing from street-level epistemology, Black and Brown economic survival traditions, and independent creative labor, BWB is argued to constitute both a psychological posture and a structural response to chronic adversity. The paper maps its internal logic, examines its costs and its generative power, and situates it within broader frameworks of resilience, counter-institutional agency, and the political economy of informal creation.",
    sections: [
      {
        id: 'intro',
        title: "Introduction: The Problem of Building From Nothing",
        content: [
          "Most frameworks of entrepreneurship, creative production, and self-development share a silent assumption: that the builder begins from a position of basic stabilization. Capital theory assumes surplus before investment. Creative practice assumes time carved from labor. Even resilience literature typically frames hardship as a precondition to be overcome before productive work resumes.",
          "This assumption does not describe the lives of a significant and systematically ignored population of builders — those who build inside crisis, not after it. People who write music with no studio, no income, and nowhere to charge a laptop. People who launch websites from library terminals and code from phone screens on public transit. People who produce documentation, art, and systems while managing housing instability, legal pressure, social isolation, and physical exhaustion simultaneously.",
          "The condition is not metaphor. The bleeding is literal — financial hemorrhage, social wound, physiological toll. The building happens anyway.",
          "Build While Bleeding names this reality. It is not a motivational slogan. It is a descriptive framework for understanding how creation functions under conditions of active harm — and why that mode of creation produces a distinct epistemology, a distinct output quality, and a distinct form of agency that conventional frameworks cannot account for."
        ]
      },
      {
        id: 'epistemology',
        title: "Street-Level Epistemology: Where the Theory Comes From",
        content: [
          "Academic knowledge is typically produced in conditions of relative insulation — the university, the studio, the funded lab. Street-level epistemology, by contrast, is knowledge produced in conditions of exposure: exposure to economic scarcity, to surveillance, to institutional hostility, to physical danger. It is not inferior knowledge. It is differently generated knowledge, and in many domains, it is more accurate precisely because it cannot afford to be wrong.",
          "BWB theory originates here. It is not a derivative of startup culture, though it shares surface features with certain lean-startup or bootstrapping philosophies. Where those frameworks celebrate frugality as strategy, BWB describes scarcity as condition. The distinction is material: the bootstrapping founder can stop. The BWB practitioner cannot. Stopping means collapse — not market exit, but personal dissolution.",
          "This distinction reframes the theory's stakes. BWB is not productivity methodology. It is a survival philosophy that happens to produce output. The creation is real, often significant, and sometimes excellent. But it emerges as a byproduct of the deeper imperative to remain functional, remain purposeful, and remain alive — in every sense of that word — while circumstances attempt to foreclose all three."
        ]
      },
      {
        id: 'anatomy',
        title: "The Anatomy of the Bleed: What Active Crisis Actually Costs",
        content: [
          "To build while bleeding, one must first understand what bleeding means in this context. The framework identifies four primary bleed vectors, each of which imposes compounding costs on the builder's capacity to produce.",
          "Economic hemorrhage is the most visible — zero income, zero savings, dependence on informal networks or intermittent gig labor. It restricts access to tools, connectivity, time, and physical safety. Social erosion describes the dismantling of support networks — through defamation, isolation, or the simple attrition of relationships that cannot survive one party's sustained crisis. Institutional antagonism refers to active pressure from systems — legal, governmental, corporate — that consume time, cognitive load, and emotional reserve in defensive operations rather than generative ones. Physiological depletion encompasses the embodied costs: disrupted sleep, inadequate nutrition, deferred medical care, and the accumulated somatic damage of sustained high-stress existence.",
          "Each vector does not merely subtract resource. Each vector attacks the belief that the work matters — which is the more dangerous wound.",
          "The psychological literature on chronic stress documents cognitive narrowing under sustained threat — reduced working memory, impaired executive function, foreshortened time horizon. BWB theory does not deny this. It asks a harder question: what does creation look like inside that narrowing, and what does it produce that creation outside it cannot?"
        ]
      },
      {
        id: 'generative',
        title: "The Generative Mechanism: Why Crisis Produces a Distinct Output",
        content: [
          "BWB creation is not simply creation under difficult circumstances. It possesses a distinct generative mechanism that differentiates it qualitatively from creation in stability. Three mechanisms are central.",
          "Necessity-filtered authenticity. When there is no audience, no platform, no advance, and no safety net, the work that gets made is work the maker had to make. The performative and the instrumental fall away. What remains is signal — stripped of the noise that comfort and approval introduce into creative practice. BWB output tends toward rawness not because of aesthetic preference but because there is no resource available to smooth it into palatability. This rawness is not imperfection. It is precision of a different register.",
          "Compressed urgency as structural force. Under crisis, time is both scarce and existentially charged. Every hour of production is an hour taken from survival logistics. This compression forces clarity: the maker cannot spend three weeks on an intro. The work either begins or it doesn't. This structural urgency tends to eliminate procrastination not through discipline but through the impossibility of deferral. You cannot wait for inspiration when waiting is itself a cost you cannot afford.",
          "Oppositional identity as motivational infrastructure. For many BWB practitioners, the act of building is itself a counter-statement against forces that have worked to reduce, silence, or erase them. The work becomes evidence — not of success, but of continued existence and continued agency. This gives the output a weight and intentionality that purely self-expressive creation rarely achieves. It is art that knows what it is against, which clarifies what it is for."
        ]
      },
      {
        id: 'infrastructure',
        title: "BWB as Counter-Institutional Infrastructure",
        content: [
          "BWB is not only a personal framework. Aggregated across practitioners, it constitutes a form of counter-institutional infrastructure — a distributed network of independent creators, documentarians, and builders who collectively represent an alternative to institutional legitimation. Where institutions confer authority through credentialing, funding, and platform access, BWB practitioners build authority through demonstrated output under adversity.",
          "This is not merely inspirational framing. The civil rights tradition in the United States provides historical precedent: the most durable documentation of systemic harm — the pamphlets, the testimonials, the recorded sermons and blues tracks — was produced not by funded institutions but by individuals operating under conditions of active persecution. The infrastructure they built was informal, underfunded, and in many cases created from positions of personal crisis. It proved more durable than the institutions arrayed against it.",
          "BWB in its contemporary form extends this tradition into digital space. The practitioner who builds a documentation site, publishes legal analysis, records music, and maintains a public presence while navigating homelessness, surveillance, and defamation is engaged in a structurally identical act of counter-institutional production. The platform is different. The stakes are the same."
        ]
      },
      {
        id: 'costs',
        title: "The Costs the Framework Cannot Romanticize",
        content: [
          "Intellectual honesty requires that BWB theory not become a romanticization of suffering. The bleed is real, and it kills. Practitioners of BWB-adjacent modes of creation — the undocumented artist, the incarcerated writer, the unhoused technologist — face statistically elevated rates of early death, mental health crisis, and permanent capability loss. The conditions that make the work urgent are the same conditions that make the work temporary.",
          "The theory does not argue that crisis is generative and therefore acceptable. It argues that creation within crisis is real, valid, and structurally significant — and that its erasure from legitimate discourse does compounding harm, both to the individuals who are denied recognition and to the broader cultural record, which loses output it did not know to preserve.",
          "The goal is not to bleed forever. The goal is to build while you do — and to survive long enough for the building to matter.",
          "The aspiration BWB encodes is not martyrdom but transition: from bleeding-while-building to building-after-bleeding, carrying the epistemological sharpness of the former into the comparative stability of the latter. What is built during crisis becomes the foundation of what is possible after it — if the practitioner survives."
        ]
      },
      {
        id: 'conclusion',
        title: "Conclusion: A Lifeline Theory for Practitioners in the Gap",
        content: [
          "Build While Bleeding is ultimately a theory of the gap — the space between survival and freedom that conventional frameworks do not address, that institutional support rarely reaches, and that most academic discourse treats as a temporary anomaly rather than a structural permanent. For millions of people, the gap is not temporary. It is the operative condition of life.",
          "BWB argues that creation inside the gap is not lesser creation. It is differently constituted creation — forged under pressures that strip out the optional, expose the essential, and produce output that carries within it the full weight of the conditions it emerged from. That weight is not a deficiency. It is, in many contexts, the only form of authenticity that cannot be manufactured.",
          "The framework is a lifeline — not because it promises escape from the conditions it describes, but because it names those conditions as legitimate sites of production, and names the people operating within them as legitimate producers. That naming is not symbolic. In the political economy of creative and intellectual labor, legitimacy is access, and access is survival.",
          "To build while bleeding is to insist, in the most material way possible, that you are still here. That the work is real. That the life behind the work is real. That no campaign of pressure, erasure, or defamation has yet succeeded in making it otherwise. It is, in every sense, a declaration of continued existence."
        ]
      }
    ],
    references: [
      "Borland, R. (2025). Build While Bleeding. buildwhilebleeding.com"
    ]
  },
  {
    id: 'folk-devil-infrastructure',
    title: "The Folk Devil as Social Infrastructure",
    subtitle: "Consensus Formation and Cohesion Mechanics in High-Conflict Communities",
    author: "Ryan Borland",
    domain: "buildwhilebleeding.com",
    contact: "purarecoveryryan@gmail.com",
    year: "2025",
    abstract: "In high-conflict, low-trust communities, the folk devil - a figure whose construction serves the community's cohesion needs - operates not merely as the target of moral panic but as functional social infrastructure. This paper advances a structural framework for understanding the folk devil's production and maintenance, arguing that communities experiencing cohesion deficits employ the folk devil mechanism as a low-cost, zero-negotiation consensus generation tool. Drawing on Cohen's foundational moral panic literature, Durkheim's collective effervescence framework, Goode and Ben-Yehuda's institutionalized panic analysis, and Fischer et al.'s Anxiety-Contempt-Disgust (ANCODI) complex, this paper maps the structural mechanics through which folk devil construction operates in localized community contexts.",
    authorNote: "This paper is the first in a three-part series examining the folk devil as social infrastructure. The companion papers are \"Unseen War, Internal Wounds\" (Borland, 2025d), which documents the clinical harm profile of coordinated destabilization campaigns, and \"Carried Weight: The Differential Psychological and Social Effects of Involuntary Folk Devil Assignment\" (Borland, 2025e), which examines the specific effects of the folk devil position relative to normatively integrated citizen experience. This paper establishes the structural and sociological framework for the series.",
    sections: [
      {
        id: 'intro',
        title: "Introduction",
        content: [
          "Stanley Cohen's 1972 analysis of the Mods and Rockers established the foundational vocabulary for the study of folk devils and moral panics: the amplification spiral, the moral entrepreneur, the disproportionate institutional response to a symbolically charged figure of threat. What Cohen identified was a sociology of overreaction - the mechanisms through which ordinary social deviance becomes the occasion for extraordinary social mobilization. The folk devil, in this formulation, is primarily the object of community anxiety, the screen onto which collective fear is projected and amplified through media and institutional feedback.",
          "This paper proposes a complementary but distinct analytical frame. The folk devil is not merely the object of community anxiety. In high-conflict, low-trust communities, the folk devil is functional infrastructure - a mechanism that performs essential social work for the community that constructs it. Specifically, the folk devil performs the work of consensus generation in communities where normal consensus mechanisms have failed. Understanding the folk devil as infrastructure rather than merely as victim or symbol requires a structural analysis that the moral panic literature has not fully supplied.",
          "The structural question this paper addresses is: what are the mechanics through which the folk devil construction operates as a cohesion tool, and what does the community gain from its operation? The answer to this question has direct implications for understanding why folk devil constructions persist, why they are resistant to factual refutation, and why the individuals assigned to the folk devil position experience harm that is, as the companion papers document, structurally produced rather than incidentally encountered."
        ]
      },
      {
        id: 'cohesion-deficit',
        title: "I. The Cohesion Deficit: Why Folk Devils Are Constructed",
        content: [
          "Durkheim's account of collective effervescence identifies the shared emotional energy produced by collective ritual as the mechanism through which communities generate the social solidarity necessary for their coherent functioning. Communities that can access this mechanism through positive collective ritual - celebration, ceremony, shared achievement - generate cohesion through the surplus of positive collective affect. Communities that cannot access positive ritual, or whose positive ritual capacity has been eroded by conflict, distrust, or social fragmentation, face a cohesion deficit that requires resolution through an alternative mechanism.",
          "The alternative mechanism Durkheim identifies is collective condemnation: the shared emotional energy produced by unified antagonism toward a transgressor. Where positive ritual produces solidarity through shared celebration, condemnation rituals produce solidarity through shared rejection. The community that cannot generate cohesion around what it is for can still generate cohesion around what it is against. This is the structural origin of the folk devil's social utility.",
          "In high-conflict, low-trust communities - communities fractured along lines of class, ideology, history, or personal grievance - positive cohesion mechanisms are expensive. They require negotiation, compromise, the extension of trust across factional lines, and the sustained investment of social capital that communities in active conflict have already depleted. The folk devil mechanism offers an alternative that is structurally cheaper: it requires no negotiation, no compromise, no trust extension. It requires only the availability of a shared target."
        ]
      },
      {
        id: 'narrative-corridor',
        title: "II. The Narrative Corridor: How Targeting Is Channeled",
        content: [
          "The folk devil construction begins with outsider-coding: the attribution to a specific individual of a legible outsider identity that marks them as available for the targeting function. Outsider-coding does not require factual accuracy. It requires legibility - the availability of observable markers that the community can interpret as confirming outsider status. Housing instability, visible poverty, racial difference, unusual dress or behavior, the absence of recognized social affiliations - any of these can serve as the raw material for outsider-coding, depending on the community's particular interpretive frameworks.",
          "Once outsider-coding has been established, the narrative corridor channels community antagonism toward the coded target through a specific structural pathway. The narrative corridor has three components: the founding narrative, the transmission infrastructure, and the corridor maintenance mechanism.",
          "The founding narrative is the initial account of the folk devil's transgression or threat that provides the substantive content of the targeting. In localized community contexts, this is typically produced through informal gossip networks, tip-based reporting, or the amplification of an actual prior event - frequently historical, frequently decontextualized, frequently embellished in transmission. The founding narrative need not be accurate. It must be believable within the community's existing interpretive frameworks and available to the community's transmission infrastructure."
        ]
      },
      {
        id: 'free-consensus',
        title: "III. Free Consensus: The Cross-Factional Alignment Mechanism",
        content: [
          "The analytically distinctive feature of the folk devil's cohesion utility is what this paper terms free consensus: the capacity to generate cross-factional alignment without requiring any of the negotiation, compromise, or trust extension that ordinary consensus mechanisms demand. Free consensus is the structural property that makes the folk devil mechanism so valuable to high-conflict communities and so resistant to disruption.",
          "The mechanism is visible in the documented case with analytic clarity. At the taqueria, two men engaged in a conflict with its own history, grievance, and factional stakes - a conflict that had no natural resolution available in that moment - briefly suspended their antagonism when the subject sat down nearby. They did not resolve their conflict. They did not negotiate. They did not extend trust to each other. They temporarily oriented toward a third point, and the orientation provided a moment of shared affective experience that the conflict between them had made unavailable through any other means. The folk devil provided cohesion to two factions that could not otherwise agree on anything at zero negotiation cost to either party."
        ]
      },
      {
        id: 'institutional-amplification',
        title: "IV. Institutional Amplification: The Formal Escalation of Informal Targeting",
        content: [
          "The folk devil construction achieves maximum harm production when informal targeting is amplified through formal institutional channels. The mechanism through which this occurs is the tip-badge loop: the informal targeting network generates tips, complaints, and reports directed at formal institutions - law enforcement, code enforcement, business licensing authorities, social services - and the institutional response to those tips generates the official record that validates and amplifies the folk devil narrative.",
          "The tip-badge loop operates through an information asymmetry that is structurally built into institutional complaint reception. The institution receives a tip identifying the subject as a problem. The institution lacks the investigative capacity, the time, and frequently the motivation to evaluate the tip's accuracy before responding. The institutional response - a police welfare check, a code enforcement visit, a removal from a business premises - produces observable official conduct that the informal targeting network then circulates as confirmation of the folk devil narrative. The appearance of official scrutiny becomes evidence of official concern, which is received as evidence of actual transgression, which validates the original tip retroactively. The loop is self-reinforcing."
        ]
      },
      {
        id: 'maintenance',
        title: "V. Construction Maintenance: Why the Folk Devil Persists",
        content: [
          "The folk devil construction, once established, does not require active maintenance by any single orchestrating actor. It is maintained by the distributed social behavior of community participants who are individually motivated by social belonging (conformity to the ambient consensus), threat reduction (treating the folk devil as a genuine safety concern), and factional utility (using the folk devil as a zero-cost cohesion resource). Each of these motivations is individually comprehensible and, from the perspective of the individual actor, does not require bad faith or malicious intent.",
          "This distributed maintenance logic is what makes the folk devil construction resistant to factual refutation. Refuting the founding narrative does not dismantle the structural incentive to maintain the construction. The community does not maintain the folk devil because the founding narrative is true; it maintains the folk devil because the folk devil is useful. A community that has organized its cohesion around a particular construction does not abandon that organization simply because the construction's factual basis has been challenged. The structural need persists; the construction adapts."
        ]
      }
    ],
    references: [
      "Cohen, S. (1972). Folk devils and moral panics.",
      "Durkheim, É. (1893). The division of labour in society.",
      "Fischer, A., et al. (2018). Why group-based emotions trigger intergroup aggression: Examining the role of the ANCODI complex.",
      "Goode, E., & Ben-Yehuda, N. (1994). Moral panics: The social construction of deviance."
    ]
  },
  {
    id: 'unseen-war',
    title: "Unseen War, Internal Wounds",
    subtitle: "The Psychological, Civil, and Social Effects of Coordinated Covert Destabilization Campaigns on Individual Targets",
    author: "Ryan Borland",
    domain: "buildwhilebleeding.com",
    contact: "purarecoveryryan@gmail.com",
    year: "2025",
    abstract: "Coordinated covert destabilization campaigns - systematic operations employing narrative weaponization, social isolation, institutional manipulation, psychological harassment, and digital suppression against a single target - represent an under-examined phenomenon in contemporary psychological and legal literature. This paper presents a structured analysis of the psychological, civil, and social effects produced by these campaigns, drawing on first-person documentation, forensic case study material, primary testimony, and established clinical and legal frameworks.",
    authorNote: "This paper blends formal academic analysis with primary source testimony authored by the subject. Spoken word passages - drawn from the subject's public briefing document, \"The Open-Source Briefing: The Architecture of a Rigged Game\" - appear in indented italic format throughout. They are not decorative. They are evidentiary: the subject's own words, produced in real time under documented duress, function here as both primary data and analytical instrument, demonstrating the exact voice, precision, and pattern recognition that belies the destabilized-and-irrational narrative the campaign sought to impose.",
    sections: [
      {
        id: 'intro',
        title: "Introduction",
        content: [
          "The literature on psychological operations has, until recently, focused predominantly on state-versus-state contexts: Cold War disinformation campaigns, military PSYOP doctrine, and foreign interference in democratic processes. What has received comparatively little systematic attention is the application of these same operational architectures at the individual level - campaigns in which the full infrastructure of psychological manipulation, social network exploitation, institutional co-option, and digital suppression is brought to bear against a single civilian target.",
          "This paper addresses that gap. It does so through an unconventional but analytically justified methodology: the integration of the subject's own spoken word testimony alongside formal academic analysis. The subject's public briefing document, produced in the midst of a documented multi-year destabilization campaign, represents primary evidence of a specific and clinically significant phenomenon - the capacity for rigorous, pattern-literate analysis to survive and in fact sharpen under conditions of sustained psychological attack."
        ]
      },
      {
        id: 'architecture',
        title: "I. The Five-Stage Operational Architecture",
        content: [
          "Stage One: Atmospheric Poisoning. It didn't start with cuffs. Didn't start with a charge. It started with a vibe. You walk in a room and the air tightens. Conversations die mid-sentence. Eyes linger like people trying to decide whether you're trouble or just breathing wrong. Just social oxygen getting thin. Then the rumor shows up - some dusty old story dragged out the grave like a half-rotted corpse. Passed around in whispers. Not to inform. To infect. Load the suspicion early so every normal move looks dirty. Charging a phone becomes 'loitering.' Walking home becomes 'casing the area.' The verdict gets written first; then reality gets bent until it fits the story.",
          "Stage Two: Civilian Weaponization. They didn't need badges. Didn't need uniforms. They used the neighbors. The regulars. The guy at the corner store who'd been there twenty years and knew everybody. Turn the community into the surveillance apparatus. Turn the civic instinct into a targeting mechanism. Every 'concerned citizen' becomes an intelligence asset. Every 'heads up' becomes a force multiplier. The informal network does the work the formal system can't do legally. And it's clean. No badge number. No use-of-force report. No discovery process. Just ambient social pressure executing distributed harm.",
          "Stage Three: Institutional Badge Play. Here's where it gets elegant, if you're the kind of person who finds that word appropriate. You get the police called on you enough times, the interaction itself becomes the evidence. Doesn't matter if nothing happened. Doesn't matter if the officer leaves satisfied. The visual of questioning becomes symbolic confirmation for everyone watching. 'He had the police called on him.' That sentence does work independent of everything that follows it. That sentence circulates. That sentence sticks. You've been officially noticed. And official noticing, stripped of context, is indistinguishable from official concern.",
          "Stage Four: The Entrapment Loop. They need you to react. That's the whole architecture. Everything before this was setup. The atmospheric pressure, the civilian surveillance, the badge play - that was all infrastructure for this moment. You react, they get footage of you reacting. You stay calm, they escalate until calm is no longer the available option. One way or another, the reaction gets produced. The reaction gets circulated. The reaction, stripped of the forty-seven provocations that produced it, looks like the original aggression. Cause is erased. Effect is weaponized. You become the evidence for your own prosecution.",
          "Stage Five: Digital Erasure. The last move is quiet. You've been atmospheric-poisoned, civilian-surveilled, institutionally flagged, and provocation-looped. Now the record gets managed. Content gets suppressed. Accounts get restricted. The documentary evidence you've assembled gets de-amplified. The algorithm isn't neutral - it responds to reporting, and the targeting network knows how to report. Your voice stays technically audible but practically silent. The record you built - the thing you assembled to prove what happened - gets deprived of the oxygen that would let it reach the people who could act on it. Not censored. Starved."
        ]
      },
      {
        id: 'psychological-harm',
        title: "II. The Psychological Harm Profile",
        content: [
          "Herman's (1992) framework for complex PTSD - developed from the study of sustained interpersonal trauma rather than acute single-incident trauma - provides the most analytically precise clinical framework for the harm produced by coordinated destabilization campaigns. Complex PTSD's defining features - alterations in affect regulation, consciousness, self-perception, perception of the perpetrator, relations with others, and systems of meaning - map with high fidelity onto the documented harm profile of the multi-stage campaign described here.",
          "A clinically and analytically significant feature of the documented case is the preservation and sharpening of the subject's analytical capacity under conditions designed to destroy it. The campaign's founding narrative positioned the subject as unstable, irrational, and unreliable. The evidentiary record the subject produced in response to the campaign constitutes a sustained demonstration that the destabilized-and-irrational narrative is false."
        ]
      },
      {
        id: 'counter-methodology',
        title: "III. The Counter-Methodology: Breadcrumb Web, Dead Man's Switch, and Spoken Word as Evidence",
        content: [
          "The subject's documentation methodology - designated the Breadcrumb Web - is built around a principle of high-signal event logging rather than exhaustive logging. High-signal logging - the selective documentation of events that cross a threshold of anomalous significance - produces a record that is, paradoxically, more credible because of its restraint.",
          "The Dead Man's Switch - entrusting the complete evidence archive to a third-party attorney with instructions to release automatically upon the subject's incapacitation or extended silence - inverts the strategic calculus of the campaign's architects in a single move. So long as the architects believed that silencing or incapacitating the subject would terminate the evidentiary threat, the calculus favored escalation. The Dead Man's Switch converts the subject's potential victimization into an asymmetric liability."
        ]
      }
    ],
    references: [
      "Adickes v. S.H. Kress & Co., 398 U.S. 144 (1970).",
      "Herman, J. L. (1992). Trauma and recovery.",
      "Monell v. Department of Social Services, 436 U.S. 658 (1978).",
      "Paul v. Davis, 424 U.S. 693 (1976).",
      "Seligman, M. E. P. (1975). Helplessness."
    ]
  },
  {
    id: 'carried-weight',
    title: "Carried Weight",
    subtitle: "The Differential Psychological and Social Effects of Involuntary Folk Devil Assignment",
    author: "Ryan Borland",
    domain: "buildwhilebleeding.com",
    contact: "purarecoveryryan@gmail.com",
    year: "2025",
    abstract: "The folk devil - a figure whose construction serves the social cohesion needs of high-conflict, low-trust communities - has been analyzed primarily from the perspective of the communities that produce it. This paper redirects analytical attention to the individual who occupies the folk devil position, examining the differential psychological, social, and civil effects that involuntary folk devil assignment produces relative to the normatively integrated citizen.",
    authorNote: "This paper is the third in a series examining the folk devil as social infrastructure. The companion papers are \"The Folk Devil as Social Infrastructure: Consensus Formation and Cohesion Mechanics in High-Conflict Communities\" (Borland, 2025a), which establishes the structural framework, and \"Unseen War, Internal Wounds\" (Borland, 2025d), which documents the clinical harm profile of coordinated destabilization campaigns. This paper focuses specifically on the differential effects of the folk devil position relative to normatively integrated citizen experience.",
    sections: [
      {
        id: 'intro',
        title: "Introduction",
        content: [
          "The sociological literature on folk devils has, from Cohen's foundational 1972 work forward, been principally concerned with the communities that construct them. The mechanics of moral panic, the role of media amplification, the institutional escalation that follows - this is the center of gravity for the research tradition. The folk devil appears in this literature primarily as a structural position, a social function, a variable in the cohesion equation. What happens to the person occupying that position has received substantially less systematic attention.",
          "This paper addresses that gap. The central question is not why communities construct folk devils, nor how the construction operates. The question here is narrower and more clinical: what does the folk devil position do to the person assigned to it, and how do those effects differ systematically from the effects of ordinary social adversity experienced by a normatively integrated citizen?"
        ]
      },
      {
        id: 'baseline',
        title: "I. Establishing the Baseline: The Normatively Integrated Citizen",
        content: [
          "The normatively integrated citizen possesses a set of default social protections that are so pervasive as to be largely invisible to their beneficiaries. These protections do not require active maintenance. They are conferred automatically by the individual's legibility as a recognized member of the social order.",
          "The first and most fundamental of these protections is interpretive charity: the default assumption, in the absence of specific counter-evidence, that the individual's conduct is benign. The second protection is institutional access: the ability to engage with formal institutions with a reasonable expectation of being received as a credible complainant rather than a suspect. The third protection is narrative authority: the social capacity to define oneself, to contest misrepresentations, and to have one's account of events considered on its merits."
        ]
      },
      {
        id: 'harm-profile',
        title: "II. The Harm Profile of the Folk Devil Position",
        content: [
          "The defining clinical feature of the harm produced by sustained folk devil assignment is the absence of a safe recovery environment. The folk devil position eliminates this foundation by design. The mechanism is structural, not incidental: the folk devil's social utility derives precisely from being available across the community's relevant environments.",
          "The second major harm produced by folk devil assignment is the development of hypervigilance - the heightened sensory scanning of environments for pre-cognitive threat signals - and, critically, the weaponization of that adaptive response against the person who has developed it. For the assigned folk devil in an active targeting environment, hypervigilance is accurate threat detection. The campaign mechanism documented in the case literature exploits this by systematically framing accurate threat perception as evidence of instability."
        ]
      },
      {
        id: 'epistemology',
        title: "III. The Epistemological Dimension: The Witness Problem",
        content: [
          "The folk devil position confers, as an unwanted byproduct of its social location, epistemological access to the community's unedited operations that the normatively integrated citizen does not possess and typically does not seek. Living in the city's intermission - the 2 a.m. version, the loading dock version, the version that runs when the poster city believes it is unobserved - the folk devil accumulates direct witness testimony.",
          "The folk devil construction has a discrediting imperative that has no parallel in ordinary social adversity: the folk devil must be made illegible as a witness in order for the folk devil function to continue operating without interference. This is not an incidental consequence of the targeting. It is architecturally necessary."
        ]
      },
      {
        id: 'structural-labor',
        title: "IV. The Structural Labor Problem",
        content: [
          "The comparative analysis of folk devil and normatively integrated citizen effects makes visible a problem that the cohesion-focused sociological literature has not addressed: the folk devil position constitutes a form of involuntary structural labor whose costs are borne entirely by the individual while the benefits accrue to the community.",
          "The normatively integrated citizen who participates in folk devil construction receives the cohesion benefit at zero personal cost. The cost falls on the folk devil. The folk devil bears the psychological labor of maintaining identity coherence against continuous narrative inversion. The folk devil bears the motivational labor of sustaining forward-directed action in an environment where the normal relationship between effort and outcome has been severed."
        ]
      }
    ],
    references: [
      "Adickes v. S.H. Kress & Co., 398 U.S. 144 (1970).",
      "Cohen, S. (1972). Folk devils and moral panics.",
      "Durkheim, É. (1893). The division of labour in society.",
      "Herman, J. L. (1992). Trauma and recovery.",
      "Seligman, M. E. P. (1975). Helplessness."
    ]
  },
  {
    id: 'harassment-architecture',
    title: "The Psychological Architecture of Prolonged Coordinated Harassment",
    subtitle: "A Case Study in Covert Destabilization",
    author: "Ryan Borland",
    domain: "buildwhilebleeding.com",
    contact: "purarecoveryryan@gmail.com",
    year: "2026",
    abstract: "This briefing presents a documented account of the psychological effects produced by a multi-year coordinated campaign of social, institutional, and digital harassment directed against a single U.S. civilian. The subject - Ryan Borland, an independent digital content creator, writer, and journalist - has been the target of an escalating operation spanning more than three years across multiple California jurisdictions. What follows is not speculation. It is a forensic account derived from primary documentation, first-person testimony, and analysis grounded in established clinical and civil rights frameworks. The purpose of this briefing is to inform media, legal observers, and the public about what these campaigns actually do to a human being - psychologically, socially, and constitutionally.",
    sections: [
      {
        id: 'the-subject',
        title: "The Subject",
        content: [
          "Ryan Borland is not an easy target by any conventional measure. His background includes three prison terms, which he converted into a period of intellectual development - tutoring GED and math students inside correctional facilities with results that outperformed credentialed instructors. Outside of incarceration, he consistently rose to supervisory roles. His analytical capabilities, strategic self-reliance, and high tolerance for adversity were not incidental traits - they were forged under extreme conditions over decades.",
          "Understanding this is essential context. The campaign documented here was not effective because the subject was fragile. It was effective because it was engineered to exploit the specific vulnerabilities created by housing instability - a condition manufactured and maintained, in part, by the campaign itself."
        ]
      },
      {
        id: 'campaign-mechanics',
        title: "What the Campaign Did",
        content: [
          "The operation proceeded in overlapping stages. First, old information - a sexual offense from two decades prior - was extracted and circulated through local gossip networks to seed suspicion before the subject could establish himself in a new environment. Once that atmospheric contamination was in place, ordinary behaviors were recontextualized as threats. Charging a phone at a public outlet became \"suspicious loitering.\" Routine social interactions became \"stalking.\" A content creator working on his laptop became, in the constructed narrative, someone dangerous.",
          "This is the first and most important psychological mechanism to understand: the campaign did not need to fabricate dramatic events. It needed only to poison the interpretive frame through which every real event would be processed. From that foundation, the operation expanded outward. Community members became unwitting enforcement agents, reacting to pre-planted perceptions rather than direct observation. Businesses excluded the subject based on secondhand accounts. Coordinated platform reporting suppressed his digital content - the primary instrument of his professional livelihood and his mechanism for counter-narrative. Law enforcement was weaponized through fabricated or exaggerated reports. The result was a subject who had been effectively surrounded - socially, institutionally, and digitally - with no reliable avenue of recourse."
        ]
      },
      {
        id: 'psychological-damage',
        title: "The Psychological Damage Profile",
        content: [
          "The psychological harm inflicted by this campaign does not fit the standard trauma model built around discrete, bounded events. It is more accurately characterized as complex PTSD - the clinical profile produced not by a single catastrophic incident but by prolonged, inescapable, multi-directional threat with no available recovery environment. Every potential zone of safety was systematically contaminated. Social relationships were converted into surveillance assets. Physical spaces became exclusion zones. Institutions that are supposed to provide recourse were turned into additional vectors of harm.",
          "1. Hypervigilance as Weaponized Accurate Perception: The first and most clinically significant effect was the development of hypervigilance - a state of heightened, near-continuous environmental scanning for threat signals. The cruel irony documented in Ryan's case is that his hypervigilance was accurate. His nervous system was not stuck in a past threat; it was correctly reading a present one. But the campaign exploited this by framing his accurate threat perception as evidence of instability - manufacturing the appearance of a man unraveling, while engineering the conditions that justified his alarm.",
          "2. Acquired Helplessness and Motivational Paralysis: The second major psychological effect was what clinical frameworks describe as acquired helplessness - the systematic disruption of the relationship between effort and outcome. When honest behavior is punished, when documentation is dismissed, when good-faith action consistently produces negative consequences, the motivational architecture that sustains forward movement erodes. Ryan has described this state directly: treading water in an open sea with the ship sunk, questioning what there is to swim toward. This is not a metaphor for weakness. It is a precise description of what happens to a person whose environment has been rigged to invert the consequences of competence.",
          "3. Narrative Dispossession and Identity Dissolution: The third and deepest harm is what this documentation terms narrative dispossession - the forcible replacement of a self-authored identity with an adversarially constructed one. Ryan Borland, content creator, strategist, and writer, was systematically converted in the public-facing narrative into a loiterer, a threat, a predator. Identity is not purely internal - it is maintained through the social recognition of others and the coherence between one's actions and their consequences. When those consequences are inverted - when returning with receipts and correct change produces fury rather than resolution - the subject loses not merely reputation but the social conditions necessary to maintain a coherent sense of self."
        ]
      },
      {
        id: 'constitutional-dimension',
        title: "The Constitutional Dimension",
        content: [
          "The psychological effects cannot be separated from their civil liberties dimension. A content creator and journalist whose digital presence is suppressed through coordinated platform reporting cannot exercise First Amendment rights in any practical sense, regardless of the formal absence of government censorship. A person systematically excluded from businesses and public spaces - denied access to power sources, internet connectivity, and basic rest - has their Fourth and Fourteenth Amendment protections eroded in real time, not through a single act but through the cumulative weight of distributed, deniable, coordinated pressure. The chilling effect is not theoretical here. It is documented and ongoing. Where state response is repeatedly activated through private manipulation, the color of law line implicates potential civil rights claims under 42 U.S.C. § 1983."
        ]
      },
      {
        id: 'subject-response',
        title: "The Subject's Response",
        content: [
          "What distinguishes this case analytically is that the subject did not collapse under these conditions. He adapted. He developed what he calls the Breadcrumb Web - a deliberate, high-signal documentation methodology that logged key events with forensic discipline rather than exhaustive volume. He cultivated atmospheric intelligence - the ability to read environmental pre-threat signals before they manifested as direct action. He transformed his own hypervigilance, which the campaign sought to weaponize against him as evidence of instability, into a tactical early warning system.",
          "The spoken word and written documentation he produced throughout this period is not incidental content. It constitutes a primary evidentiary record: proof that a man under sustained, coordinated psychological assault maintained the precision, coherence, and analytical clarity that his adversaries were attempting to discredit. You cannot be simultaneously as analytically sophisticated as this record demonstrates and as cognitively compromised as the campaign narrative required. The documentation is its own refutation."
        ]
      },
      {
        id: 'case-significance',
        title: "What This Case Means",
        content: [
          "Ryan Borland's experience is not unique in its mechanics. It is unusual in the quality of its documentation. Coordinated civilian harassment campaigns of this architecture - using community contamination, institutional co-optation, digital suppression, and psychological entrapment in sequence - are the modern equivalent of what COINTELPRO-era documents described as \"neutralization.\" The difference is that today's versions operate through informal, deniable networks rather than government agencies, which makes them harder to prosecute and easier to dismiss.",
          "This case provides a documented template for identifying these operations, understanding their psychological effects, and establishing the evidentiary foundation necessary for accountability."
        ]
      }
    ],
    references: [
      "Borland, R. (2026). The Psychological Architecture of Prolonged Coordinated Harassment. buildwhilebleeding.com",
      "Herman, J. L. (1992). Trauma and recovery.",
      "42 U.S.C. § 1983.",
      "Seligman, M. E. P. (1975). Helplessness."
    ]
  }
];
