import { Project } from "@/app/_data/project";
import React from "react";
import ProjectItem from "./ProjectItem";
import { Card, CardBody, CardHeader, Spacer } from "@nextui-org/react";

export default function ProjectList() {
  return (
    <div className="w-full min-w-0 flex flex-col justify-center gap-3 font-inter flex-shrink-0 rounded-lg dark:text-white ">
      <div className="ml-2 font-bold text-4xl font-dhurjati">
        Featured Projects
      </div>
      <div className="space-y-2">
        {Project.map((item) => (
          <ProjectItem
            key={item.title}
            projectTitle={item.title}
            projectDescription={item.description}
            projectGithubLink={item.githubLink}
            projectDemoLink={item.demoLink}
          />
        ))}
      </div>
    </div>
  );
}
