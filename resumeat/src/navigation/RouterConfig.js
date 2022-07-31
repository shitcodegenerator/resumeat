import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";
import Resume from "../pages/Resume/Resume";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
