import React from "react";

function About() {
  return (
    <>
      <div className=' text-green md:font-semibold text-[15px] font-mono md:text-[30px] font-medium text-center'>
        About
      </div>
      <div className='flex flex-col-reverse md:flex-row md:justify-between gap-16 pt-4 pb-10 px-14 text-slate font-fontSans text-[20px]'>
        I am a frontend developer who is a artist at core and thats why I like
        UI to be pixel perfect. I am Btech in Computer Science and Engineering
        but my interest in coding and frontend dev started when I was in my 6th
        semester. And after that journey has been filled with a lot ups and
        downs but one thing was consistent Learnings. Currently I am getting
        into backend development as well bit by bit.
      </div>
    </>
  );
}

export default About;
