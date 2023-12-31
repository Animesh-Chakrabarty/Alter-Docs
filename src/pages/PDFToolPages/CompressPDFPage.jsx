import React, { useEffect } from "react";
import FileInput from "../../components/FileInput";
import { useDispatch, useSelector } from "react-redux";
import getServerAndTaskID from "../../services/getServerAndTaskID";
import { setServer, setTaskID } from "../../features/authenticationSlice";

const compressPDFOptions = [
  {
    option: "Extreme Compression",
    value: "extreme",
  },
  {
    option: "Recommended Compression",
    value: "recommended",
  },
  {
    option: "Low Compression",
    value: "low",
  },
];

const CompressPDFPage = () => {
  const dispatch = useDispatch();

  // 1.Getting the server and task ID when user gets into "/compress-pdf" page 
  const { data, refetch } =
    getServerAndTaskID("compress");

  useEffect(() => {
    refetch();
  }, []);

  dispatch(setServer(data?.server));
  dispatch(setTaskID(data?.task));

  console.log(data)
    
  return (
    <div className="flex justify-between">
      {/* FileInput  */}
      <div className="flex justify-center">
        <FileInput tool="compress" />
      </div>
      {/* Options */}
      <div className="flex flex-col gap-5">
        {compressPDFOptions.map((option) => (
          <div key={option.value} className="bg-blue-500 text-white px-5 py-2 ">
            {option.option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompressPDFPage;
