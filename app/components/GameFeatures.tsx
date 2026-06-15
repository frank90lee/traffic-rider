
const GameFeatures = () => {
  const features = [
    {
      title: "Sprunki Corruptbox",
      description: "An innovative and experimental game that merges dark aesthetics with music-based gameplay. Set in a twisted digital world, it transforms the playful Sprunki universe into a nightmarish landscape filled with corruption and surreal distortions. Players navigate through chaotic environments, interacting with corrupted characters while creating harmony amidst the madness.",
      features: [
        "Glitch Puzzles - Solve puzzles by interacting with corrupted objects and characters",
        "Harmonize with Chaos - Each corrupted character emits eerie sounds that players must harmonize",
        "Survival Challenges - Strategic thinking and quick reflexes to overcome corrupted creatures"
      ],
      image: "/game/sprunki-corruptbox.jpg",
      imagePosition: "right"
    },
    {
      title: "Sprunki Corruptbox 2",
      description: "Builds on the eerie charm of its predecessor, combining the quirky world of Sprunki with chaotic, glitchy visuals. Players are immersed in a surreal digital realm where beloved Sprunki characters have been transformed into unsettling versions of themselves. The game features distorted soundscapes and unpredictable gameplay, challenging players to navigate through glitches and haunting effects.",
      features: [
        "Exploration of a Glitchy World - Twisted environment filled with broken animations",
        "Character Interaction - Each character contributes ghostly sounds for music creation",
        "Creative Music Composition - Create music that harmonizes with the chaotic environment"
      ],
      image: "/game/sprunki-corruptbox-2.jpg",
      imagePosition: "left"
    },
    {
      title: "Sprunki Corruptbox 3",
      description: "The latest installment in the series, blending rhythm-based gameplay with a creepy twist. Players enter a dark battlefield where they must combine music with strategy to navigate ominous environments. The game features dynamic soundtracks that influence gameplay, requiring players to match rhythms and beats to overcome supernatural obstacles.",
      features: [
        "Rhythm Combat Mechanics - Use music to navigate and battle enemies",
        "Challenging Levels - Progressive stages filled with traps and puzzles",
        "Dynamic Soundtrack Integration - Haunting soundtrack influences gameplay actions"
      ],
      image: "/game/sprunki-corruptbox-3.jpg",
      imagePosition: "right"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {features.map((feature) => (
        <div 
          key={feature.title}
          className={`flex flex-col ${feature.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-20 last:mb-0`}
        >
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            <ul className="space-y-3">
              {feature.features.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 relative w-full">
            <div className="aspect-video relative overflow-hidden rounded-lg shadow-xl">
              <img
                src={feature.image}
                alt={feature.title}
                className="object-cover transform hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GameFeatures; 