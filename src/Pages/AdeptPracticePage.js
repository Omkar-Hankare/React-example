import React from "react";
import ProjectDiv from "../Components/ProjectDiv";

let Beginner_ = [
  {
    key: 1,
    link: "/",
    title: "QR Project",
  },
];

const AdeptPracticePage = () => {
  return (
    <div>
      <p>Here lie Adept Level Projects</p>
      <ProjectDiv info={Beginner_}></ProjectDiv>
      <a href="/">Go back</a>
    </div>
  );
};

export default AdeptPracticePage;
