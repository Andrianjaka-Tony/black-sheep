type Story = {
  // the card falls back to a placeholder until an image lands here
  image?: string;
  label: string;
  rotation: string;
};

const stories: Story[] = [
  {
    image: "/images/stories/ponta-do-sol.avif",
    label: "Ponta do Sol",
    rotation: "-rotate-4",
  },
  {
    image: "/images/stories/pole-on-the-mast.avif",
    label: "Pole on the mast",
    rotation: "rotate-3",
  },
  {
    image: "/images/stories/cliffside-flow.avif",
    label: "Cliffside flow",
    rotation: "-rotate-2",
  },
  {
    image: "/images/stories/pole-camp-madeira.avif",
    label: "Pole Camp Madeira",
    rotation: "rotate-4",
  },
  {
    image: "/images/stories/atlantic-day.avif",
    label: "Atlantic day",
    rotation: "-rotate-3",
  },
  {
    image: "/images/stories/mirella.avif",
    label: "Mirella, Germany",
    rotation: "rotate-2",
  },
];

function StoryCard({ image, label, rotation }: Story) {
  return (
    <div className={`relative shrink-0 snap-start w-55 md:w-60 aspect-3/4 ${rotation}`}>
      {/* offset plate peeking out behind the photo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-lg bg-white-1 shadow-lg"
        style={{ transform: "translate(10px, 12px) rotate(2deg)" }}
      />

      <div className="relative h-full w-full overflow-hidden rounded-lg bg-green-1/70 shadow-lg">
        {image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={image} alt={label} loading="lazy" className="h-full w-full object-cover" />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <p className="absolute inset-x-0 bottom-4 px-4 font-ws text-white text-base md:text-lg font-black uppercase tracking-tight leading-tight">
          {label}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <div className="bg-white-1 px-6 md:px-8 py-6 md:py-8 xl:py-16 w-screen flex flex-col">
      <div className="mx-auto w-full max-w-6xl flex flex-col">
        <h2 className="font-ws text-green-2 text-4xl md:text-5xl xl:text-7xl font-black uppercase leading-[0.85] opacity-80">
          Hear it from
          <br />
          the women
          <br />
          who came.
        </h2>

        <blockquote className="mt-10 max-w-3xl font-cg text-green-2 text-xl md:text-2xl xl:text-3xl italic tracking-tight leading-relaxed">
          The most transformative week of my life. I arrived a stranger and left with a family — the
          ocean, the poles, the women.{" "}
          <span className="inline-block bg-yellow-1 px-3 py-1 rounded shadow-lg font-ws text-green-2 text-base md:text-lg font-bold not-italic tracking-tight -rotate-2">
            I came home a different dancer — and a different person.
          </span>{" "}
          Every moment still lives in me.
        </blockquote>

        <p className="mt-16 font-sm text-green-2/70 text-xs md:text-sm uppercase tracking-widest">
          More from past retreats
        </p>

        {/* scrolls sideways, the cards keep their own width */}
        <div className="mt-4 -mx-6 md:-mx-8">
          <div className="flex items-start gap-10 md:gap-14 overflow-x-auto snap-x snap-mandatory px-6 md:px-8 py-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {stories.map((story) => (
              <StoryCard key={story.label} {...story} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
