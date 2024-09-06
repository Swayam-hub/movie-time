import { HoverEffect } from "./ui/card-hover-effect";
import ProjectCards from "./ui/cards";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8 grid grid-cols-3 gap-4">
      <ProjectCards items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Movie Time",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    live: "https://movietime.com",
    imgSrc: "/1.jpg",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    live: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",

    live: "https://netflix.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",

    live: "https://netflix.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    live: "https://netflix.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    live: "https://netflix.com",
  },
];
