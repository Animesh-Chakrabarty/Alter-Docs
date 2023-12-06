import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ToolCategoryCard = ({ title, body, onClickRoute }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [titleTemp, setTitleTemp] = useState(title);
  const [bodyTemp, setBodyTemp] = useState(body);
  console.log(onClickRoute);

  const handleCLick = () => {
    navigate(`/${onClickRoute}`);
  };

  const handleOnMouseEnter = () => {
    setIsHovered(true);
    setTitleTemp(`<div className='mt-8'>Explore <br/> ${title}</div>`);
    setBodyTemp("");
  };

  const handleOnMouseLeave = () => {
    setIsHovered(false);
    setTitleTemp(title);
    setBodyTemp(body);
  };
  return (
    <div
      className={`w-[400px] max-mdlg:w-[350px] max-md:w-[400px] h-[200px] rounded-lg  border border-blue-400 px-6 py-4 text-center flex flex-col gap-4 cursor-pointer overflow-hidden  ${
        isHovered &&
        "bg-blue-400 text-white border-none font-robotoSlab pt-9 transition-all duration-500"
      }`}
      onClick={() => handleCLick()}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <p
        className={`text-[30px] font-bold ${isHovered && "text-[40px] "}`}
        dangerouslySetInnerHTML={{ __html: titleTemp }}
      ></p>
      <p className="">{bodyTemp}</p>
    </div>
  );
};

export default ToolCategoryCard;
