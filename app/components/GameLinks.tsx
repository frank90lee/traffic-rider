import Link from "next/link";
import games from "@/config/games.json";

interface GameLinksProps {
  excludeId?: string;
  locale: string;
}

const GameLinks = ({ excludeId, locale }: GameLinksProps) => {
  const filteredGames = excludeId
    ? games.games.filter((game) => game.id !== excludeId)
    : games.games;
    
  if (locale === "en") {
    locale = "";
  }
  
  return (
    <section className="">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-2 gap-3">
          {filteredGames.map((game) => (
            <Link 
              key={game.id} 
              href={locale ? `/${locale}${game.url}` : `${game.url}`} 
              className="block group"
            >
              <div className="relative aspect-square overflow-hidden bg-slate-100 rounded-xl shadow-sm">
                {/* Game Image */}
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover Overlay with Game Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                  <p className="text-white text-xs font-bold w-full text-center leading-tight drop-shadow-sm">
                    {game.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameLinks;
