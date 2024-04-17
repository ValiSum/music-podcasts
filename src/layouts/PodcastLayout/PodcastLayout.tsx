import { Outlet, Link, useParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import { loaderPodcastsQuery } from "@/helpers/queries";
import { SanitizeHtml } from "@/components";

export default function PodcastLayout() {
  const { podcastId } = useParams();
  const { data: podcasts } = useSuspenseQuery(loaderPodcastsQuery());

  const podcast = podcasts?.find((podcast) => podcast.id === podcastId);

  if (!podcast) {
    throw new Error("Podcast not found");
  }

  return (
    <div className="grid h-full grid-cols-4 gap-16 overflow-y-scroll">
      <div className="p-6">
        <div className="flex flex-col divide-y rounded-md border p-6 shadow-md">
          <div className="flex items-center justify-center pb-6">
            <Link to={`/podcast/${podcast.id}`}>
              <img
                className="h-60 w-60 rounded-md border-gray-50 object-cover"
                src={podcast.image}
                alt="Podcast image"
              />
            </Link>
          </div>

          <div className="py-6">
            <Link to={`/podcast/${podcast.id}`} className="font-bold">
              {podcast.title}
            </Link>
            <p className="italic">
              by <Link to={`/podcast/${podcast.id}`}>{podcast.artist}</Link>
            </p>
          </div>
          <div className="pt-6">
            <p className="font-bold">Description:</p>
            <SanitizeHtml html={podcast.summary} />
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full p-6">
        <Outlet />
      </div>
    </div>
  );
}
