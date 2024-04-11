"use client";
import * as React from "react";
import Link from "next/link";
import Image from 'next/image';
import { showcase } from "@/lib/showcase";

export function Showcase() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center content-start gap-4 my-20">
            {showcase.map((showcaseItem) => (
                <div key={showcaseItem.title}>
                    <Image
                        className="rounded-2xl"
                        src={showcaseItem.path}
                        quality={100}
                        height={0}
                        width={500}
                        title={showcaseItem.title}
                        alt={showcaseItem.title}
                    />
                </div>
            ))}
        </div>
    )
}