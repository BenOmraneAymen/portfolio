import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import movie from "../assets/images/projects/movie.webp";
import inventory from "../assets/images/projects/inventory.webp";
import blog from "../assets/images/projects/blog.webp";
import clediss from "../assets/images/projects/clediss.webp";

export default function Project() {
  return (
    <div
      className="flex flex-col justify-center items-center pt-20 "
      id="Projects"
    >
      <Reveal>
        <span className="text-md font-normal text-gray-500">
          Browse my Recent
        </span>
      </Reveal>
      <Reveal>
        <h1 className="text-5xl font-medium">Projects</h1>
      </Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-center gap-8 mx-8 my-8">
        <ProjectCard
          title="Inventory Project"
          skills={["React", "Material UI", "Node", "Express", "SqLite"]}
          descreption="An inventory app that allows you to manage, monitor and control your items. It also allows you to generate custom Reports."
          image={inventory}
          githubLink="https://github.com/BenOmraneAymen/inventory"
        />
        <ProjectCard
          title="Movie App"
          skills={["React", "CSS"]}
          descreption="An application that allows you to search for movies and get details about them."
          image={movie}
          githubLink="https://github.com/BenOmraneAymen/movie"
          link="https://m0viesf0ry0u.netlify.app/"
        />
        <ProjectCard
          title="Blog application"
          skills={["React", "Tailwind", "Node", "Express", "MongoDB"]}
          descreption="A reddit inspired app. a blog application that allows you to create, edit and delete posts. It also allows you to also like and comment on posts."
          image={blog}
          githubLink="https://github.com/BenOmraneAymen/blog"
        />
        <ProjectCard
          title="Project Management App"
          skills={[
            "React",
            "Typescript",
            "Tailwind",
            "Node",
            "Express",
            "MonogoDB",
          ]}
          descreption="A project management app that allows you to create, edit and delete projects and manage tasks assigned Employees and to monitor their status and to generate reports."
          image={clediss}
          githubLink=""
        />
      </div>
    </div>
  );
}
