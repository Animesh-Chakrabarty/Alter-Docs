import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import startProcess from "./useStartProcess";

const upLoad = async (server, taskID, file, token) => {
  if (file) {
    const uploadURL = `https://${server}/v1/upload`;

    const formData = new FormData();
    formData.append("task", taskID);
    formData.append("file", file);
    formData.append("chunk", 0); // Assuming it's a single file upload, not chunked
    formData.append("chunks", 1); // Assuming it's a single file upload, not chunked

    try {
      const response = await fetch(uploadURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("File uploaded successfully:", responseData);
        // Handle response data accordingly
        const data = startProcess(responseData?.server_filename, server, taskID, token);
        console.log(data)
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  } else {
    console.error("No file selected");
  }
};

const useUploadFiles = (server, taskID, file) => {
  const token = useSelector((state) => state.authentication.data.token);
  return useQuery({
    queryKey: ["upload-file", server, taskID],
    queryFn: () => upLoad(server, taskID, file, token),
  });
};

export default useUploadFiles;
