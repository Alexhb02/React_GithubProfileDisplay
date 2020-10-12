import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubProject from "./Components/GithubProject.js";
function Project() {
  const url = `https://api.github.com/users/Alexhb02/starred`;
  const [project, setProject] = useState(null);
  let content = null;
  useEffect(() => {
    setProject(null);
    axios.get(url).then((response) => {
      setProject(response.data);
    });
  }, [url]);
  if (project) {
    content = project.map((project) => <GithubProject project={project} />);
    return content;
  }
  return <div></div>;
}

export default Project;
