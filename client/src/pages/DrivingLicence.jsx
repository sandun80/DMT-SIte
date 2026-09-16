import { useState } from "react";
import "../styles/ServiceAccordion.css";

function DrivingLicence() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <section className="services" id="services">
            <h2>Everything You Need to Know About Driving Licences</h2>

            <div className="service-grid">
                <div className="service-card">
                    <span className="service-num">Pillar 03</span>

                    <h3>Driving Licence</h3>

                    <p>
                        Apply for a new driving licence, renew an existing
                        licence, replace a lost licence and review eligibility
                        requirements.
                    </p>

                    <div className="service-accordion">
                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("newLicence")}
                            >
                                <span>New driving licence application</span>
                                <span className="accordion-icon">
                                    {openItem === "newLicence" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "newLicence" && (
                                <div className="accordion-content">
                                    <h4>First Issue of Driving Licence</h4>

                                    <p>
                                        Use this service to apply for a new
                                        driving licence for a motor vehicle
                                        category approved by the DMT.
                                    </p>

                                    <h5>Documents You May Need</h5>

                                    <ul>
                                        <li>
                                            Application form for learner or
                                            driving licence
                                        </li>
                                        <li>
                                            National Identity Card or valid
                                            passport
                                        </li>
                                        <li>
                                            Medical report, where applicable
                                        </li>
                                        <li>
                                            Original old licence or supporting
                                            records, if relevant
                                        </li>
                                        <li>
                                            Recent photograph and other
                                            supporting documents
                                        </li>
                                    </ul>

                                    <h5>How to Apply</h5>

                                    <ol>
                                        <li>
                                            Complete the application form
                                            correctly.
                                        </li>
                                        <li>
                                            Submit the necessary supporting
                                            documents.
                                        </li>
                                        <li>
                                            Pay the required application and
                                            processing fees.
                                        </li>
                                        <li>
                                            Attend the required test or
                                            verification process.
                                        </li>
                                        <li>
                                            Receive the approved licence after
                                            final processing.
                                        </li>
                                    </ol>

                                    <h5>Before You Visit</h5>

                                    <ul>
                                        <li>
                                            Check the class of licence you are
                                            applying for.
                                        </li>
                                        <li>
                                            Carry all required original
                                            documents and copies.
                                        </li>
                                        <li>
                                            Review any medical or eligibility
                                            requirements.
                                        </li>
                                    </ul>

                                    <a href="/driving-licence">
                                        View complete licence services →
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("renewal")}
                            >
                                <span>Licence renewal</span>
                                <span className="accordion-icon">
                                    {openItem === "renewal" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "renewal" && (
                                <div className="accordion-content">
                                    <p>
                                        Drivers can renew licences before expiry
                                        to continue using their valid licence
                                        without disruption.
                                    </p>

                                    <p>
                                        Renewal applications should include the
                                        current licence, identity documents and
                                        payment for the renewal fee.
                                    </p>

                                    <a href="/driving-licence">
                                        View renewal information →
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("replacement")}
                            >
                                <span>Lost or damaged licence</span>
                                <span className="accordion-icon">
                                    {openItem === "replacement" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "replacement" && (
                                <div className="accordion-content">
                                    <p>
                                        If your licence is lost, damaged or
                                        unusable, you can apply for a
                                        replacement by submitting the required
                                        documents and applicable fees.
                                    </p>

                                    <p>
                                        Support documents may include NIC,
                                        police report where required, and the
                                        original licence details if available.
                                    </p>

                                    <a href="/driving-licence">
                                        View replacement licence guidance →
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <a className="service-link" href="/driving-licence">
                        Open licence hub →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default DrivingLicence;
