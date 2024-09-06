import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCards = ({
  items,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    imgSrc?: string;
    live?:string
  }[];
}) => {
  return (
    <>
      {items.map((item, idx) => (
        <div className="">
          <div className={`shadow shadow-black rounded-lg `} key={idx}>
            <Link className="max-w-sm" href={item.link}>
              <Image
                className="w-full rounded-t-lg"
                src={item.imgSrc || "/1.jpg"}
                alt=""
                width={200}
                height={200}
              />

              <div className="p-2 ">
                <h5 className="text-base font-bold tracking-tight">
                  {item.title}
                </h5>

                {/* <p className=" font-normal text-sm">{item.description}</p> */}
              </div>
              <div className="flex justify-between items-center">
                <Link href={item.link || ""}>Github</Link>
                <Link href={item.live || ""}>Live</Link>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCards;
