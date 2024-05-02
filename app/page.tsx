import { Studioskills } from "@/components/studioskills";
import { Liveskills } from "@/components/liveskills";

export default function Page() {
  return (
    <div className="mt-24 mx-4 sm:mx-10 xl:mx-56 justify-center items-center flex-col">
      <div className="flex h-72 sm:h-56 items-center sm:space-x-2 justify-center text-center">
        <div className="">
          <p className="text-5xl font-bold space-x-2">
            <span>Just your typical</span>
            <span className=" bg-gradient-to-r from-blue-400 via-pink-400 to-blue-400 inline-block text-transparent bg-clip-text text-5xl font-bold">
              Transfem
            </span>
          </p>
          <div className="text-4xl font-semibold text-zinc-400">
            Technical Theater and Sound Nerd
          </div>
        </div>
      </div>
      <p className="text-3xl text-center font-semibold">Live Skills</p>
      <Liveskills />
      <div className="w-full h-16" />
      <p className="text-3xl text-center font-semibold">Studio Skills</p>
      <Studioskills />
    </div>
  );
}
