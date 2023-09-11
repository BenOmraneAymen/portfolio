import Reveal from "./Reveal";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div className="flex flex-col items-center pt-20" id="Skills">
      <Reveal>
        <span className="text-md font-normal text-gray-500">Observe My</span>
      </Reveal>
      <Reveal>
        <h2 className="text-5xl font-medium">Skills</h2>
      </Reveal>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mt-8">
        <SkillCard
          title={"Frontend Development"}
          skills={[
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
            "React",
            "Angular",
            "Material Ui",
            "Next",
            "Tailwind",
          ]}
        />
        <SkillCard
          title={"Backend Development"}
          skills={["Node js", "Django", "Nest"]}
        />
        <SkillCard
          title={"Databases"}
          skills={["MySQL", "Postgres", "Sqlite", "MongoDB", "MariaDB"]}
        />
        <SkillCard title={"Devops"} skills={["Docker", "Docker compose"]} />
      </div>
    </div>
  );
}
