import React from "react";
import { ProjectCard } from "./ProjectCard";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
