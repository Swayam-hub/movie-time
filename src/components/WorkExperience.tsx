import React from "react";

const WorkExperience = () => {
  return (
    <>
  <h2 className="font-bold text-6xl mt-64 w-full text-center uppercase">
        WORK EXPERIENCE
      </h2>
      <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 mt-8">
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
          <figure className="stroke-dark absolute left-0 dark:stroke-light">
            <svg
              className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
              width="75"
              height="75"
              viewBox="0 0 100 100"
            >
              <circle
                cx="75"
                cy="50"
                r="20"
                pathLength="1"
                className="stroke-purple  stroke-1 fill-none dark:stroke-purple"
              ></circle>
              <circle
                cx="75"
                cy="50"
                r="20"
                pathLength="1"
                className="fill-purple stroke-[5px] dark:fill-dark"
                stroke-dashoffset="0px"
                stroke-dasharray="0.6270834604899088px 1px"
              ></circle>
              <circle
                cx="75"
                cy="50"
                r="10"
                pathLength="1"
                className="animate-pulse stroke-1 fill-purple dark:fill-purple"
              ></circle>
            </svg>
          </figure>
          <div style={{ transform: "none" }}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
              Web Developer{" "}
              <a
                className="capitalize text-primary dark:text-purple"
                href="https://google.com"
                target="_blank"
              >
                @Baancha
              </a>
            </h3>
            <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
              June 2023-Present | Yamuna Nagar, Haryana
            </span>
            <p className="font-medium w-full md:text-sm">
              {" "}
              Developed Jobsnagar which revolutionizes the job application
              process, connecting candidates with employers through a
              streamlined and user-friendly platform. As the lead developer, I
              enhanced application efficiency by 50%, integrated secure JWT and
              OTP authentication, and boosted user engagement through Email and
              WhatsApp notifications. The platform’s intuitive design, real-time
              notifications, and advanced search features make job hunting and
              hiring seamless.
            </p>
          </div>
        </li>
        <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
          <figure className="stroke-dark absolute left-0 dark:stroke-light">
            <svg
              className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
              width="75"
              height="75"
              viewBox="0 0 100 100"
            >
              <circle
                cx="75"
                cy="50"
                r="20"
                pathLength="1"
                className="stroke-purple  stroke-1 fill-none dark:stroke-purple"
              ></circle>
              <circle
                cx="75"
                cy="50"
                r="20"
                pathLength="1"
                className="fill-purple stroke-[5px] dark:fill-dark"
                stroke-dashoffset="0px"
                stroke-dasharray="0.6270834604899088px 1px"
              ></circle>
              <circle
                cx="75"
                cy="50"
                r="10"
                pathLength="1"
                className="animate-pulse stroke-1 fill-purple dark:fill-purple"
              ></circle>
            </svg>
          </figure>
          <div style={{ transform: "none" }}>
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
              Web Developer Intern{" "}
              <a
                className="capitalize text-primary dark:text-purple"
                href="https://google.com"
                target="_blank"
              >
                @AARK Technologies
              </a>
            </h3>
            <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
              Aug 2022 - Sep 2022 | Yamuna Nagar, Haryana
            </span>
            <p className="font-medium w-full md:text-sm">
              {" "}
              Developed Scout 4 Sports which empowers athletes and coaches by
              facilitating meaningful connections. Users can register as players
              or coaches, find relevant matches, and compare player profiles to
              make informed decisions. Designed to promote sports and foster
              community growth, the platform simplifies the search for the
              perfect training or coaching partner.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default WorkExperience;
