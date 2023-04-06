import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/ivanovLogo.png"
            alt="logo"
            className="rounded-full"
            height={50}
            width={50}
          />
        </Link>
        <h1>Kristian Ivanov</h1>
      </div>
      <div className="flex gap-5">
        <p>HOME</p>
        <p>ARCHIVE</p>
        <p>ABOUT</p>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        icons
      </div>
    </header>
  );
};

export default Header;
