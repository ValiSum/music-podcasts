import { useSuspenseQuery } from "@tanstack/react-query";
import { useLoaderData, useParams } from "react-router-dom";
import { podcastLoader } from "@/helpers/loaders";
import { loaderPodcastQuery } from "@/helpers/queries";
import { SanitizeHtml } from "@/components";

type LoaderData = Awaited<ReturnType<ReturnType<typeof podcastLoader>>>;

export default function EpisodePage() {
  const { podcastId } = useLoaderData() as LoaderData;
  const { episodeId } = useParams();
  const { data: episodes } = useSuspenseQuery(loaderPodcastQuery(podcastId));

  const episode = episodes.find((episode) => episode.id === Number(episodeId));

  if (!episode) {
    throw new Error("Episode not found");
  }

  return (
    <div className="flex flex-col gap-6 divide-y rounded-md border p-4 shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{episode.title}</h1>
        <SanitizeHtml html={episode.description} />
      </div>
      <div className="pt-6">
        <audio controls className="w-full">
          <source src={episode.source} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
}
