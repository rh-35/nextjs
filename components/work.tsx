"use client";
import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { work } from "@/lib/work";

export function Work() {
  return (
    <div className="mt-12 grid relative w-full grid-flow-row grid-cols-1 gap-10 text-center md:gap-4 md:text-left lg:mb-0 md:grid-cols-2 2xl:grid-cols-3">
      {work.map((workItem) => (
        <div
          key={workItem.title}
          className="relative rounded-lg bg-zinc-900"
        >
          <div className="">
            <div className="flex h-full flex-col justify-between px-5 py-4">
              <div>
                <h3 className={`mb-3 text-2xl font-semibold`}>
                  {workItem.title}
                </h3>
                <p
                  className={`m-0 text-sm text-zinc-400 flex items-start space-x-2`}
                >
                  <span>{workItem.where}</span>
                </p>

                <p
                  className={`m-0 text-sm text-zinc-400 flex items-start space-x-2`}
                >
                  <span>{workItem.when}</span>
                </p>

                <p
                  className={`m-0 text-sm text-zinc-400 flex items-start space-x-2`}
                >
                  <span>{workItem.about}</span>
                </p>


              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}