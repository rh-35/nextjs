"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { showcase } from "@/lib/showcase";

export function Showcase() {
  const half = Math.ceil(showcase.length / 2);
  const firstHalf = showcase.slice(0, half);
  const secondHalf = showcase.slice(half);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        <div className="flex items-start justify-center space-x-2 md:space-x-6 mt-10">
          <div className="flex-col justify-center content-start">
            {firstHalf.map((showcaseItem) => (
              <div key={showcaseItem.title}>
                <Image onClick={() => handleOpen()}
                  className="rounded-md md:rounded-2xl mt-3 md:mt-6 cursor-pointer"
                  src={showcaseItem.path}
                  quality={100}
                  placeholder="blur"
                  height={0}
                  width={1080}
                  title={showcaseItem.title}
                  alt={showcaseItem.title}
                />
              </div>
            ))}
          </div>
          <div className="flex-col justify-center content-start gap-4">
            {secondHalf.map((showcaseItem) => (
              <div key={showcaseItem.title}>
                <Image onClick={() => handleOpen()}
                  className="rounded-md md:rounded-2xl mt-3 md:mt-6 cursor-pointer"
                  src={showcaseItem.path}
                  quality={100}
                  height={0}
                  placeholder="blur"
                  width={1080}
                  title={showcaseItem.title}
                  alt={showcaseItem.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        {open ? (
          <div className="flex place-content-center items-center fixed z-40 w-full h-full bg-zinc-900/50 overflow-none top-0 left-0">
            <div className="flex-col z-50 bg-zinc-900 w-1/3 h-5/6 rounded-2xl border">
              <button onClick={() => handleOpen()} className="text-white">
                <svg
                  className="h-12 w-12 fill-slate-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M884.311 1035.689v696.318H675.186v-339.162L147.926 1920 0 1772.074l527.26-527.155H187.889v-209.23H884.31ZM1772.116 0l147.926 147.926-527.155 527.155h339.162v209.335h-696.423V187.889h209.335v339.266L1772.116 0Z" fill-rule="evenodd" />
                </svg></button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
