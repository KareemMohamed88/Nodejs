import React, { useState } from "react";

const Categories = ({ filterByCategory }) => {
  const [categoryMenuIsActive, setCategoryMenuIsActive] = useState(false);
  const onFilter = (cate) => {
    filterByCategory(cate);
  };
  const handleOpencategoriesMenu = () => {
    setCategoryMenuIsActive((current) => !current);
  };
  return (
    <React.Fragment>
      <div className="container w-90% m-auto max-[900px]:hidden">
        <button
          className="py-1 px-6 bg-blue-400 text-white"
          onClick={() => onFilter("E-commerce")}
        >
          E-commerce
        </button>
        <button
          className="py-1 px-6 bg-blue-400 text-white"
          onClick={() => onFilter("Landing Page")}
        >
          Landing Page
        </button>
        <button
          className="py-1 px-6 bg-blue-400 text-white"
          onClick={() => onFilter("Html")}
        >
          Html
        </button>
        <button
          className="py-1 px-6 bg-blue-400 text-white"
          onClick={() => onFilter("Paid")}
        >
          Paid
        </button>
      </div>
      <div className="container m-auto w-90% min-[900px]:hidden">
        <button className="px-2.5 py-1.5 bg-white text-slate-800 text-sm font-bold rounded" type="submit" onClick={handleOpencategoriesMenu}>
          select category
        </button>
        <div
          className={
            categoryMenuIsActive
              ? "category-menu w-32 mt-2 h-fit bg-white rounded p-4"
              : "hidden"
          }
        >
          <button
            className="py-1 text-slate-800"
            onClick={() => onFilter("E-commerce")}
          >
            E-commerce
          </button>
          <button
            className="py-1 text-slate-800"
            onClick={() => onFilter("Landing Page")}
          >
            Landing Page
          </button>
          <button
            className="py-1 text-slate-800"
            onClick={() => onFilter("Html")}
          >
            Html
          </button>
          <br/>
          <button
            className="py-1 text-slate-800"
            onClick={() => onFilter("Paid")}
          >
            Paid
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Categories;
