import { Outlet, Link } from "react-router-dom";

export default function PodcastLayout() {
  const podcast = {
    id: "1",
    title: "Lorem ipsum dolor sit amet",
    artist: "Tony Stark",
    image:
      "https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec nisl nec nisl.",
  };

  return (
    <div className="grid h-full grid-cols-4 gap-16">
      <div className="p-6">
        <div className="flex flex-col divide-y rounded-md  border p-6 shadow-md">
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
            <p className="italic">{podcast.description}</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 w-full bg-red-200 p-6">
        <Outlet />
      </div>
    </div>
  );
}
