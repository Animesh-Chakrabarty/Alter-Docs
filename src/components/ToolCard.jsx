import React from "react";
import { useNavigate } from "react-router-dom";

const ToolCard = ({ title, body, onClickRoute, handleClick }) => {
  return (
    <div
      className="h-auto w-[300px] px-5 py-4 border border-blue-300 rounded-[10px] cursor-pointer font-sourceSans"
      onClick={() => handleClick(onClickRoute)}
    >
      <p className="font-semibold">{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default ToolCard;
