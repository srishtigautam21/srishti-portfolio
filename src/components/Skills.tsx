"use client";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";

function Skills() {
  return (
    <>
      <div className='text-green md:font-semibold text-[15px] font-mono md:text-[30px] font-medium text-center mb-4'>
        Skills
      </div>
      <div className='flex gap-3 items-center m-2 mt-2 justify-center'>
        <div className='flex flex-col gap-1 items-center'>
          <IoLogoJavascript color='yellow' size={30} />
          <div className='flex-semibold'>Javascript</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <FaReact color='#00baff' size={30} />
          <div className='flex-semibold'>React</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <SiTypescript color='#1976D2' size={30} />
          <div className='flex-semibold'>Typescript</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <RiNextjsFill size={30} />
          <div className='flex-semibold'>Next.js</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <RiTailwindCssFill size={30} color='#00b2ff' />
          <div className='flex-semibold'>Tailwind</div>
        </div>
        <div className='flex flex-col gap-1 items-center'>
          <SiAntdesign size={30} />
          <div className='flex-semibold'>AntD</div>
        </div>
      </div>
    </>
  );
}

export default Skills;
