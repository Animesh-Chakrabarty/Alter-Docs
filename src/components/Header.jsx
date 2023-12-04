import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[70px]">
      <img src={logo} alt="" className="h-10 max-lg:h-9" />
      <Button title="Github" />
    </header>
  );
};

export default Header;
