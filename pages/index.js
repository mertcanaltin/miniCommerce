import Image from "next/image"
import Link from "next/link"

import { project } from "../lib/helpers"

export default function Home() {
  return (
    <>
      <div className="m-20">
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 flex items-center justify-between">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Mini Commerce
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  simplest and most powerful.
                </p>
                <Link href="/list" className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 mt-2">
                    Get Started
                </Link>
              </div>
                {/* Decorative image grid */}
                <Image
                  src={'https://samsung-akinon.b-cdn.net/cms/2022/09/23/76ca838c-3a55-4e71-86aa-6b7a93b470f1.jpg'}
                  alt={project.brandName}
                  width={500}
                  height={500}
                  className="h-full w-full object-contain object-center max-w-xl"
                />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
