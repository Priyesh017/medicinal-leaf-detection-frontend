import { Route, Router, Routes } from "react-router-dom";
import DocumentationPage from "./components/DocumentationPage";
import LandingPage from "./LandingPage";
import About from "./components/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/documentation" element={<DocumentationPage />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
