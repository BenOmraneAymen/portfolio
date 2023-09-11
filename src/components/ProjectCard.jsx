import github from "../assets/logos/github.png";
import Reveal from "./Reveal";

export default function ProjectCard({
  title,
  descreption,
  skills,
  githubLink,
  link,
  image,
}) {
  function formulate() {
    let str = "";
    for (let i = 0; i < skills.length; i++) {
      str += skills[i] + " - ";
    }
    str = str.slice(0, str.length - 2);
    return str;
  }
  return (
    <Reveal delay="0.125">
      <div className="w-72 h-96 sm:w-110 sm:h-120 lg:w-100 lg:h-110 flex flex-col rounded-xl  border-2 border-gray-400">
        <div className="w-full flex items-end justify-center h-2/5 sm:h-1/2 bg-primary bg-opacity-20 rounded-t-lg border-b-2 border-gray-400 overflow-hidden">
          <Reveal>
            <img
              src={image}
              alt=""
              className="w-56 h-32 hover:w-60 hover:h-36  sm:w-72 sm:h-44 rounded-t-lg  hover:rounded-t-lg hover:sm:w-80 hover:sm:h-48 transition-all duration-500 ease-in-out "
            />
          </Reveal>
        </div>
        <div className="w-full h-3/5 sm:h-1/2 py-2 px-4 flex flex-col rounded-b-lg">
          <div className="w-full flex items-center justify-between">
            <Reveal>
              <a href={link} target='_blank'>
                <span className="font-bold text-2xl">{title}</span>
              </a>
            </Reveal>
            <Reveal>
              {githubLink &&
                <a href={githubLink} target="_blank" className="ml-2">
                <img
                  src={github}
                  alt=""
                  className="w-8 h-8 opacity-60 cursor-pointer"
                />
              </a>}
            </Reveal>
          </div>
          <Reveal>
            <span className="text-md md:text-base font-light text-blue-800">
              {formulate(skills)}
            </span>
          </Reveal>
          <Reveal>
            <span className="text-xs sm:text-md md:text-base font-light text-gray-500 py-4">
              {descreption}
            </span>
          </Reveal>
        </div>
      </div>
    </Reveal>
  );
}
