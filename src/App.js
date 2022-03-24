import "./App.css";
import MyNavbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";

// ./ <-- current folder

function App() {
  return (
    <div>
      <MyNavbar />
      <MyFooter />
    </div>
  );
}

export default App;
