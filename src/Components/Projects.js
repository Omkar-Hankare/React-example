import React from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div>
      <Link to={props.link}>{props.title}</Link>
      <Outlet />
    </div>
  );
};

export default Projects;
