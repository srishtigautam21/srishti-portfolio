function About() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-start justify-center relative overflow-hidden py-10 px-14'>
      <div className=' text-green font-semibold text-[20px] font-mono'>
        <h1>Hi, my name is</h1>
      </div>
      <div className=' text-lightSlate text-[50px] font-semibold font-serif'>
        <h2>Srishti Gautam.</h2>
      </div>
      <div className='text-slate text-[65px] font-bold font-fontSans leading-none'>
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
      {/* //Add intro 
      // make responsive */}
    </div>
  );
}

export default About;
