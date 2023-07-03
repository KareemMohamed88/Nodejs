import React, { useEffect, useState } from "react";
import Axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = () => {
    Axios.get("http://localhost:3001/api/v1/products").then((res) => {
      setProducts(res.data);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <div className="container m-auto -mt-40 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 max-[639px]:px-5">
        {products.map((data, index) => {
          return (
            <div key={data._id} className=" bg-white shadow-md rounded-md overflow-hidden lg:h-60 md:h-60 max-[639px]:h-80 max-[532px]:h-60">
              <div className="h-40 overflow-hidden max-[639px]:h-60 max-[532px]:h-40 flex justify-center items-start">
                <a href={`/${data._id}`}>
                  <img height="10px" src={data.cardImage} alt="faild" />
                </a>
              </div>
              <p className="w-full h-20 flex justify-between px-5 m-auto items-center">
                <a href={`/${data._id}`}>
                  {data.title}
                </a>
                <h5>
                  price: <span>{data.price}</span>
                </h5>
              </p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default AllProducts;
