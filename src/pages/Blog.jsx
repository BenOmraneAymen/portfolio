import BlogCard from "../components/BlogCard";
import tsvsjs from "../assets/blog1/TsvsJs.webp";
import tailwind from "../assets/blog2/tailwind.webp";
import blog3 from "../assets/blog3/blog3.webp";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center overflow-y-scroll p-2 bg-neutral-50">
      <div className="flex flex-col items-center">
        <span className="text-xl font-normal text-gray-500">
          Welcome to my new
        </span>
        <h1 className="text-5xl font-medium mb-20">Blog</h1>
      </div>
      <div className="w-full lg:w-2/3 text-center text-base lg:text-lg">
        This is a place where I will share my thoughts and ideas about
        programming and software engineering in general. I will also share my
        experience and the lessons I learned from my journey as a software
        engineer. I hope you will find it useful.
        <br />
        <div className="text-3xl my-2">🚀 🧑‍💻 🚀</div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-medium my-10">Latest Posts</h1>
        <div className="w-screen px-14 flex justify-around lg:justify-between flex-wrap">
          <BlogCard
            title="JavaScript vs TypeScript"
            descreption="A comparison between JavaScript and TypeScript. The pros and cons of each one and when to use each one."
            image={tsvsjs}
            route={"/blog/1"}
            available={true}
          />
          <BlogCard
            title="Introduction Tailwind CSS"
            descreption="An open-source utility-first CSS framework for rapid UI development."
            image={tailwind}
            route={"/blog/2"}
            available={true}
          />
          <BlogCard
            title="Tailwind Tutorial"
            descreption="A tutorial on how to use Tailwind CSS to build a simple website."
            image={blog3}
            route={null}
            available={false}
          />
          <BlogCard
            title="React Native"
            descreption="A framework for building native apps using React and JavaScript."
            image={"https://miro.medium.com/v2/1*AjesIvV-kkwk6LLvNf1t4A.png"}
            route={null}
            available={false}
          />
        </div>
      </div>
      <ToastContainer limit={3} />
    </div>
  );
}
