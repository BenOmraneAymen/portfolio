import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Reveal from "./Reveal";

export default function BlogCard({
  title,
  descreption,
  route,
  image,
  available,
}) {

  const notify = () =>{
    if(!available){
      toast.info("Coming Soon!!!");
    }
}
  return (
    <Reveal delay="0.125">
      <div className={!available ? "opacity-50" : ""} >
        <Link to={route}>
          <div className={!available ?"w-80 h-64 lg:w-96 lg:h-80 m-4 flex flex-col items-center rounded-xl border-2 border-gray-400 hover:shadow-md hover:shadow-gray-400 transition-shadow duration-500 ease-in-out cursor-pointer" :"w-80 h-64 lg:w-96 lg:h-80 m-4 flex flex-col items-center rounded-xl border-2 border-gray-400 hover:shadow-md hover:shadow-gray-400 transition-shadow duration-500 ease-in-out"} onClick={()=>notify()} >
            <Reveal>
              <img src={image} alt="" className="w-full rounded-t-lg " />
            </Reveal>
            <div className="w-full p-2">
              <div className="w-full flex items-center justify-between">
                <Reveal>
                  <span className="font-bold text-xl lg:text-2xl">{title}</span>
                </Reveal>
              </div>
              <Reveal>
                <span className="text-xs sm:text-sm lg:text-base text-center font-light text-gray-500 py-4">
                  {descreption}
                </span>
              </Reveal>
            </div>
          </div>
        </Link>
      </div>
    </Reveal>
  );
}
