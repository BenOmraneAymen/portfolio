import DefaultDropdown from "./dropDown";
import Reveal from "./Reveal";

export default function Navbar() {
  return (
    <div className="w-screen h-20 fixed top-0 left-0 right-0 flex flex-row justify-between items-center z-50 px-8 md:px-20 lg:px-40 bg-white bg-opacity-50 backdrop-blur-sm">
      <Reveal>
        <span className="text-xl font-medium  md:text-2xl hover:cursor-pointer">
          <a href="#Hero">Aymen Ben Omrane</a>
        </span>
      </Reveal>
      <div className="w-72 md:w-96 xl:w-1/3 md:flex justify-between hidden ">
        <Reveal>
          <span className="text-base lg:text-lg font-normal hover:text-primary hover:cursor-pointer">
            <a href="#About">About</a>
          </span>
        </Reveal>
        <Reveal>
          <span className="text-base lg:text-lg font-normal hover:text-primary hover:cursor-pointer">
            <a href="#Skills">Skills</a>
          </span>
        </Reveal>
        <Reveal>
          <span className="text-base lg:text-lg font-normal hover:text-primary hover:cursor-pointer">
            <a href="#Projects">Projects</a>
          </span>
        </Reveal>
        <Reveal>
          <span className="text-base lg:text-lg font-normal hover:text-primary hover:cursor-pointer">
            <a href="#Contact">Contact</a>
          </span>
        </Reveal>
      </div>
      <div className=" block md:hidden">
        <DefaultDropdown />
      </div>
    </div>
  );
}
