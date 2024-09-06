import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeams";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { CardHoverEffectDemo } from "@/components/ProjectCards";
import { ExpandableCardDemo } from "@/components/ProjectSection";
import Skills from "@/components/Skills";
import { TimelineDemo } from "@/components/Timeline";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      {/* <WorkExperience /> */}
      {/* <Skills />
      <h2 className="font-bold text-6xl mt-64 w-full text-center">PROJECTS</h2>
      <div className="mt-16">
        {/* <CardHoverEffectDemo /> */}
       {/* <ExpandableCardDemo />
      <TimelineDemo /> */}
      {/* </div> */}
    </main>
  );
}
