import { useLoaderData } from "react-router-dom";
import PodcastCard from "./components/PodcastCard";
import { Podcast } from "@/interfaces/podcast";

export default function PodcastsPage() {
  const podcasts = useLoaderData() as Podcast[];

  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-5">
      <div className="flex items-center justify-end gap-4 p-6">
        <p className="rounded-lg bg-sky-600 px-2 text-white">
          {podcasts?.length}
        </p>
        <form id="search-form" role="search">
          <input
            type="search"
            className="text-md block w-full rounded-lg border border-gray-200 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Filter podcasts..."
          />
        </form>
      </div>

      <div className="overflow-y-auto p-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-48 pt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {podcasts?.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
          ))}
        </div>
      </div>
    </div>
  );
}
