import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex justify-center items-center space-x-8 h-screen w-screen">
      <div className="text-center text-2xl self-center">
        Womp Womp <br />
        <span className="text-red-600">404</span>: Page Not Found
      </div>
      <div>
        <Image
          className="rounded-lg"
          src="/images/building.gif"
          height={250}
          width={250}
          alt="womp womp"
        />
      </div>
    </div>
  );
}
