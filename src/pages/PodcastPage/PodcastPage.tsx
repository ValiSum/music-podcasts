import { useSuspenseQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { podcastLoader } from "@/helpers/loaders";
import { loaderPodcastQuery } from "@/helpers/queries";
import EpisodesTable from "./components/EpisodesTable";

type LoaderData = Awaited<ReturnType<ReturnType<typeof podcastLoader>>>;

export default function PodcastPage() {
  const { podcastId } = useLoaderData() as LoaderData;
  const { data: episodes } = useSuspenseQuery(loaderPodcastQuery(podcastId));
  const hasEpisodes = episodes && episodes.length > 0;

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-md border p-4 shadow-md">
        <p className="text-xl font-bold">Episodes: {episodes.length}</p>
      </div>
      <div className="rounded-md border p-4 shadow-md">
        {hasEpisodes ? (
          <EpisodesTable episodes={episodes} podcastId={podcastId} />
        ) : (
          <p className="text-center font-bold">No episodes found</p>
        )}
      </div>
    </div>
  );
}
