import "../styles/footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">
                <div className="footer-col">
                    <h3>DMT</h3>
                    <p>
                        Department of Motor Traffic, Sri Lanka. Vehicle
                        registration, driving licence and other services online.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#contact">Contact Us</a>
                </div>

                <div className="footer-col">
                    <h4>Services</h4>
                    <a href="#vehicle">Vehicle Registration</a>
                    <a href="#driving-licence">Driving Licence</a>
                    <a href="#e-services">e-Services</a>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>No. 341, Elvitigala Mawatha, Colombo 05</p>
                    <p>+94 11 269 4331</p>
                    <p>info@dmt.gov.lk</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Department of Motor Traffic.
                    All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
