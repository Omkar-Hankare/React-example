import React from "react";
import ProjectDiv from "../Components/ProjectDiv";

let Beginner_ = [
  {
    key: 1,
    link: "/",
    title: "QR Project",
  },
];
const BeginnerProjectPage = () => {
  return (
    <div>
      <p>Here Lie Beginner Projects</p>
      <ProjectDiv info={Beginner_}></ProjectDiv>
      <a href="/">Go back</a>
    </div>
  );
};

export default BeginnerProjectPage;
