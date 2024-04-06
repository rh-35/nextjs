import { Work } from "@/components/work";

export default function Home() {

  return (
    <div className="w-screen overflow-x-hidden mt-32">  
        <div className="flex-col text-center">
          <div className="text-5xl font-semibold">Hello I&apos;m Rhea</div>
          <div className="text-3xl">a dumb idiot that does stupid things</div>
        </div>
      <Work/>
    </div>
  );
}
