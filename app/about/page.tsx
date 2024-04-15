import { Studioskills } from "@/components/studioskills";
import { Liveskills } from "@/components/liveskills";

export default function Page() {
  return (
    <div className="mt-56 mx-10 md:mx-10 xl:mx-56">
        <div className="flex-col items-center space-x-2 justify-center text-center">
            <div className="text-5xl font-bold">Just your typical<div className="bg-gradient-to-r from-blue-400 to-pink-400 inline-block text-transparent bg-clip-text text-5xl font-bold px-2">Transfem</div></div>
            <div className="text-4xl font-semibold text-zinc-400">Technical Theater and Sound Nerd</div>
        </div>
        <div className="w-full h-8"/>
        <p className="text-3xl font-semibold">Live Skills</p>
        <Liveskills/>
        <div className="w-full h-8"/>
        <p className="text-3xl font-semibold">Studio Skills</p>
        <Studioskills/>
    </div>
  );
}
