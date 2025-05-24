import About from "@/components/About";
import ProfileHome from "@/components/ProfileHome";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    //
    <main className='text-white  min-h-screen  antialiased'>
      {/* <div>Hello In 1st page nsvndksvkvlkd bcjkdsnks c jsbcjds</div> */}
      <ProfileHome />
      <About />
      <Skills />
    </main>
  );
}
