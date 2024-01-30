import React, { useState } from "react";
import PropsTypes from "prop-types";

function Header({ search }) {
  const [searchData, setsearchData] = useState("");
  return (
    <div>
      <nav className=" w-screen h-auto bg-cyan-600 px-28 py-3 flex justify-between items-center">
        <img
          className="rounded-full size-20 "
          src="https://static.vecteezy.com/system/resources/previews/006/547/185/original/creative-modern-abstract-ecommerce-logo-design-colorful-gradient-online-shopping-bag-logo-design-template-free-vector.jpg"
        />
        <div className="text-white flex font-bold text-2xl items-center">
          <ul className="flex gap-1">
            <li className="m-5">Home</li>
            <li className="m-5">About</li>
          </ul>

          <input
            value={searchData}
            onChange={(e) => {
              setsearchData(e.target.value);
              search(searchData);
            }}
            className="rounded-full text-black h-10 px-4 text-lg outline-none"
            placeholder="search here"
            type="text"
          />
        </div>

        {console.log(searchData)}
      </nav>
    </div>
  );
}
Header.PropsTypes = {
  search: PropsTypes.func,
};

export default Header;
