import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Link from "next/link";

export function TimelineDemo({
  col1_heading,
  col1_des1,
  col1_des2,
  col1_des3,
  col1_des4,
  col1_des5,
  col1_imgUrl1,
  col1_imgUrl2,
  col1_imgUrl3,
  col1_imgUrl4,
  col2_heading,
  col2_des1,
  col2_des2,
  col2_des3,
  col2_des4,
  col2_des5,
  col2_imgUrl1,
  col2_imgUrl2,
  col2_imgUrl3,
  col2_imgUrl4,
}: {
  col1_heading?: string;
  col1_des1?: string;
  col1_des2?: string;
  col1_des3?: string;
  col1_des4?: string;
  col1_des5?: string;
  col1_imgUrl1?: string;
  col1_imgUrl2?: string;
  col1_imgUrl3?: string;
  col1_imgUrl4?: string;
  col2_heading?: string;
  col2_des1?: string;
  col2_des2?: string;
  col2_des3?: string;
  col2_des4?: string;
  col2_des5?: string;
  col2_imgUrl1?: string;
  col2_imgUrl2?: string;
  col2_imgUrl3?: string;
  col2_imgUrl4?: string;
}) {
  const data = [
    {
      title: "June 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal text-xl">
            Bachelor of Technology in Computer Science
          </p>
          <p className="xs:text-sm text-base text-light/50 capitalize my-1">
            2020 - 2023 | Seth Jai Parkash Mukand Lal Institute of Engg. and Tech.
          </p>
          <p className="text-base">Studied Relevant Courses in Web Development and Networking</p>
        </div>
      ),
    },
    {
      title: "August 2022",
      content: (
        <div>
        <p className="text-neutral-800 dark:text-neutral-200 font-normal text-xl">
         Diploma in Computer Engineering at Government Polytechnic
        </p>
        <p className="xs:text-sm text-base text-light/50 capitalize my-1">
          2017 - 2020 | Seth Jai Parkash Mukand Lal Institute of Engg. and Tech.
        </p>
        <p className="text-base">Studied Relevant Courses in Web Development and Networking</p>
      </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
