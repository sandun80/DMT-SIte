import "../styles/home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="app">
            <main>
                <Hero />
                <Services />
            </main>
        </div>
    );
}

export default Home;
