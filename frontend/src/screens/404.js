import React from "react";
import Nav from "../components/Nav";
import Foot from "../components/Foot";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="not-found flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-700 mb-5">404 page not found</h1>
          <Link className="px-7 py-2 bg-slate-900 text-white rounded-sm text-sm" to="/">return to home page</Link>
        </div>
      </div>
      <Foot />
    </React.Fragment>
  );
};

export default Error;
