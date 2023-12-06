import "../App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import CategorizedToolListPage from "../pages/CategorizedToolListPage";
import CompressPDFPage from "../pages/PDFToolPages/CompressPDFPage";

const App = () => {
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
