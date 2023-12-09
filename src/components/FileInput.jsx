import React, { useState } from "react";
import { SlDocs } from "react-icons/sl";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import uploadFile from "../services/uploadFile";
import startProcess from "../services/startProcess";
import downloadFile from "../services/downloadFile";

const FileInput = ({ tool }) => {
  const token = useSelector((state) => state.authentication.data.token);
  const server = useSelector((state) => state.authentication.data.server);
  const taskID = useSelector((state) => state.authentication.data.taskID);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 1.Upload file
  const {
    data: uploadData,
    isLoading: uploadIsLoading,
    refetch: uploadRefetch,
  } = useQuery({
    queryKey: ["upload-file", token, server, taskID],
    queryFn: () => uploadFile(server, taskID, file, token),
  });

  const serverFileName = uploadData?.server_filename;

  // 2.Start process when serverFileName is available
  const { data: processData, isLoading: processIsLoading } = useQuery({
    queryKey: ["start-process", token, server, taskID],
    queryFn: () => startProcess(serverFileName, server, taskID, token),
    enabled: !!serverFileName,
  });

  const uploadFileLocal = () => {
    uploadRefetch();
  };

  console.log(processData);

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
      {uploadIsLoading || processIsLoading ? (
        <div>
          <p>Processing...</p>
        </div>
      ) : processData?.status === "TaskSuccess" ? (
        <button
          className="bg-blue-500 px-5 py-3 "
          onClick={() => downloadFile(server, taskID, token)}
        >
          Download file
        </button>
      ) : (
        <button className="bg-blue-500 px-5 py-3 " onClick={uploadFileLocal}>
          {tool} File
        </button>
      )}
    </div>
  );
};

export default FileInput;
