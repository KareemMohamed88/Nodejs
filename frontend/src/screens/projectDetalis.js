import React, { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Nav from "./../components/Nav";
import Foot from './../components/Foot';
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
      <Nav />
      <div className="grid grid-cols-3 px-24 max-[1024px]:grid-cols-1 max-[1024px]:p-0">
        <div className="col-span-3 container max-[1024px]:m-auto max-[1024px]:col-span-1 w-90%">
          <div className="py-5 text-4xl max-[550px]:text-3xl max-[470px]:text-2xl max-[470px]:py-2 max-[385px]:text-xl max-[310px]:text-lg">
            <h1>{project.title}</h1>
          </div>

          <div className="py-5 text-xl max-[470px]:py-2 max-[385px]:text-sm">
            <h1>Price: {project.price}</h1>
          </div>
        </div>
        <div className="col-span-2 container w-90% max-[1024px]:m-auto max-[1024px]:col-span-1">
          <div className="w-100% border bg-white">
            <img width="100%" src={project.cardImage} alt="" />
            <div className="m-auto w-fit my-5 ">
              <a
                className=" shadow-lg py-1 px-6 bg-blue-300 text-white font-bold rounded"
                href="#w"
              >
                Live preview
              </a>
            </div>
          </div>
          <div className="min-[850px]:w-40% min-[650px]:w-80% min-[49px]:w-90% m-auto py-10">
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AS3cX3fHzm-mi-s01ij9d8u7YXOZMy30cuquiAj8xvtU4u23NAa0k-FJZiZRRpHc5-uT1WZLtuW4XNMj",
              }}
            >
              <PayPalButtons
                createOrder={(data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        amount: {
                          value: "100.00",
                        },
                      },
                    ],
                  });
                }}
                onApprove={(data, actions) => {
                  return actions.order.capture().then((details) => {
                    const name = details.payer.name.given_name;
                    alert(`Transaction completed by ${name}`);
                  });
                }}
              />
            </PayPalScriptProvider>
          </div>
          <h1 className="text-2xl pb-2">summary:</h1>
          <p className="text-sm pt-2">{project.summary}</p>
          <div className="h-0.5 w-90% bg-gray-300 m-auto my-5"></div>
          
        </div>
        <div className="h-fit container w-90% bg-slate-100 col-span-1 max-[1024px]:m-auto">
          <h2 className="p-5 text-2xl max-[470px]:py-2 max-[385px]:text-xl max-[310px]:text-lg">
            {project.title}
          </h2>
          <p className="py-3 px-5 text-lg text-slate-700">{project.price}</p>
          <p className="px-5 py-2 text-blue-400 ">
            <span className="font-bold text-slate-700">Technologies:</span> {""}
            {project.tags}
          </p>
          <div className="w-fit m-auto py-5">
            <a
              className=" shadow-lg py-2 px-28 bg-blue-300 text-white font-bold rounded max-[400px]:px-24 max-[340px]:px-20"
              href={project.livePreviewLink}
            >
              Live preview
            </a>
          </div>
          <div className="w-fit m-auto py-5">
            <a
              className="shadow-lg py-2 px-28 bg-blue-300 text-white font-bold rounded max-[400px]:px-24 max-[340px]:px-20"
              href={project.getSourceCode}
            >
              Source code
            </a>
          </div>
        </div>
      </div>
      <Foot/>
      
    </React.Fragment>
  );
};

export default ProjectDetalis;
