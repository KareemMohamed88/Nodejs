import React from "react";
const Header = () => {
  return (
    <React.Fragment>
      <div className="bg-slate-200 pb-40">
        <div className="h-32 container m-auto flex justify-between items-center max-[639px]:px-5">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 max-[372px]:text-lg">clean theme</h1>
            <span className="text-xs">the most cheapest web templates</span>
          </div>
          <div className="flex  items-center">
              <label
                htmlFor="checkbox"
                className=" font-semibold mr-2 cursor-pointer"
              >
                Dark Mode
              </label>
              <span>
                <input
                  id="checkbox"
                  type="checkbox"
                />
              </span>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
