// components
import { Navbar } from "./components";
import { Hero } from "./components";
import { About } from "./components";
import { Education } from "./components";
import { Experience } from "./components";
import { Tech } from "./components";

export default function Home() {
  return (
      <div className = 'relative z-0 bg-primary'>
        <div className = 'bg-hero bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />  
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        {/* <Works /> */}
        {/* <Hobby /> */}
        {/* <Feedbacks /> */}
        {/* <div className = 'relative z-0'>
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
  );
}
