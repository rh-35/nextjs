import { Work } from "@/components/work";
import { Showcase } from "@/components/showcase";

export default function Home() {

  return (
    <div className="w-screen overflow-x-hidden mt-48">  
        <div className="flex-col text-center">
          <div className="text-5xl font-semibold">Hello I&apos;m Rhea</div>
          <div className="text-4xl font-semibold text-zinc-400">a dumb idiot that does stupid things</div>
        </div>
        <div className="w-full h-16"/>
      <div className="md:mx-32 xl:mx-48">
        <p className="text-3xl ml-10 font-semibold">My &quot;Achievements&quot;</p>
        <p className="pl-10 text-zinc-400">Things I Make Money From (or not)</p>
        <Work/>
        <div className="w-full h-16"/>
      </div>
    </div>
  );
}
