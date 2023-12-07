import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";

const startProcess = async (serverFileName, server, taskID, token) => {
  if (serverFileName) {
    const processURL = `https://${server}/v1/process`;

    const filesToProcess = [
      {
        server_filename: serverFileName,
        filename: "FE Resume - 1 (151123 ).pdf", // Replace with the original filename
        rotate: 0, // Rotation angle if needed, 0 means no rotation
        password: "", // Password to open the file if required
      },
      // Add more files if needed using the same format
    ];

    const requestData = {
      task: taskID,
      tool: "compress", // Replace with the tool you want to use
      files: filesToProcess,
    };

    try {
      const response = await fetch(processURL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Files processed successfully:", responseData);
        // Handle response data accordingly
        // downloadFiles(server, taskID);
      } else {
        throw new Error("Failed to process files");
      }
    } catch (error) {
      console.error("Error processing files:", error);
      // Handle errors during file processing
    }
  } else {
    console.error("No server filename available");
    // Notify the user or handle the case where server filename is not available
  }
};

const useStartProcess = (serverFileName, server, taskID) => {
  const token = useSelector((state) => state.authentication.data.token);
  return useQuery({
    queryKey: ["start-process", token, server, taskID],
    queryFn: () => startProcess(serverFileName, server, taskID, token),
  });
};

export default useStartProcess;
