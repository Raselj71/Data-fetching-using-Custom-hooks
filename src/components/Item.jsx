import React from "react";

function Item(props) {
  const { id, title, price, description, category, image, rating } = props.data;

  return (
    <div className="bg-white w-[300px] h-[400px]">
      <div className="h-4/6 w-full p-5 border-y">
        <img className="h-full w-full" src={image} />
      </div>
      <div className="flex px-2 justify-between font-sans font-semibold">
        <h2 className="font-sans font-semibold ">{title}</h2>
        <h2>
          <sup>$</sup>
          {price}
        </h2>
      </div>
      <div className="px-2 py-2">
        <button className="ring-2 ring-gray-950 hover:bg-gray-950 hover:text-white font-medium rounded-full px-4 py-2 ">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
