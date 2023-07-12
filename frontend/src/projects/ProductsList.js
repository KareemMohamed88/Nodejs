import React, { useState, useEffect } from "react";
import Axios from "axios";
import Categories from './../components/categories';
const ProductsList = () => {
  const [product, setProducts] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(6);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/v1/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleMoreProductsPerPage = () => {
    setProductsPerPage((productsPerPage) => productsPerPage + 6);
  };

  const filterByCategory = (cate) => {
    const newArr = product.filter((item) => item.title === cate)
    setProducts(newArr)
    console.log(newArr)
  }

  return (
    <React.Fragment>
      <Categories filterByCategory={filterByCategory}/>
      <div
        id="learnmore"
        className="container m-auto my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 max-[639px]:px-5"
      >
        {product.slice(0, productsPerPage).map((data) => {
          return (
            <div key={data._id} className="h-fit pb-3 bg-white overflow-hidden">
              <div className="h-fit">
                <a href={`/project-detalis/${data._id}`}>
                  <img height="10px" src={data.cardImage} alt="faild" />
                </a>
              </div>
              <div className="px-5 py-2">
                <a href={`/project-detalis/${data._id}`}>{data.title}</a>
              </div>
              <div className="px-5 py-2 flex justify-between items-center">
                <div className="text-slate-400">
                  price: <span>{data.price}$</span>
                </div>
                <a
                  className="py-1.5 px-5 text-sm text-blue-400 border-2 border-blue-400 hover:bg-blue-400 hover:text-white"
                  href={`/project-detalis/${data._id}`}
                >
                  Show detalis
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {product.length > 6 ? (
        <div className="flex justify-center mb-8">
          <button
            onClick={handleMoreProductsPerPage}
            className="py-1.5 px-6 bg-blue-400 font-bold text-white cursor-pointer"
          >
            Show more
          </button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ProductsList;
