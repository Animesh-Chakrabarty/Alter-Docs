const downloadFile = async (server, taskID,token) => {
  const downloadURL = `https://${server}/v1/download/${taskID}?file_format=pdf`;

  try {
    const response = await fetch(downloadURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      // Check if the response contains a single file or a ZIP folder
      const disposition = response.headers.get("Content-Disposition");
      if (disposition && disposition.includes("attachment")) {
        console.log("pdf");
        // Single file - serve directly
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "output_file.pdf"; // Replace with the desired filename
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        console.log("zip");
        // ZIP folder - handle the download accordingly
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "output_files.pdf"; // Replace with the desired filename
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } else {
      throw new Error("Failed to download files");
    }
  } catch (error) {
    console.error("Error downloading files:", error);
  }
};

export default downloadFile;
