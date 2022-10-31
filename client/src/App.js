import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <div
            className="container-fluid p-0 position-relative vh-100"
            id="app-container"
        >
            <Navbar />
            <Landing />

            <Footer />
        </div>
    );
}

export default App;
