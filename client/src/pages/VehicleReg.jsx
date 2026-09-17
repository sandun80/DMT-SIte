import { useState } from "react";
import "../styles/ServiceAccordion.css";

function Services() {

    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <section className="services" id="services">

            <h2>Everything You Need to Register Your Vehicle</h2>

            <div className="service-grid">

                <div className="service-card">

                    <span className="service-num">
                        Pillar 01
                    </span>

                    <h3>Vehicle Registration</h3>

                    <p>
                        Register a new vehicle, transfer ownership,
                        renew your revenue licence or reserve a number.
                    </p>


                    <div className="service-accordion">

                        {/* New Registration */}
                        <div className="accordion-item">

                            <button
                                className="accordion-button"
                                onClick={() =>
                                    toggleItem("registration")
                                }
                            >
                                <span>
                                    New registration &amp; transfer
                                </span>

                                <span className="accordion-icon">
                                    {openItem === "registration"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>


                           {openItem === "registration" && (
                            <div className="accordion-content">

                                <h4>First Vehicle Registration</h4>

                                <p>
                                    Use this service to register a vehicle for the first time
                                    with the Department of Motor Traffic (DMT).
                                </p>

                                <h5>Documents You May Need</h5>

                                <ul>
                                    <li>MTA-2 application form</li>
                                    <li>Copy of NIC, valid driving licence or passport</li>
                                    <li>Two certified photographs of the applicant</li>
                                    <li>Two photographs of the vehicle (front and side)</li>
                                    <li>Customs Registration for imported vehicles</li>
                                    <li>Customs Duty Assessment Notice</li>
                                    <li>Import permit, where applicable</li>
                                    <li>
                                        Other supporting documents depending on the vehicle
                                        and import category
                                    </li>
                                </ul>

                                <h5>How to Apply</h5>

                                <ol>
                                    <li>Obtain the MTA-2 application form.</li>
                                    <li>Complete the application with the required information.</li>
                                    <li>Prepare the required original documents and copies.</li>
                                    <li>
                                        Submit the application and supporting documents to
                                        the relevant DMT registration office.
                                    </li>
                                    <li>
                                        Present the vehicle for inspection when required.
                                    </li>
                                    <li>Pay the applicable registration and related fees.</li>
                                    <li>Complete the registration process and obtain the registration documents.</li>
                                </ol>

                                <h5>Before You Visit DMT</h5>

                                <ul>
                                    <li>Make sure the application form is completed correctly.</li>
                                    <li>Bring the required original documents and photocopies.</li>
                                    <li>Check the applicable fees before visiting.</li>
                                    <li>
                                        Check whether your vehicle requires additional
                                        customs, import or inspection documents.
                                    </li>
                                </ul>

                                <a href="/vehicle-registration">
                                    View complete registration services →
                                </a>

                            </div>
                        )}

                        </div>


                        {/* Revenue Licence */}
                        <div className="accordion-item">

                            <button
                                className="accordion-button"
                                onClick={() =>
                                    toggleItem("revenue")
                                }
                            >
                                <span>
                                    Revenue licence renewal
                                </span>

                                <span className="accordion-icon">
                                    {openItem === "revenue"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>


                            {openItem === "revenue" && (
                                <div className="accordion-content">

                                    <p>
                                        Vehicle owners can use this service
                                        to obtain information about revenue
                                        licence issuance and renewal.
                                    </p>

                                    <p>
                                        Check the required documents,
                                        applicable fees and renewal
                                        procedure before applying.
                                    </p>

                                    <a href="/revenue-licence">
                                        View revenue licence services →
                                    </a>

                                </div>
                            )}

                        </div>


                        {/* Number Plate */}
                        <div className="accordion-item">

                            <button
                                className="accordion-button"
                                onClick={() =>
                                    toggleItem("numberplate")
                                }
                            >
                                <span>
                                    Number plate reservation
                                </span>

                                <span className="accordion-icon">
                                    {openItem === "numberplate"
                                        ? "−"
                                        : "+"}
                                </span>
                            </button>


                            {openItem === "numberplate" && (
                                <div className="accordion-content">

                                    <p>
                                        Information about vehicle number
                                        plates and available number plate
                                        related services.
                                    </p>

                                    <p>
                                        Users can review the requirements
                                        and procedures before making a
                                        reservation.
                                    </p>

                                    <a href="/number-plates">
                                        View number plate services →
                                    </a>

                                </div>
                            )}

                        </div>

                    </div>


                    <a
                        className="service-link"
                        href="/vehiclehub"
                    >
                        Open hub →
                    </a>

                </div>

            </div>

        </section>
    );
}

export default Services;