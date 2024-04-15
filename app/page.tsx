import { Work } from "@/components/work";
import { Showcase } from "@/components/showcase";

export default function Home() {

  return (
    <div className="mt-56 xl:mx-56 mx-10">
    <div className="flex-col items-center space-x-2 justify-center text-center">
        <div className="text-5xl font-bold">Hello I&apos;m Rhea</div>
        <div className="text-4xl font-semibold text-zinc-400">a dumb idiot that does stupid things</div>
    </div>
    <div className="w-full h-16"/>
    <p className="text-3xl font-semibold">My &quot;Achievements&quot;</p>
    <p className="text-zinc-400">Things I Make Money From (or not)</p>
    <Work/>
</div>
  );
}
