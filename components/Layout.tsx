import Link from "next/link";
import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="dark:bg-darkBg dark:text-white min-h-screen">
      <nav className="flex justify-end gap-x-4 md:gap-x-10 p-8">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/works`}>Works</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
      <div className="p-10 flex flex-col-reverse md:flex-row gap-x-10">
        <div className="flex justify-center md:justify-start md:flex-col gap-4 md:fixed md:top-[55%] md:left-[3rem] md:h-[45%] md:after:contents-[''] md:after:bg-[#47528f] md:after:inline-block md:after:absolute md:after:left-[0.6rem] md:after:w-[1px] md:after:h-[100%] md:after:top-[14rem]">
          <Link href={`https://github.com/ashrhmn`} passHref>
            <FaGithub className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link href={`https://instagram.com/ashrhmn7`} passHref>
            <FaInstagram className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link href={`https://facebook.com/ashrhmn7`} passHref>
            <FaFacebook className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link href={`https://twitter.com/ashrhmn7`} passHref>
            <FaTwitter className="h-6 w-6 cursor-pointer" />
          </Link>
          <Link href={`https://t.me/ashrhmn`} passHref>
            <FaTelegram className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>
        <div className="max-w-[1200px] mb-10 md:px-16 mx-auto">{children}</div>
        <div className="fixed top-[45%] right-[3rem] h-[55%] after:contents-[''] after:bg-[#47528f] after:inline-block after:absolute after:right-[0.6rem] after:w-[1px] after:h-[100%] after:top-[18rem] hidden md:block">
          <Link href={`mailto:ashrhmn@outlook.com`} passHref>
            <a className="text-sm leading-[1]">
              {Array.from("ashrhmn@outlook.com").map((l, i) => (
                <div className="rotate-90" key={i}>
                  {l}
                </div>
              ))}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
