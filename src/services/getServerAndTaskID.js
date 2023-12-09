import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const fetchServerAndTaskID = async (token, tool) => {
  const url = `https://api.ilovepdf.com/v1/start/${tool}`;

  console.log("log inside fetchfn : ", tool, token);
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const { server, task } = data;
      return { server, task };
    } else {
      throw new Error("Failed to retrieve server and task ID");
    }
  } catch (error) {
    console.error("Error getting server and task ID:", error);
    throw error;
  }
};

const useGetServerAndTaskID = (tool) => {
  const token = useSelector((state) => state.authentication.data.token);
  console.log(tool, token);
  return useQuery({
    queryKey: ["server-taskID", tool, token],
    queryFn: () => fetchServerAndTaskID(token, tool),
  });
};

export default useGetServerAndTaskID;
