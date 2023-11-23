import checkmark from "../assets/logos/checkmark.png";
import Reveal from "./Reveal";

export default function SkillCard({ title, skills }) {
  return (
    
      <div className="flex flex-col items-center w-86 sm:w-96 md:w-140 lg:w-160 xl:w-140 h-96 p-4 rounded-xl border-2 border-black">
        <Reveal>
          <h2 className="text-xl md:text-3xl font-medium text-gray-500">{title}</h2>
        </Reveal>
        <div className="w-full grid grid-cols-2 gap-y-4 items-center px-8 mt-4">
          {skills.map((skill) => {
            return (
              <Reveal delay="0.3" >
                <div className="flex items-center justify-start">
                  <img
                    src={checkmark}
                    className="w-10 hover:rotate-y-360 transition-transform duration-1000 ease-out hover:ease-in "
                    alt=""
                  />
                  <span className="text-base md:text-xl font-medium text-black">
                    {skill}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
  );
}
