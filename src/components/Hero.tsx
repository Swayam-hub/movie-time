"use client";
// import React from "react";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <>
//       <div className="h-screen font-bold flex items-center justify-center text-center">
//         <div className="text-4xl grid grid-cols-3 gap-4 items-center justify-center max-w-4xl">
//           <Image
//             src="/me.jpg"
//             alt="me"
//             width={300}
//             height={300}
//             className="rounded-full border-4 border-purple"
//           />
//           <div className="col-span-2">
//             <TextGenerateEffect
//               words="Hello I'm Swayam Budhiraja"
//               className="text-4xl mb-3"
//             />
//             Turning Ideas Into Interactive
//             <p className="text-purple">Web Experiences</p>
//             <p className="text-base mt-3 font-normal">
//               I bring ideas to life with dynamic web solutions. Specializing in
//               JavaScript, I craft interactive, efficient, and user-friendly
//               websites that leave a lasting impression. Let's turn your vision
//               into reality!
//             </p>
//             <div className="text-base mt-3 flex flex-row items-center justify-center">
//               <button className="bg-purple p-3 mr-3 rounded-lg flex flex-row items-center justify-center hover:bg-white hover:text-slate-950">Resume
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 className="h-auto ml-1 !w-6 md:!w-4"
//               >
//                 <path fill="none" d="M0 0h24v24H0z"></path>
//                 <path
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
//                 ></path>
//               </svg>
//               </button>
//               <button>Contact</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Hero;

import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import { ExpandableCardDemo } from "./ProjectSection";
import { TimelineDemo } from "./Timeline";
import Navbar from "./Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Header Section */}
      <header className="shadow-md flex-row p-4 justify-between items-center z-10 hidden md:flex">
        <nav className="flex space-x-6">
          <Link
            href="#"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-purple hover:text-slate-950"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="#work"
            className="rounded-md px-3 py-2 text-sm font-medium hover:bg-purple hover:text-slate-950"
          >
            Work Experience
          </Link>
          <Link
            href="#skills"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple hover:text-slate-950"
          >
            Skills
          </Link>
          <Link
            href="#project"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple hover:text-slate-950"
          >
            Projects
          </Link>
          <Link
            href="#edu"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-purple hover:text-slate-950"
          >
            Education
          </Link>
        </nav>
        <div className="flex flex-row gap-4">
          <Link href={"https://github.com/Swayam-hub"} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4px"
              height="4px"
              viewBox="0 0 512 512"
              className="w-6 h-6 undefined"
            >
              <path fill="none" d="M0 0h512v512H0z"></path>
              <path
                fill="currentColor"
                d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
              ></path>
            </svg>
          </Link>
          <Link href={"https://www.linkedin.com/in/swayam-budhiraja-17778677/"} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              className="w-6 h-6"
            >
              <path fill="none" d="M0 0h256v256H0z"></path>
              <g fill="none">
                <rect width="256" height="256" fill="#fff" rx="60"></rect>
                <rect width="256" height="256" fill="#0A66C2" rx="60"></rect>
                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
                ></path>
              </g>
            </svg>
          </Link>
          <Link
                                                        href={`https://wa.me/917404929337`}
                                                        target="_blank"
                                                    >
                                                        <Image
                                                            src="/15.svg"
                                                            height={25}
                                                            width={25}
                                                            alt="Whatsapp"
                                                        />
                                                    </Link>
                                                    <Link
                                                        href={`tel:917404929337`}
                                                        target="_blank"
                                                    >
                                                         <Image
                                                            src="/14.svg"
                                                            height={25}
                                                            width={25}
                                                            alt="Whatsapp"
                                                        />
                                                    </Link>
                                                    <Link
                                                        href={`mailto:swayambudhiraja11@gmail.com`}
                                                        target="_blank"
                                                    >
                                                         <Image
                                                            src="/13.svg"
                                                            height={25}
                                                            width={25}
                                                            alt="Whatsapp"
                                                        />
                                                    </Link>
        </div>
      </header>
      {/* <Navbar /> */}
      {/* Hero Section */}
      <div
        id="home"
        className="h-screen flex items-center justify-center text-center pt-16"
      >
        <div className="text-4xl grid grid-cols-3 gap-4 items-center justify-center max-w-4xl">
          <Image
            src="/me.jpg"
            alt="me"
            width={300}
            height={300}
            className="rounded-full border-4 border-purple"
          />
          <div className="col-span-2">
            <TextGenerateEffect
              words="Hello I'm Swayam Budhiraja"
              className="text-4xl mb-3"
            />
            Turning Ideas Into Interactive
            <p className="text-purple">Web Experiences</p>
            <p className="text-base mt-3 font-normal">
              I bring ideas to life with dynamic web solutions. Specializing in
              JavaScript, I craft interactive, efficient, and user-friendly
              websites that leave a lasting impression. Let's turn your vision
              into reality!
            </p>
            <div className="text-base mt-3 flex flex-row items-center justify-center">
              <Link href="https://docs.google.com/document/d/1eOUWu7QL3MzIhcZ2hfGRlAWjg0SQxrF-/edit?usp=sharing&ouid=104989339692932998916&rtpof=true&sd=true" className="bg-purple p-3 mr-3 rounded-lg flex flex-row items-center justify-center hover:bg-white hover:text-slate-950" target="_blank" >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-auto ml-1 !w-6 md:!w-4"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                  ></path>
                </svg>
              </Link>
              <Link className="bg-transparent text-white p-3 rounded-lg flex flex-row items-center justify-center hover:bg-white hover:text-slate-950"
                                                        href={`mailto:swayambudhiraja11@gmail.com`}
                                                        target="_blank"
                                                    >
                                                       Contact
                                                    </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="work">
        <WorkExperience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <h2 className="font-bold text-6xl mt-64 w-full text-center">
          PROJECTS
        </h2>
        <div className="mt-16">
          {/* <CardHoverEffectDemo /> */}
          <ExpandableCardDemo />
        </div>
      </section>
      <section id="edu">
        <TimelineDemo />
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="h-screen flex items-center justify-center text-center bg-gray-200">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="max-w-xl mt-4">
          Feel free to reach out if you have any questions or want to work together. I’m always open to new opportunities and collaborations!
        </p>
        <button className="bg-purple p-3 mt-6 rounded-lg hover:bg-white hover:text-slate-950">
          Contact Me
        </button>
      </section> */}
    </>
  );
};

export default Hero;
