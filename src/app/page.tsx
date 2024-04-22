import Image from "next/image";
import Navbar from "../component/Navbar/page";
import Content from "../component/Content/page";
import Footer from "../component/Footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">
        {/* side layout */}
      <div className="flex-end hidden sticky mr-0 md:flex md:flex-col md:gap-4 md:h-screen md:pt-5 md:right-2 md:top-0 md:w-[17%] float-right">
          <a
            href="/cashback"
            className="hidden lg:block w-full py-1 text-center text-[11px] text-white bg-[#9D75FF] rounded-l-md"
          >
            <span className="opacity-70 mr-1.5">Until cashback</span>
            <span className="font-bold">02:29:38</span>
          </a>
          <div className="h-full py-3.5 px-2.5 bg-white !bg-[#2E2E2E] rounded-tl-2xl overflow-y-auto scrollbar-hide transition-colors duration-300">
            <div className="flex items-center mb-2.5 text-white text-sm font-semibold uppercase before:w-[6px] before:h-[6px] before:mr-1.5 before:rounded before:bg-[#FF2E00] transition-colors duration-300 before:animate-pulse">
              Live Feed
            </div>
            <div className="flex flex-col gap-2.5">
              <div
                data-v-f9723a0e=""
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
              <div
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
              <div
                data-v-f9723a0e=""
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
              <div
                data-v-f9723a0e=""
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
              <div
                data-v-f9723a0e=""
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
              <div
                data-v-f9723a0e=""
                className="group relative h-[120px] rounded-[10px] hover:bg-[#F5F5F5] transition-colors duration-300 overflow-hidden isolate bg-[#F5F5F5] !bg-[#121212]"
              >
                <div className="absolute top-0 right-0 border-t-[22px] border-l-[22px] border-l-transparent group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-300 z-[1] badge-rare"></div>
                <div className="absolute top-1 right-1 translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 z-[1]">
                  <Image
                    src="/third.png"
                    alt=""
                    width="24"
                    height="24"
                    className="shrink-0 w-6 h-6 rounded-full"
                  />
                </div>
                <a href="/boxes/dunk-low" className="">
                  <div className="relative h-full group-hover:-translate-x-full transition-transform duration-300 cursor-pointer">
                    <div className="h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/second.jpg"
                        alt=""
                        width="24"
                        height="24"
                        className="self-center max-h-full"
                      />
                    </div>
                    <div className="absolute top-0 left-full w-full h-full flex justify-center px-5 py-2.5">
                      <Image
                        src="/first.jpg"
                        width="24"
                        height="24"
                        alt=""
                        className="self-center max-h-full"
                      />
                    </div>
                  </div>
                </a>
                <div className="absolute bottom-1 right-1 p-1.5 !bg-[#1A1A1A]  text-white bg-gradient-to-r from-[#FFC701] to-[#FAFF01]  rounded-md text-sm leading-none font-medium transition-colors duration-300">
                  {" "}
                  $130
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[80%] mb-5 p-4 m-4 md:p-5 lg:p-10 rounded-2xl text-white bg-white !bg-[#2E2E2E] transition-colors duration-300">
          <h1 className="mb-[30px] text-4xl font-medium text-white text-white text-center transition-colors duration-300">
            All boxes
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="flex text-xs font-semibold uppercase transition-colors duration-300 text-white/50"
              >
                {" "}
                price{" "}
                <svg
                  data-v-b323f4c4=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="none"
                  className="icon ml-1.5"
                >
                  <path
                    fill="currentColor"
                    d="M4 14v-4h1.333v4H4Zm8 0h-1.333V2H12v12Zm-4.667 0V6h1.334v8H7.333Z"
                  ></path>
                </svg>
              </button>
              <button
                type="button"
                className="flex text-xs font-semibold uppercase transition-colors duration-300 text-white/50"
              >
                {" "}
                A-Z{" "}
                <svg
                  data-v-b323f4c4=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  fill="none"
                  className="icon ml-1.5"
                >
                  <path
                    fill="currentColor"
                    d="M4 14v-4h1.333v4H4Zm8 0h-1.333V2H12v12Zm-4.667 0V6h1.334v8H7.333Z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="relative flex-auto w-full md:w-auto">
              <input
                type="text"
                placeholder="Search boxes"
                className="w-full p-5 pr-12 bg-transparent border border-[#ebebeb] rounded-lg text-sm text-black text-white focus:border-[#FFC701] focus:outline-none transition-colors duration-300"
              />
              <svg
                data-v-b323f4c4=""
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="none"
                className="icon absolute top-6 right-5"
              >
                <path
                  fill="#838383"
                  d="M10.503 9.503h-.526l-.187-.18a4.314 4.314 0 0 0 1.047-2.82 4.333 4.333 0 1 0-4.334 4.334c1.074 0 2.06-.394 2.82-1.047l.18.187v.526l3.334 3.327.993-.993-3.327-3.334Zm-4 0c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        {/* content */}
        <div className="m-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-2.5 md:gap-4 lg:gap-5 w-[80%]">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          
        </div>
        
        <Footer />
      </div>
    </>
  );
}
