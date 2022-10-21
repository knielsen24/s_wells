import "./App.css";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <div
            className="container-fluid p-0 position-relative vh-100"
            id="app-container"
        >
            <div className="background-image"></div>
            <Navbar />
        </div>
    );
}

export default App;
