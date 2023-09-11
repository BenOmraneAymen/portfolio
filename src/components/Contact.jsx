import email from "../assets/logos/email.png";
import linkedin from "../assets/logos/linkedin.png";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <div>
      <div
        className="w-full h-screen-1/2 flex flex-col justify-center items-center my-24"
        id="Contact"
      >
        <Reveal>
          <span className="text-md font-normal text-gray-500">
            Get in Touch
          </span>
        </Reveal>
        <Reveal>
          <h1 className="text-5xl font-medium mb-20">Contact Me</h1>
        </Reveal>
        <Reveal delay="0.125">
          <div className="w-86 md:w-110 h-24 flex justify-around items-center rounded-3xl border-2 border-gray-600 bg-gray-100 ">
            <Reveal>
              <div
                className="flex items-center cursor-pointer "
                onClick={() => {
                  navigator.clipboard.writeText("aymenbenomrane1@gmail.com");
                  toast.info("Email copied to clipboard",{
                    style:{backgroundColor:"#1e40af",color:"#fff"}
                  });
                  
                }}
              >
                <img src={email} alt="" className="w-6 h-6 md:w-8 md:h-8 mx-1" />
                <span className="text-sm  md:text-base" >aymenbenomrane1@gmail.com</span>
              </div>
            </Reveal>
            <Reveal>
              <a
                href="https://www.linkedin.com/in/aymen-ben-omrane-1b1b3a1b2/"
                className="flex items-center"
              >
                <img src={linkedin} alt="" className="w-6 h-6 md:w-8 md:h-8 mx-1" />
                <span className="text-sm  md:text-base" >LinkedIn</span>
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <Reveal>
          <span className="text-xxs md:text-base font-normal text-gray-500 m-8">
            Copyright © 2023 Aymen Ben Omrane. All Rights Reserved
          </span>
        </Reveal>
      </div>
      <ToastContainer limit="3" theme="colored" />
    </div>
  );
}
