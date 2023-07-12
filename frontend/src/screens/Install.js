import React from "react";
import Nav from "./../components/Nav";
import Footer from "./../components/Foot";

const Install = () => {
  return (
    <React.Fragment>
      <Nav />
      <div className="w-50% m-auto mt-8">
        <h1 className="text-3xl">installation:</h1>
        <div className="w-100% h-fit py-5 ">
          <p className="my-5 text-base">
            After you dawnload project files Click one extract here
          </p>

          <img
            src={require("../assets/Screenshot (55).png")}
            className="w-40% m-auto max-[600px]:w-60%"
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5">
          <p className="my-5 text-lg">Open Visual Studio Code (VScode)</p>
          <p className="my-5 text-lg">And choose open folder</p>
          <img
            width="100%"
            src={require("../assets/Screenshot (56).png")}
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5">
          <p className="my-5 text-lg">
            Choose project files and click select folder
          </p>
          <img
            width="100%"
            src={require("../assets/Screenshot (59).png")}
            alt=""
          />
        </div>
        <div className="w-100% h-fit py-5 ">
          <p className="my-5 text-lg">
            Finaly project folder will open succesfully
          </p>
          <img
            width="100%"
            src={require("../assets/Screenshot (60).png")}
            alt=""
          />
        </div>
      </div>
      <form className="w-50% m-auto my-8">
        <h2 className="text-2xl mb-4">send email to us if you get any error</h2>
          <div className="flex justify-between mb-5">
            <input className="w-80 h-10 pl-4" type="text" name="Name" placeholder="Full name" />
            <input className="w-80 h-10 pl-4" type="email" name="Wmail" placeholder="Email" />
          </div>
          <textarea className="w-100% h-60 p-4" name="Message" placeholder="Your proplem"></textarea>
          <button className="w-30% h-12 bg-blue-500 text-white font-bold" type="submit">
            Send
          </button>
      </form>
      <Footer />
    </React.Fragment>
  );
};

export default Install;
