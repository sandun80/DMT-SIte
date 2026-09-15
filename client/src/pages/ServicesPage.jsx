import "../styles/ServicesPage.css";

function ServicesPage() {
    return (
        <div className="services-page">

            <section className="services-header">
                <div className="services-header-content">
                    <h1>Our Services</h1>
                    <p>
                        Department of Motor Traffic - Sri Lanka
                    </p>
                </div>
            </section>

            <section className="services-content">

                <div className="services-intro">
                    <h2>Services Provided by DMT</h2>

                    <p>
                        The Department of Motor Traffic provides a wide range
                        of services related to motor vehicles, driving
                        licences and other motor traffic requirements.
                    </p>
                </div>

                <div className="services-grid">

                    <div className="service-card">
                        <h3>Vehicle Registration</h3>
                        <p>
                            Services related to registering new and existing
                            motor vehicles.
                        </p>
                        <button>View Services →</button>
                    </div>

                    <div className="service-card">
                        <h3>Driving Licence</h3>
                        <p>
                            Apply for, renew and manage your driving licence.
                        </p>
                        <button>View Services →</button>
                    </div>

                    <div className="service-card">
                        <h3>Revenue Licence</h3>
                        <p>
                            Apply for and renew motor vehicle revenue licences.
                        </p>
                        <button>View Services →</button>
                    </div>

                    <div className="service-card">
                        <h3>Vehicle Information</h3>
                        <p>
                            Access information and services related to
                            registered vehicles.
                        </p>
                        <button>View Services →</button>
                    </div>

                    <div className="service-card">
                        <h3>Number Plates</h3>
                        <p>
                            Services related to vehicle number plates and
                            number plate reservations.
                        </p>
                        <button>View Services →</button>
                    </div>

                    <div className="service-card">
                        <h3>Document Services</h3>
                        <p>
                            Request replacements and other vehicle-related
                            documents.
                        </p>
                        <button>View Services →</button>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default ServicesPage;