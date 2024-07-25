"use client";

import profile1 from "../../src/asset/profile-photo-one.jpg";
import Image from "next/image";

function About() {
  return (
    <div className='flex gap-16 py-10 px-14'>
      {/* py-10 px-14 */}
      <div className='h-auto md:h-[40rem] rounded-md flex flex-col items-start  relative overflow-hidden '>
        <div className=' text-green md:font-semibold text-[15px] font-mono md:text-[20px] font-medium'>
          <h1>Hi, my name is</h1>
        </div>
        <div className=' text-lightSlate text-[30px] font-semibold font-serif md:text-[50px]'>
          <h2>Srishti Gautam.</h2>
        </div>
        <div className='text-slate text-[40px] md:text-[65px] font-bold font-fontSans leading-none'>
          <h3>I build things for the web.</h3>
        </div>
        <p className='text-slate font-fontSans mt-6 text-[20px] max-w-[600px]'>
          I’m a software engineer specializing in building intuitive and
          user-friendly interfaces that provide an enjoyable and seamless user
          experience.
        </p>
        <a
          download=''
          href='pdf/Srishti-gautam-resume.pdf'
          className='text-green border border-green p-3 mt-5 rounded-md'
        >
          Download Resume<i className='uil uil-download-alt button__icon'></i>
        </a>
        {/*  
      // make responsive */}
      </div>
      <div>
        <Image
          src={profile1}
          alt='profile1'
          className='h-64 w-64 rounded-md object-cover flex items-center mt-8'
        />
      </div>
      {/* //Add gmail connect either on side of resume or in navbar */}
    </div>
  );
}

export default About;
