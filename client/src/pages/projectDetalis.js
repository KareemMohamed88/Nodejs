import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
const ProjectDetalis = () => {
  const API = "http://localhost:3001/api/v1";
  const [project, setProject] = useState({});
  const Params = useParams();
  useEffect(() => {
    Axios.get(`${API}/products/${Params.id}`).then((res) => {
      setProject(res.data);
    });
  }, [Params.id]);
  return (
    <React.Fragment>
      <div className="container shadow-md w-70% h-fit m-auto my-20">
          <div className="w-100% ">
            <img width="100%" src={project.cardImage} alt="" />
          </div>
          <div className="p-5 text-2xl">
            <h1>{project.title}</h1>
          </div>
          
          <div className="p-5 text-sm">
            <h1>{project.price}</h1>
          </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectDetalis;
