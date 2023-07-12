import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Foot";
import ProductsList from "../projects/ProductsList";

const Home = () => {

  return (
    <React.Fragment>
      <Nav />
      <div className="bg-transparent w-100% h-96 flex items-center">
        <div className="container m-auto max-[780px]:w-90%">
          <div className="">
            <h1 className="mb-7 text-5xl max-[700px]:text-3xl max-[500px]:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">
              You always must fell attractive
            </h1>
            <p className="w-50% mb-7 max-[700px]:w-80% max-[500px]:w-80% max-[500px]:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur debitis voluptas vero consequuntur harum ducimus.
            </p>
            <section>
              <a
                className="py-1.5 px-5 mr-4 text-sm text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
                href="#learnmore"
              >
                Learn more
              </a>
              <a
                className="py-1.5 px-5 text-slate-700 underline hover:no-underline"
                href="/install"
              >
                Learn how to install
              </a>
            </section>
          </div>
        </div>
      </div>
      <ProductsList />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
