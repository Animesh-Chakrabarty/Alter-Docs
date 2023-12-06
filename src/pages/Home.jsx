import React from "react";
import { homePageList } from "../utils/constant";
import ToolCategoryCard from "../components/ToolCategoryCard";
import heroImg from "../assets/heroImg.png";
const Home = () => {
  return (
    <main className="mt-12 flex flex-col ">
      {/* Top Section */}
      <section className="flex max-md:flex-col justify-center items-center gap-5 ">
        {homePageList.map((item) => (
          <ToolCategoryCard
            key={item.title}
            title={item.title}
            body={item.body}
            onClickRoute={item.onClickRoute}
          />
        ))}
      </section>
      {/* Bottom Section */}
      <section className="text-center mt-2 flex  justify-center items-center gap-[100px] px-10 ">
        {/* Tagline & button */}
        <div className="text-left ">
          <p className="text-[30px] font-robotoSlab font-semibold">
            <span className="text-[#DB6846] font-bold text-[36px]">
              AlterDoc
            </span>{" "}
            - Your Destination <br /> for Effortless PDF and Image <br />
            Transformation , Editing and <br /> Enhancement
          </p>
          <button className="border border-blue-400 text-blue-700 mt-5 px-4 py-2 text-[17px] font-robotoSlab hover:bg-blue-400 hover:text-white">
            View all tools
          </button>
        </div>
        {/* Image */}
        <div>
          <img src={heroImg} alt="" className="h-[500px]" />
        </div>
      </section>
    </main>
  );
};

export default Home;
