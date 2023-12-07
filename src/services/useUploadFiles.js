import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

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
      } else {
        throw new Error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle errors during file upload
    }
  } else {
    console.error("No file selected");
    // Notify the user to select a file
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
