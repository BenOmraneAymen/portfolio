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
        <Reveal
          delay="0.125"
          hidden={{ opacity: 0, x: -400 }}
          visible={{ opacity: 1, x: 0 }}
        >
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
        </Reveal>
        <Reveal
          delay="0.125"
          hidden={{ opacity: 0, x: 400 }}
          visible={{ opacity: 1, x: 0 }}
        >
          <SkillCard
            title={"Backend Development"}
            skills={["Node js", "Django", "Nest"]}
          />
        </Reveal>
        <Reveal
          delay="0.125"
          hidden={{ opacity: 0, x: -400 }}
          visible={{ opacity: 1, x: 0 }}
        >
          <SkillCard
            title={"Databases"}
            skills={["MySQL", "Postgres", "Sqlite", "MongoDB", "MariaDB"]}
          />
        </Reveal>
        <Reveal
          delay="0.125"
          hidden={{ opacity: 0, x: 400 }}
          visible={{ opacity: 1, x: 0 }}
        >
          <SkillCard title={"Devops"} skills={["Docker", "Docker compose"]} />
        </Reveal>
      </div>
    </div>
  );
}
