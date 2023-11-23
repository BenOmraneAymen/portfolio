import BlogCard from "../components/BlogCard";
import { useEffect } from "react";

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
        <div className="w-screen flex justify-around flex-wrap">
          <BlogCard
            title="JavaScript vs TypeScript"
            descreption="A comparison between JavaScript and TypeScript. The pros and cons of each one and when to use each one."
            image={"https://svitla.com/uploads_converted/2/13982-javascript_vs_typescript.webp?1664279370"}
            route={"/blog/1"}
          />
          <BlogCard
            title="Tailwind CSS"
            descreption="An open-source utility-first CSS framework for rapid UI development."
            image="https://tailwindcss.com/_next/static/media/tailwindui-small@75.8bb955b2.jpg"
            route={"/blog/1"}
          />
          <BlogCard
            title="React Native"
            descreption="A framework for building native apps using React and JavaScript."
            image={"https://miro.medium.com/v2/1*AjesIvV-kkwk6LLvNf1t4A.png"}
            route={"/blog/1"}
          />
        </div>
      </div>
    </div>
  );
}
