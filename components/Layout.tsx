import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="dark:bg-darkBg dark:text-white min-h-screen">
      <nav className="flex justify-end gap-x-10 p-8">
        <Link href={`/`}>Home</Link>
        <Link href={`/about`}>About</Link>
        <Link href={`/works`}>Works</Link>
        <Link href={`/contact`}>Contact</Link>
      </nav>
      <div className="p-10 flex">
        <div>Links</div>
        <div className="max-w-[1200px] mx-auto">{children}</div>
        <div>Email</div>
      </div>
    </div>
  );
};

export default Layout;
