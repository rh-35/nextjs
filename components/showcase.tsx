"use client";
import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { showcase } from "@/lib/showcase";

export function Showcase() {
    return(
        <div className="flex w-full h-full flex-wrap justify-center my-20">
            {showcase.map((showcaseItem) => (
                <div key={showcaseItem.staticPhoto} className="relative rounded-lg">
                    <div className="flex h-full flex-col justify-between px-2 py-2">
                        <div>
                            <Image
                                className="rounded-2xl"
                                src={showcaseItem.path}
                                height={500}
                                width={500}
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