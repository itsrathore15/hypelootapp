import Image from "next/image";

export default function Navbar() {
  return (
    <header className="shadow-sm bg-[#2E2E2E] transition-colors duration-300">
      <div className="h-[60px] py-2.5 px-4 md:px-5 flex items-center justify-between">
        <div className="text-center md:hidden">
          <a href="/leaderboard" className="text-center md:hidden">
            <div className="flex items-center text-[10px]">
              <span className="flex justify-center gap-[3px] px-1.5 py-1 md:gap-[1px] md:pl-1.5 md:pr-1 md:py-0.5 text-xs md:text-[9px] text-white font-bold bg-[#8554FB] rounded-md !text-[10px] !ml-0">
                <span className="mr-1">4d</span>
                <span>01</span>
                <span>:</span>
                <span>21</span>
                <span>:</span>
                <span className="min-w-[14px]">52</span>
              </span>
            </div>
          </a>
          <div className="text-[10px] text-white/50 mt-1">Leaderboard</div>
        </div>
        <div className="flex items-center text-white transition-colors duration-300 relative">
          <a href="/" className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="161"
              height="17"
              fill="none"
              className="relative z-[1]"
            >
              <path
                fill="currentColor"
                d="m18.058.894-2.894 15.582h-5.14l1.135-6.074H6.274L5.14 16.476H0L2.894.894h5.14L6.992 6.506h4.885L12.919.894h5.14ZM40.744.894l-7.895 10.85-.88 4.732H26.83l.88-4.732L23.843.894h5.881l1.597 5.524L34.956.894h5.788ZM70.63 4.768l-.347 1.936h5.093l-.694 3.676h-5.094l-.416 2.2h5.788l-.718 3.896H63.314L66.208.894h10.928l-.718 3.874H70.63ZM88.975 12.779h4.954l-.695 3.697H83.14L86.034.894h5.14l-2.2 11.885ZM107.516 16.63c-1.389 0-2.609-.271-3.658-.814-1.05-.543-1.86-1.306-2.431-2.289-.571-.998-.857-2.135-.857-3.411 0-1.864.402-3.507 1.204-4.93a8.571 8.571 0 0 1 3.403-3.345c1.467-.807 3.149-1.21 5.047-1.21 1.42 0 2.655.27 3.705.813 1.065.529 1.883 1.284 2.454 2.267.571.969.856 2.091.856 3.368 0 1.848-.409 3.499-1.227 4.951-.802 1.453-1.944 2.583-3.426 3.39-1.466.807-3.156 1.21-5.07 1.21Zm.787-4.556c.802 0 1.497-.198 2.084-.594a3.922 3.922 0 0 0 1.365-1.606 5.171 5.171 0 0 0 .464-2.18c0-.806-.232-1.43-.695-1.87-.448-.455-1.096-.682-1.945-.682-.802 0-1.505.198-2.107.594a3.903 3.903 0 0 0-1.389 1.607 5.039 5.039 0 0 0-.463 2.156c0 .807.224 1.438.672 1.893.463.455 1.134.682 2.014.682ZM130.392 16.63c-1.39 0-2.609-.271-3.658-.814-1.05-.543-1.86-1.306-2.431-2.289-.571-.998-.857-2.135-.857-3.411 0-1.864.401-3.507 1.204-4.93a8.565 8.565 0 0 1 3.403-3.345c1.466-.807 3.149-1.21 5.047-1.21 1.42 0 2.655.27 3.705.813 1.065.529 1.883 1.284 2.454 2.267.571.969.856 2.091.856 3.368 0 1.848-.409 3.499-1.227 4.951-.802 1.453-1.945 2.583-3.426 3.39-1.467.807-3.157 1.21-5.07 1.21Zm.787-4.556c.802 0 1.497-.198 2.083-.594a3.917 3.917 0 0 0 1.366-1.606 5.17 5.17 0 0 0 .463-2.18c0-.806-.231-1.43-.694-1.87-.448-.455-1.096-.682-1.945-.682-.803 0-1.505.198-2.107.594a3.903 3.903 0 0 0-1.389 1.607 5.024 5.024 0 0 0-.463 2.156c0 .807.224 1.438.671 1.893.464.455 1.135.682 2.015.682ZM161 .894l-.718 3.874h-4.352l-2.176 11.708h-5.14l2.176-11.708h-4.306l.718-3.874H161Z"
              ></path>
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M57.748 8.927a6.276 6.276 0 0 0 1.204-2.685c.077-.44.116-.821.116-1.144 0-1.306-.455-2.333-1.366-3.081-.91-.749-2.238-1.123-3.982-1.123h-7.177l-.728 3.918H52.423c.911 0 1.366.352 1.366 1.056 0 .073-.015.198-.046.374-.185.954-.803 1.43-1.852 1.43H45.284l-1.635 8.804h5.14l.926-4.952h2.037c1.327 0 2.5-.234 3.52-.704 1.033-.47 1.859-1.1 2.476-1.893Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <div className="hidden md:flex gap-x-5 ml-4 items-center">
            <div className="flex px-10 items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
              <ul className="px-4 flex justify-around gap-4 min-[1250px]:gap-1">
                <li className="w-full md:w-auto hidden">
                  <a
                    href="/battles"
                    className="nav-item-active router-link-exact-active relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M13.333 1.333H2.667c-.667 0-1.334.6-1.334 1.334v2.006c0 .48.287.894.667 1.127v7.533c0 .734.733 1.334 1.333 1.334h9.334c.6 0 1.333-.6 1.333-1.334V5.8c.38-.233.667-.647.667-1.127V2.667c0-.734-.667-1.334-1.334-1.334Zm-4 8H6.667A.669.669 0 0 1 6 8.667C6 8.3 6.3 8 6.667 8h2.666c.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm4-4.666H2.667v-2h10.666v2Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Boxes
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M13.333 1.333H2.667c-.667 0-1.334.6-1.334 1.334v2.006c0 .48.287.894.667 1.127v7.533c0 .734.733 1.334 1.333 1.334h9.334c.6 0 1.333-.6 1.333-1.334V5.8c.38-.233.667-.647.667-1.127V2.667c0-.734-.667-1.334-1.334-1.334Zm-4 8H6.667A.669.669 0 0 1 6 8.667C6 8.3 6.3 8 6.667 8h2.666c.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm4-4.666H2.667v-2h10.666v2Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Boxes
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M13.333 1.333H2.667c-.667 0-1.334.6-1.334 1.334v2.006c0 .48.287.894.667 1.127v7.533c0 .734.733 1.334 1.333 1.334h9.334c.6 0 1.333-.6 1.333-1.334V5.8c.38-.233.667-.647.667-1.127V2.667c0-.734-.667-1.334-1.334-1.334Zm-4 8H6.667A.669.669 0 0 1 6 8.667C6 8.3 6.3 8 6.667 8h2.666c.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm4-4.666H2.667v-2h10.666v2Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Boxes
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M13.333 1.333H2.667c-.667 0-1.334.6-1.334 1.334v2.006c0 .48.287.894.667 1.127v7.533c0 .734.733 1.334 1.333 1.334h9.334c.6 0 1.333-.6 1.333-1.334V5.8c.38-.233.667-.647.667-1.127V2.667c0-.734-.667-1.334-1.334-1.334Zm-4 8H6.667A.669.669 0 0 1 6 8.667C6 8.3 6.3 8 6.667 8h2.666c.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm4-4.666H2.667v-2h10.666v2Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Boxes
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          fill="currentColor"
                          d="M13.333 1.333H2.667c-.667 0-1.334.6-1.334 1.334v2.006c0 .48.287.894.667 1.127v7.533c0 .734.733 1.334 1.333 1.334h9.334c.6 0 1.333-.6 1.333-1.334V5.8c.38-.233.667-.647.667-1.127V2.667c0-.734-.667-1.334-1.334-1.334Zm-4 8H6.667A.669.669 0 0 1 6 8.667C6 8.3 6.3 8 6.667 8h2.666c.367 0 .667.3.667.667 0 .366-.3.666-.667.666Zm4-4.666H2.667v-2h10.666v2Z"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Boxes
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          d="M12.6987 14.4001L10.7487 12.4667L9.28203 13.9334L8.81536 13.4667C8.55981 13.2112 8.43203 12.8945 8.43203 12.5167C8.43203 12.1389 8.55981 11.8223 8.81536 11.5667L11.632 8.75006C11.8876 8.4945 12.2043 8.36672 12.582 8.36672C12.9598 8.36672 13.2765 8.4945 13.532 8.75006L13.9987 9.21672L12.532 10.6834L14.4654 12.6334C14.5987 12.7667 14.6654 12.9223 14.6654 13.1001C14.6654 13.2778 14.5987 13.4334 14.4654 13.5667L13.632 14.4001C13.4987 14.5334 13.3431 14.6001 13.1654 14.6001C12.9876 14.6001 12.832 14.5334 12.6987 14.4001ZM14.6654 3.93339L7.0987 11.5001L7.18203 11.5667C7.43759 11.8223 7.56536 12.1389 7.56536 12.5167C7.56536 12.8945 7.43759 13.2112 7.18203 13.4667L6.71536 13.9334L5.2487 12.4667L3.2987 14.4001C3.16536 14.5334 3.00981 14.6001 2.83203 14.6001C2.65425 14.6001 2.4987 14.5334 2.36536 14.4001L1.53203 13.5667C1.3987 13.4334 1.33203 13.2778 1.33203 13.1001C1.33203 12.9223 1.3987 12.7667 1.53203 12.6334L3.46536 10.6834L1.9987 9.21672L2.46536 8.75006C2.72092 8.4945 3.03759 8.36672 3.41536 8.36672C3.79314 8.36672 4.10981 8.4945 4.36536 8.75006L4.43203 8.83339L11.9987 1.26672H14.6654V3.93339ZM4.63203 7.23339L1.33203 3.93339V1.26672H3.9987L7.2987 4.56672L4.63203 7.23339Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Battles
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          d="M12.6987 14.4001L10.7487 12.4667L9.28203 13.9334L8.81536 13.4667C8.55981 13.2112 8.43203 12.8945 8.43203 12.5167C8.43203 12.1389 8.55981 11.8223 8.81536 11.5667L11.632 8.75006C11.8876 8.4945 12.2043 8.36672 12.582 8.36672C12.9598 8.36672 13.2765 8.4945 13.532 8.75006L13.9987 9.21672L12.532 10.6834L14.4654 12.6334C14.5987 12.7667 14.6654 12.9223 14.6654 13.1001C14.6654 13.2778 14.5987 13.4334 14.4654 13.5667L13.632 14.4001C13.4987 14.5334 13.3431 14.6001 13.1654 14.6001C12.9876 14.6001 12.832 14.5334 12.6987 14.4001ZM14.6654 3.93339L7.0987 11.5001L7.18203 11.5667C7.43759 11.8223 7.56536 12.1389 7.56536 12.5167C7.56536 12.8945 7.43759 13.2112 7.18203 13.4667L6.71536 13.9334L5.2487 12.4667L3.2987 14.4001C3.16536 14.5334 3.00981 14.6001 2.83203 14.6001C2.65425 14.6001 2.4987 14.5334 2.36536 14.4001L1.53203 13.5667C1.3987 13.4334 1.33203 13.2778 1.33203 13.1001C1.33203 12.9223 1.3987 12.7667 1.53203 12.6334L3.46536 10.6834L1.9987 9.21672L2.46536 8.75006C2.72092 8.4945 3.03759 8.36672 3.41536 8.36672C3.79314 8.36672 4.10981 8.4945 4.36536 8.75006L4.43203 8.83339L11.9987 1.26672H14.6654V3.93339ZM4.63203 7.23339L1.33203 3.93339V1.26672H3.9987L7.2987 4.56672L4.63203 7.23339Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Battles
                    </span>
                  </a>
                </li>
                <li className="w-full md:w-auto hidden md:block">
                  <a
                    href="/battles"
                    className="relative min-[1250px]:mt-1 min-[1250px]:p-2.5 flex flex-col min-[1250px]:flex-row items-center text-white/50 hover:text-black hover:text-white transition-colors duration-300 cursor-pointer after:content-[''] after:absolute after:inset-x-2.5 after:bottom-[-10px] after:h-[2px] after:bg-current after:scale-x-0 min-[1250px]:hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    <div className="flex items-center mb-1.5 min-[1250px]:mb-0 min-[1250px]:mr-2.5">
                      <svg
                        data-v-b323f4c4=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="icon"
                      >
                        <path
                          d="M12.6987 14.4001L10.7487 12.4667L9.28203 13.9334L8.81536 13.4667C8.55981 13.2112 8.43203 12.8945 8.43203 12.5167C8.43203 12.1389 8.55981 11.8223 8.81536 11.5667L11.632 8.75006C11.8876 8.4945 12.2043 8.36672 12.582 8.36672C12.9598 8.36672 13.2765 8.4945 13.532 8.75006L13.9987 9.21672L12.532 10.6834L14.4654 12.6334C14.5987 12.7667 14.6654 12.9223 14.6654 13.1001C14.6654 13.2778 14.5987 13.4334 14.4654 13.5667L13.632 14.4001C13.4987 14.5334 13.3431 14.6001 13.1654 14.6001C12.9876 14.6001 12.832 14.5334 12.6987 14.4001ZM14.6654 3.93339L7.0987 11.5001L7.18203 11.5667C7.43759 11.8223 7.56536 12.1389 7.56536 12.5167C7.56536 12.8945 7.43759 13.2112 7.18203 13.4667L6.71536 13.9334L5.2487 12.4667L3.2987 14.4001C3.16536 14.5334 3.00981 14.6001 2.83203 14.6001C2.65425 14.6001 2.4987 14.5334 2.36536 14.4001L1.53203 13.5667C1.3987 13.4334 1.33203 13.2778 1.33203 13.1001C1.33203 12.9223 1.3987 12.7667 1.53203 12.6334L3.46536 10.6834L1.9987 9.21672L2.46536 8.75006C2.72092 8.4945 3.03759 8.36672 3.41536 8.36672C3.79314 8.36672 4.10981 8.4945 4.36536 8.75006L4.43203 8.83339L11.9987 1.26672H14.6654V3.93339ZM4.63203 7.23339L1.33203 3.93339V1.26672H3.9987L7.2987 4.56672L4.63203 7.23339Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[10px] leading-[10px] text-center min-[1250px]:text-[13px] font-medium min-[1250px]:font-semibold min-[1250px]:uppercase">
                      Battles
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:gap-4 min-[1250px]:gap-6 hidden md:flex mr-2 items-center">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="flex w-4 h-4 text-white/50 hover:text-white"
                >
                  <svg
                    data-v-b323f4c4=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 24 24"
                    className="icon"
                  >
                    <path
                      d="M6 7l8-5v20l-8-5v-10zm-6 10h4v-10h-4v10zm20.264-13.264l-1.497 1.497c1.847 1.783 2.983 4.157 2.983 6.767 0 2.61-1.135 4.984-2.983 6.766l1.498 1.498c2.305-2.153 3.735-5.055 3.735-8.264s-1.43-6.11-3.736-8.264zm-.489 8.264c0-2.084-.915-3.967-2.384-5.391l-1.503 1.503c1.011 1.049 1.637 2.401 1.637 3.888 0 1.488-.623 2.841-1.634 3.891l1.503 1.503c1.468-1.424 2.381-3.309 2.381-5.394z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  className="flex items-center justify-center px-5 py-2 border-2 border-transparent text-sm font-semibold uppercase rounded-lg focus:outline-none transition-colors duration-300 text-white bg-[#8554FB] hover:bg-[#8554FB] disabled:bg-none  disabled:!bg-[#383838]  disabled:!text-[#838383] hidden md:block w-[150px]"
                >
                  <div className="inline-flex items-center"> Sign up </div>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center px-5 py-2 border-2 border-transparent text-sm font-semibold uppercase rounded-lg focus:outline-none transition-colors duration-300 text-[#8554FB]  hover:text-[#8554FB] !border-current disabled:!border-transparent disabled:text-white  disabled:bg-[#383838] hidden md:block w-[150px] !text-white"
                >
                  <div className="inline-flex items-center"> Login </div>
                </button>
                <button className="flex md:hidden justify-center items-center w-[40px] h-[40px] bg-[#6629FA] rounded-md text-white">
                  <svg
                    data-v-b323f4c4=""
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                  >
                    <path
                      d="M8.00002 4.00001C8.73335 4.00001 9.33335 4.60001 9.33335 5.33334C9.33335 6.06667 8.73335 6.66667 8.00002 6.66667C7.26669 6.66667 6.66669 6.06667 6.66669 5.33334C6.66669 4.60001 7.26669 4.00001 8.00002 4.00001ZM8.00002 10.6667C9.80002 10.6667 11.8667 11.5267 12 12H4.00002C4.15335 11.52 6.20669 10.6667 8.00002 10.6667ZM8.00002 2.66667C6.52669 2.66667 5.33335 3.86001 5.33335 5.33334C5.33335 6.80667 6.52669 8.00001 8.00002 8.00001C9.47335 8.00001 10.6667 6.80667 10.6667 5.33334C10.6667 3.86001 9.47335 2.66667 8.00002 2.66667ZM8.00002 9.33334C6.22002 9.33334 2.66669 10.2267 2.66669 12V13.3333H13.3334V12C13.3334 10.2267 9.78002 9.33334 8.00002 9.33334Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
