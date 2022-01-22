import React from "react";
import ProjectDiv from "../Components/ProjectDiv";

let Beginner_ = [
  {
    key: 1,
    link: "/",
    title: "QR Project",
  },
];

const ExpertLevel = () => {
  return (
    <div>
      <p>Here Lie Expert Projects</p>
      <ProjectDiv info={Beginner_}></ProjectDiv>
      <a href="/">Go back</a>
    </div>
  );
};

export default ExpertLevel;
