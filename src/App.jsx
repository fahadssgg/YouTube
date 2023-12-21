import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ViewPage from "./Pages/ViewPage";
// import DetalsView from "./Pages/DetalsView";
import Eroorrs from "./Pages/Eroorrs";
import Login from "./Pages/Login";
import Navpar from "./components/Navpar";

function App() {
  return (
    <>
      <Navpar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ViewPage" element={<ViewPage />} /> */}
        <Route path="/ViewPage/:id" element={<ViewPage />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/ViewPage/:id" element={<DetalsView />} /> */}
        <Route path="*" element={<Eroorrs />} />
      </Routes>
    </>
  );
}

export default App;
