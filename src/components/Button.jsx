import React from "react";

const Button = ({ title }) => {
  return (
    <button className="bg-black px-5 rounded-[20px] text-white hover:bg-white hover:border  hover:text-black h-10">
      <p className=" font-semibold ">{title}</p>
    </button>
  );
};

export default Button;
