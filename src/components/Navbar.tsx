"use client";
import React, { useState } from "react";
import { IconLinkedin, IconGithub, IconTwitter } from "../asset/svgIcons";
import Link from "next/link";

function Navbar() {
  return (
    //  top-10  mx-auto
    // border border-transparent dark:bg-black dark:border-white/[0.2] bg-white
    <div className='inset-x-0 w-full z-50   shadow-input flex justify-between items-center space-x-4 px-14 py-10 dark:bg-navy'>
      <h1 className='text-[25px] font-semibold text-white'>Srishti Gautam</h1>
      {/* {window.innerWidth < 730 ? ( */}
      {/* <p>small</p>
      ) : ( */}
      <div className='text-white flex items-center justify-around gap-7'>
        <Link href='https://www.linkedin.com/in/srishti-gautam-385861190/'>
          <div className='hover:text-purple-600'>
            <IconLinkedin height={30} width={30} />
          </div>
        </Link>
        <Link href='https://github.com/srishtigautam21'>
          <div className='hover:text-purple-600'>
            <IconGithub height={30} width={30} />
          </div>
        </Link>
        <Link href='https://x.com/SrishtiGautam99'>
          <div className='hover:text-purple-600'>
            <IconTwitter height={30} width={30} />
          </div>
        </Link>
      </div>
      {/* )} */}
    </div>
  );
}

export default Navbar;
