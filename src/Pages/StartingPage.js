import React from "react";
import ProjectDiv from "../Components/ProjectDiv";

let infoArr = [
  {
    key: 1,
    link: "/Beginner",
    title: "Beginner Level",
  },
  {
    key: 2,
    link: "/Adept",
    title: "Adept Level",
  },
  {
    key: 3,
    link: "/Expert",
    title: "Expert Level",
  },
];
const StartingPage = () => {
  return (
    <>
      <ProjectDiv info={infoArr}></ProjectDiv>
    </>
  );
};

export default StartingPage;
