import React from "react";
import { SlDocs } from "react-icons/sl";

const FileInput = () => {
  return (
    <div className="relative bg-orange-300 h-[300px] w-[600px]">
      <input
        type="file"
        id="fileInput"
        className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer"
      />
      <label
        htmlFor="fileInput"
        className="cursor-pointer bg-white  px-4 py-3 absolute top-1/2 left-1/2 transform translate-x-[-50%] translate-y-[-50%] flex items-center gap-3 text-lg"
      >
        <SlDocs />
        Choose File
      </label>
      <button>Upload File</button>
    </div>
  );
};

export default FileInput;
