import "./App.css";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <div
            className="container-fluid p-0 position-relative vh-100"
            id="app-container"
        >
            <div className="background-image">
                <Navbar />
                <Landing />
            </div>
        </div>
    );
}

export default App;
