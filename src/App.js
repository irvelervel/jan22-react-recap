import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

// ./ <-- current folder

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        {/* I want to render in here different components based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
