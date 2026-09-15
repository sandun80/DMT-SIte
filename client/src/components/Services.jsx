import "../styles/services.css";

function Services() {
    return (
        <section className="services" id="services">
            <h2>All services, one department</h2>

            <div className="service-grid">
                <div className="service-card">
                    <span className="service-num">Pillar 01</span>
                    <h3>Vehicle Registration</h3>
                    <p>
                        Register a new vehicle, transfer ownership, renew your
                        revenue licence or reserve a number.
                    </p>
                    <ul>
                        <li>New registration &amp; transfer</li>
                        <li>Revenue licence renewal</li>
                        <li>Number plate reservation</li>
                    </ul>
                    <a className="service-link" href="#vehicle">
                        Open hub →
                    </a>
                </div>

                <div className="service-card">
                    <span className="service-num">Pillar 02</span>
                    <h3>Driving Licence</h3>
                    <p>
                        Apply for a new licence, book a theory or practical
                        test, or renew your smart card.
                    </p>
                    <ul>
                        <li>Book a test or medical</li>
                        <li>Licence renewal</li>
                        <li>Class / category endorsement</li>
                    </ul>
                    <a className="service-link" href="#driving-licence">
                        Open hub →
                    </a>
                </div>

                <div className="service-card">
                    <span className="service-num">Pillar 03</span>
                    <h3>Vehicle Inspection</h3>
                    <p>
                        Book appointments, download forms and access other DMT
                        digital services.
                    </p>
                    <ul>
                        <li>Appointment booking</li>
                        <li>Forms &amp; downloads</li>
                        <li>Vehicle information lookup</li>
                    </ul>
                    <a className="service-link" href="#e-services">
                        Open hub →
                    </a>
                </div>

                <div className="service-card">
                    <span className="service-num">Pillar 04</span>
                    <h3>Other Services</h3>
                    <p>
                        Book appointments, download forms and access other DMT
                        digital services.
                    </p>
                    <ul>
                        <li>Appointment booking</li>
                        <li>Forms &amp; downloads</li>
                        <li>Vehicle information lookup</li>
                    </ul>
                    <a className="service-link" href="#e-services">
                        Open hub →
                    </a>
                </div>

                <div className="service-card">
                    <span className="service-num">Pillar 05</span>
                    <h3>e-Services</h3>
                    <p>
                        Book appointments, download forms and access other DMT
                        digital services.
                    </p>
                    <ul>
                        <li>Appointment booking</li>
                        <li>Forms &amp; downloads</li>
                        <li>Vehicle information lookup</li>
                    </ul>
                    <a className="service-link" href="#e-services">
                        Open hub →
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Services;
