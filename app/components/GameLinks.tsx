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
        <div className="grid grid-cols-2 gap-2">
          {filteredGames.map((game) => (
            <Link key={game.id} href={game.target ? game.url : (locale ? `/${locale}${game.url}` : `${game.url}`)} className="block" target={game.target}>
              <div className="relative overflow-hidden bg-slate-100 transition-all cursor-pointer shadow-m rounded-xl group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <div className="relative w-full pb-[55%] mb-2">
                    <div className="absolute inset-0">
                      <img
                        src={game.image}
                        alt={game.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <p className="text-gray-800 text-sm font-medium text-center truncate">
                      {game.title}
                    </p>
                  </div>
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
