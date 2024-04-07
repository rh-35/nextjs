"use client";
import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { showcase } from "@/lib/showcase";

export function Showcase() {
    return(
        <div className="flex justify-center w-full h-full flex-wrap my-20">
            {showcase.map((showcaseItem) => (
                <div key={showcaseItem.staticPhoto} className="relative rounded-lg">
                    <div className="flex h-full flex-col justify-normal px-2 py-2">
                        <div>
                            <Image
                                className="rounded-2xl"
                                src={showcaseItem.path}
                                quality={100}
                                height={0}
                                width={750}
                                title={showcaseItem.staticPhoto}
                                alt={showcaseItem.staticPhoto}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}