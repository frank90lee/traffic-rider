import { Card, CardContent } from "@/components/ui/card";
import { TranslationProps, VideoItem } from "@/types/Index";

export default function GameVideo({ t }: TranslationProps) {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("videos.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.raw("videos.items").map((video: VideoItem) => (
            <Card
              key={video.id}
              className="bg-gray-700 border-none text-gray-100 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="aspect-video w-full mb-4">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center line-clamp-2">
                  {video.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
