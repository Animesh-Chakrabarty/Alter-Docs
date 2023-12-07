import "../App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import CategorizedToolListPage from "../pages/CategorizedToolListPage";
import CompressPDFPage from "../pages/PDFToolPages/CompressPDFPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../features/authenticationSlice";

const url = "https://api.ilovepdf.com/v1/auth";
const public_key =
  "project_public_a4d8542f02385707e5ff251de54cbab9_udeTD61ee39a41b38c5f4369a4ead3979f9b3";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const authenticate = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ public_key }),
        });

        if (response.ok) {
          const { token } = await response.json();
          return token;
        } else {
          throw new Error("Failed to authenticate");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        throw error;
      }
    };

    authenticate()
      .then((token) => {
        console.log("Obtained Token : ", token);
        dispatch(setToken(token));
      })
      .catch((error) => {
        console.error("Authentication failed : ", error);
      });
  }, []);

  return (
    <main>
      <div className="main overflow-hidden">
        <div className="gradient" />
      </div>
      <main className="h-[100vh] px-[12%] max-2xl:px-[10%] max-xl:px-[6%] ">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/:toolCategory"
              element={<CategorizedToolListPage />}
            />
            <Route path="/pdf-tools/:tool" element={<CompressPDFPage />} />
          </Routes>
        </main>
      </main>
    </main>
  );
};

export default App;
