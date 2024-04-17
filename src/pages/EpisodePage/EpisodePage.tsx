export default function EpisodePage() {
  const episode = {
    title: "Episode title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices varius. Sed nec nulla nec libero volutpat fermentum. Nullam nec purus ac libero ultrices varius. Sed nec nulla nec libero volutpat fermentum. Nullam nec purus ac libero ultrices varius. Sed nec nulla nec libero volutpat fermentum. Nullam nec purus ac libero ultrices varius. Sed nec nulla nec libero volutpat fermentum.",
    source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  };

  return (
    <div className="flex flex-col gap-6 divide-y rounded-md border p-4 shadow-md">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">{episode.title}</h1>
        <div
          className="text-justify"
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
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
