import "../styles/ServicesPage.css";

function ServicesPage() {
    return (
        <div className="other-services-page">

            <div className="other-services-header">
                <h1>Other Services</h1>
                <p>
                    Explore additional services provided by the
                    Department of Motor Traffic.
                </p>
            </div>

            <section className="other-services-section">

                <h2>Services You May Need</h2>

                <p className="other-services-intro">
                    Find information and access services related to
                    vehicles, documents, number plates and other
                    motor traffic requirements.
                </p>

                <div className="other-services-grid">

                    <div className="other-service-tile">
                        <span>01</span>
                        <h3>Vehicle Information</h3>
                        <p>
                            Access information related to registered vehicles.
                        </p>
                        <button>View →</button>
                    </div>

                    <div className="other-service-tile">
                        <span>02</span>
                        <h3>Number Plates</h3>
                        <p>
                            Number plate information, replacement and
                            reservation services.
                        </p>
                        <button>View →</button>
                    </div>

                    <div className="other-service-tile">
                        <span>03</span>
                        <h3>Document Services</h3>
                        <p>
                            Access duplicate certificates and other
                            vehicle documents.
                        </p>
                        <button>View →</button>
                    </div>

                    <div className="other-service-tile">
                        <span>04</span>
                        <h3>Revenue Licence</h3>
                        <p>
                            Information about revenue licence issuance
                            and renewal.
                        </p>
                        <button>View →</button>
                    </div>

                    <div className="other-service-tile">
                        <span>05</span>
                        <h3>Vehicle Inspection</h3>
                        <p>
                            Vehicle inspection requirements and
                            related information.
                        </p>
                        <button>View →</button>
                    </div>

                    <div className="other-service-tile">
                        <span>06</span>
                        <h3>Forms & Documents</h3>
                        <p>
                            Find application forms and supporting documents.
                        </p>
                        <button>View →</button>
                    </div>

                </div>

            </section>

        </div>
    );
}

export default ServicesPage;