import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import AppointmentForm from "./components/AppointmentForm";
import { useState } from "react";

// ./ <-- current folder

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <BrowserRouter>
      <div>
        <MyNavbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {/* I want to render in here different components based on the URL */}
        <Routes>
          <Route path="/" element={<HomePage searchQuery={searchQuery} />} />
          <Route path="/new" element={<AppointmentForm />} />ù
          {/* /details/stefano */}
          <Route path="/details/:appointmentId" element={<AppointmentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
