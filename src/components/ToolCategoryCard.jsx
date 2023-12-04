import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCategoryCard = ({ title, body, onClickRoute }) => {
  const navigate = useNavigate();
  console.log(onClickRoute)
  const borderClass =
    title === "pdf tools"
      ? "border-blue-300 hover:border-red-300"
      : "border-red-300 hover:border-blue-300";

  const handleCLick = () => {
    navigate(`/${onClickRoute}`);
  };
  return (
    <div
      className={`w-[400px] max-mdlg:w-[350px] max-md:w-[400px] h-[200px] rounded-lg  border border-blue-300 px-6 py-4 text-center flex flex-col gap-4 hover:border-red-300 cursor-pointer overflow-hidden ${borderClass}`}
      onClick={() => handleCLick()}
    >
      <p className="text-[30px] font-bold">{title}</p>
      <p className="">{body}</p>
    </div>
  );
};

export default ToolCategoryCard;
