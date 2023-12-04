import React from "react";
import { homePageList } from "../utils/constant";
import ToolCategoryCard from "../components/ToolCategoryCard";
const Home = () => {
  return (
    <main className="mt-8">
      {/* Top Section */}
      <section className="flex max-md:flex-col justify-center items-center gap-5">
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
      <section>Bottom Section</section>
    </main>
  );
};

export default Home;
