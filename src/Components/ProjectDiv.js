import React from "react";
import Projects from "./Projects";

const ProjectDiv = (props) => {
  return (
    <div>
      {props.info.map((p) => (
        <Projects key={p.id} link={p.link} title={p.title} />
      ))}
    </div>
  );
};

export default ProjectDiv;
