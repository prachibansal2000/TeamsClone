import "./App.css";
import SignUp from "./Components/SignUp";
import Sidebar from "./Components/SideNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/NavbarHorizontal";
function App() {
  return (
    <div className="App">
      {/*<SignUp />*/}
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
