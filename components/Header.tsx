import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <p className="text-2xl">KristianIvanov<span className="text-[#F7AB0A] text-3xl">Blog</span></p>
          {/* <Image
            src="/ivanovLogo.png"
            alt="logo"
            className="rounded-full"
            height={50}
            width={50}
          /> */}
        </Link>
        {/* <h1>Kristian Ivanov</h1> */}
      </div>
      <div className="flex gap-5">
        <p>HOME</p>
        <p>ARCHIVE</p>
        <p>ABOUT</p>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
       <Link href="/"
       className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
        Sign up to the Blog 
       </Link>
      </div>
    </header>
  );
};

export default Header;
