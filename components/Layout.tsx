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
      <nav className="flex justify-end gap-x-10 p-8">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/works`}>Works</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
      <div className="p-10 flex gap-x-10">
        <div className="flex flex-col gap-4 social-links">
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
        <div className="max-w-[1200px] px-16 mx-auto">{children}</div>
        <div className="side-email">
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
