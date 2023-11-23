import portrait from "../assets/images/side_portrait.webp";
import experience from "../assets/logos/experience.png";
import education from "../assets/logos/education.png";
import Reveal from "./Reveal";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center pt-20" id="About">
      <Reveal>
        <span className="text-md font-normal text-gray-500">
          Get to know more
        </span>
      </Reveal>
      <Reveal>
        <h1 className="text-5xl font-medium">About Me</h1>
      </Reveal>
      <div className="flex flex-col xl:flex-row  justify-around items-center my-10 ">
        <Reveal
          delay="0.125"
          hidden={{ opacity: 0, x: -400 }}
          visible={{ opacity: 1, x: 0 }}
        >
          <img
            src={portrait}
            alt=""
            className="w-80 h-80 md:w-96 md:h-96 rounded-2xl mb-4 "
          />
        </Reveal>
        <div className="flex flex-col items-center lg:ml-10 ">
          <div className="flex sm:flex-row flex-col justify-between items-center lg:mx-2">
            <Reveal delay="0.125">
              <div className="w-72 sm:w-80 md:w-86 h-44 px-2 py-8 sm:px-4 my-2 mr-0 sm:mr-1 rounded-xl border-2 border-black flex flex-col items-center">
                <img src={experience} className="w-10 h-10" />
                <Reveal>
                  <span className="text-black font-semibold">Experience</span>
                </Reveal>
                <ul>
                  <Reveal>
                    <li>2 years Mern Stack Development</li>
                  </Reveal>
                  <Reveal>
                    <li>1 year Web Instructor</li>
                  </Reveal>
                  <Reveal>
                    <li>AI Enthusiast</li>
                  </Reveal>
                </ul>
              </div>
            </Reveal>
            <Reveal delay="0.125">
              <div className="w-72 sm:w-80 md:w-86 h-44 px-2 py-8 sm:px-4 my-2 mr-0 sm:mr-1 rounded-xl border-2 border-black flex flex-col items-center">
                <img src={education} className="w-10 h-10" />
                <Reveal>
                  <span className="text-black font-semibold">Education</span>
                </Reveal>
                <ul>
                  <Reveal>
                    <li>High school degree in mathematics</li>
                  </Reveal>
                  <Reveal>
                    <li>Preparatory cycle in engineering</li>
                  </Reveal>
                  <Reveal>
                    <li>Engineering degree in computer science</li>
                  </Reveal>
                </ul>
              </div>
            </Reveal>
          </div>
          <Reveal delay="0.3">
            <div className="w-96 sm:w-160 md:w-200 pl-4 py-2">
              My name is Aymen Ben Omrane, I'm a Software Engineering Student
              and a Web Instructor in Microsoft Issat Sousse club in Tunisia. I
              am someone who's highly motivated, I always seek to improve myself
              every day and learn many things. I'm thirsty to learn any new
              technology related to the programming or web development field,
              and because I like to keep my horizon always open to new things.
              Therefore if you have any opportunity for me, never hesitate to
              contact me.
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
