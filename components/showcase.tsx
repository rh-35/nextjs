"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { showcase } from "@/lib/showcase";

export function Showcase() {
  const half = Math.ceil(showcase.length / 2);
  const firstHalf = showcase.slice(0, half);
  const secondHalf = showcase.slice(half);
  return (
    <div>
      <div className="md:hidden">
      <div className="flex-col justify-center content-start gap-4">
            {showcase.map((showcaseItem) => (
              <div key={showcaseItem.title}>
                <Image
                  className="rounded-2xl my-6"
                  src={showcaseItem.path}
                  quality={100}
                  height={0}
                  width={1000}
                  title={showcaseItem.title}
                  alt={showcaseItem.title}
                />
              </div>
            ))}
          </div>
      </div>
      <div className="hidden md:block">
        <div className="flex items-start justify-center space-x-6 mt-10 mx-10">
          <div className="flex-col justify-center content-start gap-4">
            {firstHalf.map((showcaseItem) => (
              <div key={showcaseItem.title}>
                <Image
                  className="rounded-2xl mt-6"
                  src={showcaseItem.path}
                  quality={100}
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
                  className="rounded-2xl mt-6"
                  src={showcaseItem.path}
                  quality={100}
                  height={0}
                  width={1080}
                  title={showcaseItem.title}
                  alt={showcaseItem.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
