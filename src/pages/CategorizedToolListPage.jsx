import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { pdfToolList } from "../utils/constant";
import { imgToolList } from "../utils/constant";
import ToolCard from "../components/ToolCard";

const CategorizedToolListPage = () => {
  const { toolCategory } = useParams();
  const navigate = useNavigate();

  const isPDF = toolCategory === "pdf-tools";

  const handlePDFToolClick = (params) => {
    navigate(`/pdf-tools/${params}`);
  };

  const handleIMGToolClick = () => {};

  return (
    <main className="px-20 flex flex-col gap-12 mt-4">
      {/* Heading */}
      <p className="text-5xl font-bold text-center">
        All <span className="text-orange-600">AlterDoc </span>
        {isPDF ? "PDF" : "Image"} Tools
      </p>
      {/* Tools List */}
      <div className="flex justify-center flex-wrap  gap-5">
        {isPDF
          ? pdfToolList.map((item) => (
              <ToolCard
                key={item.task}
                title={item.task}
                body={item.body}
                onClickRoute={item.onClickRoute}
                handleClick={(params) => handlePDFToolClick(params)}
              />
            ))
          : imgToolList.map((item) => (
              <ToolCard key={item.task} title={item.task} body={item.body} />
            ))}
      </div>
    </main>
  );
};

export default CategorizedToolListPage;
