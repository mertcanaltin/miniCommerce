import Image from "next/image"
export default function Home() {
  return (
    <>
      <div className="m-20">
        <div className="relative overflow-hidden bg-white">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Mini Commerce
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  simplest and most powerful.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2021/09/02/6333/9e681ff5-1e4d-407d-aaa4-b978bd2b8e4d.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2021/09/13/7394/14d8f2c8-47d3-4a9e-89e0-ffdf5c83362b.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2021/09/02/6333/9e681ff5-1e4d-407d-aaa4-b978bd2b8e4d.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2021/11/10/8879/a8032be7-a7f9-4ed5-a17d-d7b8ede2ef5e.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2022/03/30/9978/c7e6eb0a-85fb-42ff-934d-7e7a36848535.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2020/09/07/692/77bd0784-d68f-47ce-9733-5248cd09466e.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="https://tefal.akinoncdn.com/products/2020/11/03/2161/3b37c8cc-48f5-49e7-b078-b560bcff03df.jpg"
                              alt="mini-commerce"
                              width={500}
                              height={500}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/list"
                    className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
