import React, { useState } from "react";
import { SlDocs } from "react-icons/sl";
import useUploadFiles from "../services/useUploadFiles";
import { useSelector } from "react-redux";
import useStartProcess from "../services/useStartProcess";

const FileInput = () => {
  const server = useSelector((state) => state.authentication.data.server);
  const taskID = useSelector((state) => state.authentication.data.taskID);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const { data, isLoading, isError, error, refetch } = useUploadFiles(
    server,
    taskID,
    file
  );

 

  const uploadFile = () => {
    refetch();
  };
  
  console.log(data);

  
  return (
    <div className="">
      <div className="relative bg-orange-300 h-[300px] w-[600px]">
        <input
          type="file"
          id="fileInput"
          className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-white  px-4 py-3 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex items-center gap-3 text-lg"
        >
          <SlDocs />
          Choose File
        </label>
      </div>
      <button className="bg-blue-500 px-5 py-3 " onClick={uploadFile}>
        Upload File
      </button>
    </div>
  );
};

export default FileInput;
