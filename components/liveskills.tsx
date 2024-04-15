import { liveskills } from "@/lib/liveskills";
import Image from "next/image";

export function Liveskills() {
  return (
    <div className="mt-8 grid relative w-full grid-flow-row grid-cols-1 gap-10 text-center md:gap-4 md:text-left lg:mb-0 md:grid-cols-2 2xl:grid-cols-3">
      {liveskills.map((liveskillsItem) => (
        <div
          key={liveskillsItem.title}
          className="relative rounded-lg"
        >
          <div className=" flex-col rounded-lg px-5 py-4 bg-zinc-900 ">
            <div className="flex items-center justify-center space-x-5">
              <div className="text-3xl font-semibold">
                {liveskillsItem.title}
              </div>
              <div>
                <Image
                  className=""
                  src={liveskillsItem.image}
                  quality={100}
                  height={0}
                  width={50}
                  title={liveskillsItem.image}
                  alt={liveskillsItem.image}
                />
              </div>
            </div>
            <div className="h-4"/>
            <div>{liveskillsItem.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
