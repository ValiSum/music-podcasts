import { Link } from "react-router-dom";
import { Episode } from "@/interfaces/episode";

interface Props {
  episodes: Episode[];
  podcastId: string;
}

export default function EpisodesTable({
  episodes,
  podcastId,
}: Props): JSX.Element {
  return (
    <table className="w-full table-auto text-left">
      <thead className="border-b-2">
        <tr>
          <th className="px-2 py-2">Title</th>
          <th className="px-2 py-2">Date</th>
          <th className="px-2 py-2">Duration</th>
        </tr>
      </thead>
      <tbody>
        {episodes.map(({ id, title, date, duration }, index) => (
          <tr
            key={id}
            className={`border-y ${index % 2 === 0 ? "bg-gray-100" : ""}`}
          >
            <td className="px-2 py-2">
              <Link
                className="text-sky-600"
                to={`/podcast/${podcastId}/episode/${id}`}
              >
                {title}
              </Link>
            </td>
            <td className="px-2 py-2">{date}</td>
            <td className="px-2 py-2">{duration}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
