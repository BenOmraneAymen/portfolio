import portrait from "../assets/images/my_portrait.webp";
import github from "../assets/logos/github.png";
import linkedin from "../assets/logos/linkedin.png";
import { DotGrid } from "./dotgrid/DotGrid";
import Reveal from "./Reveal";
import TypeWriter from "./typeWriter";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <div className="w-screen">
      <div
        className="z-10 flex flex-col md:flex-row w-full overflow-x-hidden py-16 lg:py-36 items-center justify-center"
        id="Hero"
      >
        <Reveal>
          <img
            src={portrait}
            className="relative z-10 md:w-96 md:h-96 w-72 h-72 rounded-full  mt-12 mb-8 md:mt-4 md:mb-4"
          />
        </Reveal>
        <div className="flex flex-col justify-center items-center mx-4 lg:mx-20  ">
          <Reveal>
            <span className="z-10 text-md font-normal mb-2 mt-12 md:mt-4">
              Hello, I am
            </span>
          </Reveal>
          <Reveal>
            <span className="z-10 text-xl  md:text-4xl font-medium my-2 ">
              Aymen Ben Omrane
            </span>
          </Reveal>
          <Reveal>
            <span className="z-10 text-base  md:text-xl font-normal my-2">
              <TypeWriter
                text={[
                  "FullStack Developer",
                  "Web Instructor",
                  "Engineering Student",
                ]}
                delay={150}
              />
            </span>
          </Reveal>
          <Reveal>
            <div className="flex my-2">
              <a
                className={`z-10 px-6 py-2 mx-2 rounded-md bg-white hover:bg-black hover:text-white text-black font-medium border-2 border-black transition-colors duration-500 ease-in-out`}
                href={resume}
                download={true}
              >
                Resume
              </a>
              <a
                href="#Contact"
                className={`z-10 px-6 py-2 mx-2 rounded-md hover:bg-primary hover:border-primary bg-blue-700 text-white font-medium border-2 border-blue-700 transition-colors duration-500 ease-in-out`}
              >
                Contact
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div className="z-30 flex m-2">
              <a
                href="https://github.com/BenOmraneAymen"
                className="m-2"
                target="_blank"
              >
                <img
                  src={github}
                  className="relative z-10 w-9 h-9 cursor-pointer "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aymen-ben-omrane-1b1b3a1b2/"
                className="m-2"
                target="_blank"
              >
                <img
                  src={linkedin}
                  className="relative z-10 w-9 h-9 cursor-pointer "
                />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <DotGrid />
    </div>
  );
}
