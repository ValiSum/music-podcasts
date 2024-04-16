import { Link, useParams } from "react-router-dom";

export default function PodcastPage() {
  const { podcastId } = useParams();
  const episode = {
    title: "Lorem ipsum dolor sit amet",
    date: "16/04/2024",
    duration: "15:30",
  };

  const episodes = Array(21)
    .fill(null)
    .map((_, index) => ({
      ...episode,
      id: index,
    }));

  return (
    <div className="flex flex-col gap-8">
      <div className="rounded-md border p-4 shadow-md">
        <p className="text-xl font-bold">Episodes: {episodes.length}</p>
      </div>
      <div className="rounded-md border p-4 shadow-md">
        <table className="w-full table-auto text-left">
          <thead className="border-b-2">
            <tr>
              <th className="px-2 py-2">Title</th>
              <th className="px-2 py-2">Date</th>
              <th className="px-2 py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map((episode, index) => (
              <tr
                key={episode.id}
                className={`border-y ${index % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="px-2 py-2">
                  <Link
                    className="text-sky-600"
                    to={`/podcast/${podcastId}/episode/${episode.id}`}
                  >
                    {episode.title}
                  </Link>
                </td>
                <td className="px-2 py-2">{episode.date}</td>
                <td className="px-2 py-2">{episode.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
