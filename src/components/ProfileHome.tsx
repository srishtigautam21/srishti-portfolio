"use client";

import profile2 from "../asset/my-photo.jpg";
import Image from "next/image";
import useWindowDimemsions from "@/hooks/useWindowDimemsions"; //remove

function ProfileHome() {
  const windowDimensions = useWindowDimemsions();
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-between gap-16 py-10 px-14'>
      {/* py-10 px-14 */}
      {/* md:h-[40rem]  */}
      <div className='h-auto rounded-md flex flex-col items-start relative overflow-hidden '>
        {/* {
          windowDimensions.width < 700 ? <div></div> : <div></div>
        } */}
        <div className=' text-green md:font-semibold text-[15px] font-mono md:text-[18px] font-medium'>
          <h1>Hi, my name is</h1>
        </div>
        <div className=' text-lightSlate text-[30px] font-semibold font-serif md:text-[40px]'>
          <h2>Srishti Gautam.</h2>
        </div>
        <div className='text-slate text-[40px] md:text-[50px] font-bold font-fontSans leading-none'>
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
      <div className='border-2 border-green h-max md:mt-8 rounded-md p-2'>
        <Image
          src={profile2}
          alt='profile2'
          // max-h-64
          className='w-full h-64 max-h-64 max-w-64  object-cover flex items-center '
        />
      </div>
      {/* //Add gmail connect either on side of resume or in navbar */}
    </div>
  );
}

export default ProfileHome;
