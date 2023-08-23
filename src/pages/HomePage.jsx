export default function Home() {
  return (
    <div className="relative bg-red-600 h-screen p-8  overflow-hidden">
      <div className=" w-full  max-w-7xl    mx-auto">
        <div className="relative bg-gray-600 p-4 z-10  pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden  lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="#4B5563"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10r mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Web Building </span>
                {"   "}
                <div></div>
                <span className="block text-cyan-900 xl:inline">
                  to empower business
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                "Welcome to our web building business! We specialize in creating
                stunning and user-friendly websites that empower businesses and
                individuals to establish a powerful online presence. With our
                expert team and personalized approach, we craft unique websites
                tailored to your specific needs, ensuring your digital success."
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/Pricing"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-900 hover:bg-cyan-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-cyan-900 bg-indigo-100 hover:bg-cyan-600 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-screen"
          src="https://cdn.pixabay.com/photo/2016/02/07/21/03/computer-1185626_1280.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
