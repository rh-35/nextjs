import { notFound } from "@/lib/not-found"
import Image from "next/image"

export default function NotFound() {

  const errorMessage = notFound[Math.floor(notFound.length * Math.random())];

  return (
    <div className="flex space-x-8 justify-center items-center mt-4 h-full w-full">
      <div className="text-center text-2xl font-semibold self-center">
        Womp Womp <br />
        <span className="text-red-600">404</span>: {errorMessage.title}
      </div>
      <div>
        <Image
          className="rounded-lg"
          src={errorMessage.path}
          height={250}
          width={250}
          alt={errorMessage.title}
        />
      </div>
    </div>
  )
}
