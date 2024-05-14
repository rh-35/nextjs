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
                <Image
                  onClick={() => handleOpen()}
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
                <Image
                  onClick={() => handleOpen()}
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
            <div className="flex-col p-4 pt-2 space-y-2 items-start z-50 bg-zinc-900 w-auto h-auto rounded-2xl border">
              <div className=" flex w-full justify-between items-center">
                <div className="text-2xl font-semibold">Test</div>
                <button
                  onClick={() => handleOpen()}
                  className=""
                >
                  <svg
                    className=" h-8 w-8 fill-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8.933-2.721-2.722c-.146-.146-.339-.219-.531-.219-.404 0-.75.324-.75.749 0 .193.073.384.219.531l2.722 2.722-2.728 2.728c-.147.147-.22.34-.22.531 0 .427.35.75.751.75.192 0 .384-.073.53-.219l2.728-2.728 2.729 2.728c.146.146.338.219.53.219.401 0 .75-.323.75-.75 0-.191-.073-.384-.22-.531l-2.727-2.728 2.717-2.717c.146-.147.219-.338.219-.531 0-.425-.346-.75-.75-.75-.192 0-.385.073-.531.22z"></path>
                  </svg>
                </button>
              </div>
              <div className="self-end">
                <Image
                  className="rounded-md md:rounded-2xl w-96 cursor-pointer"
                  src="/images/building.gif"
                  quality={100}
                  height={0}
                  width={1080}
                  alt=";"
                />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
