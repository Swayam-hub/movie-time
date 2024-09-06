"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="">
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div className="overflow-x-auto">
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.h5
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.h5>
                  </div>
                  {active.ctaLink && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-purple text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                  {active.github && (
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.github}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-purple text-white"
                    >
                      Github
                    </motion.a>
                  )}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.ul
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <motion.li className="list-disc ml-4">
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.li>
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={400}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "Created a comprehensive job portal for the users and the employers of Yamuna Nagar",
    title: "Jobsnagar",
    src: "/2.jpg",
    ctaText: "Visit",
    ctaLink: "https://www.jobsnagar.com",
    content: () => {
      return (
        <ul className="list-disc">
          <li className="mb-4">
            Streamlined the job application process by 50% through the creation
            of a comprehensive job portal, leading to a dramatic increase in
            applicant satisfaction and a more efficient hiring process.
          </li>
          <li className="mb-4">
            Implemented JWT, OTP authentication, and bycryptjs resulted in a 20%
            decrease in unauthorized access, bolstering system security and
            improving overall user authentication
          </li>
          <li className="mb-4">
            Implemented Email and Whatsapp Messaging for regular follow ups to
            increase the active users
          </li>
          <li className="mb-4">
            Tech Stack - NextJS, ReactJS, NestJS, TailwindCSS, MongoDB, NodeJS,
            ExpressJS, Redis, Context API
          </li>
          <li className="italic mb-4">
            WIP - Push Notifications, One to One Chat For Candidate and
            Employer, Whatsapp Template Based Messaging
          </li>
        </ul>
      );
    },
  },
  {
    description: "Created a movie searching website",
    title: "Movie Time",
    src: "/10.jpg",
    ctaText: "Visit",
    ctaLink: "https://movie-time-ochre-one.vercel.app/",
    github: "https://github.com/Swayam-hub/movie-time",
    content: () => {
      return (
        <ul className="list-disc">
          <li className="mb-4">
            Comprehensive Search and Detail Pages: Developed a user-friendly
            platform with search functionality and detailed movie pages,
            providing in-depth information about each film.
          </li>
          <li className="mb-4">
            Streaming Availability Solution: Addressed the common problem of
            finding where movies are available—whether in cinemas or on various
            OTT platforms—by integrating real-time data, helping users easily
            locate where to watch.
          </li>
          <li className="mb-4">
            Enhanced User Experience: Streamlined the process of discovering and
            accessing movies, ensuring users no longer struggle to find their
            favorite content across multiple platforms.
          </li>
        </ul>
      );
    },
  },

  {
    description: "Sports Website",
    title: "Scout 4 Sports",
    src: "/Web 1920 – 1.png",
    ctaText: "Visit",
    ctaLink: "",
    github: "https://github.com/Swayam-hub/sports-website",
    content: () => {
      return (
        <ul className="list-disc">
          <li className="mb-4">
            Role-Based Registration: Developed a platform allowing users to
            register as either players or coaches, fostering targeted
            connections within the sports community.
          </li>
          <li className="mb-4">
            Player-Coach Matching: Implemented a matchmaking feature where
            players can find relevant coaches based on their needs, and coaches
            can discover potential players.
          </li>
          <li className="mb-4">
            Profile Comparison: Added functionality to compare profiles of other
            players, enabling better insights into competitors' skills and
            achievements.
          </li>
          <li className="mb-4">
            Community Growth: Designed with the initiative to promote sports and
            encourage participation by simplifying the process of connecting
            players with the right coaching support.
          </li>
        </ul>
      );
    },
  },
  {
    description: "Tried to create game for the users",
    title: "Plinko",
    src: "/12.jpg",
    ctaText: "Visit",
    ctaLink: "https://silver-cris-31.tiiny.site/",
    github: "https://github.com/Swayam-hub/stake",
    content: () => {
      return (
        <ul className="list-disc">
          <li className="mb-4">
            Core Gameplay Mechanics: Developed a classic Plinko game featuring a
            simple ball drop and striking mechanism, capturing the essence of
            traditional Plinko gameplay.
          </li>
          <li>
            User Engagement: Created an interactive and engaging experience by
            focusing on straightforward gameplay, appealing to both novice and
            experienced players.
          </li>
          <li>
            Responsive Design: Ensured the game runs smoothly on multiple
            devices, maintaining a consistent player experience across
            platforms.
          </li>
        </ul>
      );
    },
  },
];
