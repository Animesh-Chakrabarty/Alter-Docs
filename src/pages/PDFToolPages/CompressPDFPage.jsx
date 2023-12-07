import React, { useEffect } from "react";
import FileInput from "../../components/FileInput";
import { useDispatch, useSelector } from "react-redux";
import useGetServerAndTaskID from "../../services/useGetServerAndTaskID";
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
  const token = useSelector((state) => state.authentication.data.token);

  // 1.Getting the server and task ID
  const { data, isLoading, isError, error, refetch } =
    useGetServerAndTaskID("compress");

  useEffect(() => {
    refetch();
  }, []);

  dispatch(setServer(data?.server));
  dispatch(setTaskID(data?.task));

  // 2.Upload the file on the server under the provided taskID

  
  return (
    <div className="flex justify-between">
      {/* FileInput  */}
      <div className="flex justify-center">
        <FileInput />
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
