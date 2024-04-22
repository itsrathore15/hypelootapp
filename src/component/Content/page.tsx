import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div
        className="group relative pt-5 md:pt-9 pb-3 md:pb-5 px-3 md:px-5 rounded-2xl bg-[#2E2E2E] hover:shadow-lg transition duration-300 cursor-pointer overflow-hidden"
      >
        <div
          className="absolute top-1 left-1 flex z-[1] gap-2"
        >
          <div
            className="py-1.5 px-2.5 border border-current rounded-full text-xs font-semibold uppercase badge-new text-green-400"
          >
            new
          </div>
        </div>
        <div className="relative pt-[80%]">
          <div
            className="absolute inset-0 flex justify-center group-hover:-translate-y-3 transition-transform duration-300"
          >
            <Image
              src="/fourth.webp"
              width={600}
              height={700}
              alt=""
              className="self-center max-h-full"
            />
          </div>
        </div>
        <div className="flex items-center mt-2.5">
          <div
            data-v-ac117bc0=""
            className="relative px-1 rounded-md bg-white text-black text-sm md:text-base font-semibold transition-colors duration-300 flex items-center gap-1.5"
          >
            <div data-v-ac117bc0="" className="flex items-center gap-1">
              <span className="text-inherit">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 11C8.73443 11 10.3462 10.7671 11.5589 10.3629C12.16 10.1625 12.7186 9.90188 13.1475 9.5639C13.1502 9.56174 13.153 9.55957 13.1557 9.55739C14.2925 9.92133 15 10.4331 15 11C15 12.1046 12.3137 13 9 13C5.68629 13 3 12.1046 3 11C3 10.8511 3.04884 10.7059 3.14148 10.5663C4.24476 10.8442 5.58134 11 7 11ZM4.24984 9.778C5.07368 9.91988 6.00877 10 7 10C8.93319 10 10.6528 9.69524 11.7502 9.222C10.9263 9.08012 9.99123 9 9 9C7.06681 9 5.34715 9.30476 4.24984 9.778Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15 5C15 6.10457 12.3137 7 9 7C5.68629 7 3 6.10457 3 5C3 3.89543 5.68629 3 9 3C12.3137 3 15 3.89543 15 5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.8443 6.55739C1.70753 6.92133 1 7.43312 1 8C1 9.10457 3.68629 10 7 10C10.3137 10 13 9.10457 13 8C13 7.85106 12.9512 7.70592 12.8585 7.56627C11.7552 7.8442 10.4187 8 9 8C7.26557 8 5.65384 7.76713 4.44113 7.3629C3.84 7.16252 3.2814 6.90188 2.85254 6.5639C2.84979 6.56174 2.84704 6.55957 2.8443 6.55739ZM4.24984 6.222C5.34715 6.69524 7.06681 7 9 7C9.99123 7 10.9263 6.91988 11.7502 6.778C10.6528 6.30476 8.93319 6 7 6C6.00877 6 5.07368 6.08012 4.24984 6.222Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="relative text-inherit">39.30</span>
            </div>
          </div>
          <div className="ml-1.5 md:ml-3 text-white/50 text-xs md:text-base font-medium line-through">
            <div data-v-ac117bc0="" className="flex items-center gap-1">
              <span className="text-inherit">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 11C8.73443 11 10.3462 10.7671 11.5589 10.3629C12.16 10.1625 12.7186 9.90188 13.1475 9.5639C13.1502 9.56174 13.153 9.55957 13.1557 9.55739C14.2925 9.92133 15 10.4331 15 11C15 12.1046 12.3137 13 9 13C5.68629 13 3 12.1046 3 11C3 10.8511 3.04884 10.7059 3.14148 10.5663C4.24476 10.8442 5.58134 11 7 11ZM4.24984 9.778C5.07368 9.91988 6.00877 10 7 10C8.93319 10 10.6528 9.69524 11.7502 9.222C10.9263 9.08012 9.99123 9 9 9C7.06681 9 5.34715 9.30476 4.24984 9.778Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15 5C15 6.10457 12.3137 7 9 7C5.68629 7 3 6.10457 3 5C3 3.89543 5.68629 3 9 3C12.3137 3 15 3.89543 15 5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.8443 6.55739C1.70753 6.92133 1 7.43312 1 8C1 9.10457 3.68629 10 7 10C10.3137 10 13 9.10457 13 8C13 7.85106 12.9512 7.70592 12.8585 7.56627C11.7552 7.8442 10.4187 8 9 8C7.26557 8 5.65384 7.76713 4.44113 7.3629C3.84 7.16252 3.2814 6.90188 2.85254 6.5639C2.84979 6.56174 2.84704 6.55957 2.8443 6.55739ZM4.24984 6.222C5.34715 6.69524 7.06681 7 9 7C9.99123 7 10.9263 6.91988 11.7502 6.778C10.6528 6.30476 8.93319 6 7 6C6.00877 6 5.07368 6.08012 4.24984 6.222Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="relative text-inherit">43.67</span>
            </div>
          </div>
        </div>
        <div
          data-v-ac117bc0=""
          className="mt-2.5  text-white text-sm font-semibold uppercase transition-colors duration-300"
        >
          The North Face only
        </div>
      </div>
    </>
  );
};

export default page;
