import "./App.css";
import Footer from "./Footer/Footer";
import Landing from "./LandingPage/Landing";
import Navbar from "./NavBar/Navbar";

function App() {
    return (
        <body
            className="container-fluid p-0 d-flex flex-column min-vh-100"
            id="app-container"
        >
            <Navbar />
            <Landing />

            <Footer />
        </body>
    );
}

export default App;
