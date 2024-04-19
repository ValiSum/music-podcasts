import { Link } from "react-router-dom";
import { Podcast } from "@/interfaces/podcast";

interface Props {
  podcast: Podcast;
}

export default function PodcastCard({ podcast }: Props) {
  return (
    <Link
      to={`/podcast/${podcast.id}`}
      key={podcast.id}
      className="mb-auto flex"
      data-testid="podcast-card"
    >
      <div className="w-full rounded-md border p-4 text-center shadow-lg">
        <div className="-mt-20 mb-4 flex justify-center">
          <img
            className="h-40 w-40 rounded-full border border-gray-50 object-cover shadow-sm"
            src={podcast.image}
            alt="Podcast Logo"
          />
        </div>
        <h3 className="text-xl font-semibold">{podcast.title}</h3>
        <p className="text-gray-500">Author: {podcast.artist}</p>
      </div>
    </Link>
  );
}
