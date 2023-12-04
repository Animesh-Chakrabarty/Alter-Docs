import "../App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import CategorizedToolList from "../pages/CategorizedToolList";
import FileUploadPage from "../pages/FileUploadPage";

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
            <Route path="/:toolCategory" element={<CategorizedToolList />} />
            <Route path="/pdf-tools/:tool" element={<FileUploadPage />} />
          </Routes>
        </main>
        <Footer />
      </main>
    </main>
  );
};

export default App;
