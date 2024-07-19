function About() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-start justify-center relative overflow-hidden py-10 px-14 md:py-0 '>
      <div className=' text-green font-semibold text-[20px] font-mono'>
        <h1>Hi, my name is</h1>
      </div>
      <div className=' text-lightSlate text-[50px] font-semibold font-serif'>
        <h2>Srishti Gautam.</h2>
      </div>
      <div className='text-slate text-[70px] font-semibold font-[Montserrat] leading-none'>
        <h3>I build things for the web.</h3>
      </div>
      {/* //Add intro 
      // make responsive */}
    </div>
  );
}

export default About;
