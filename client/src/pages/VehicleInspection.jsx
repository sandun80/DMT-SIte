import { useState } from "react";
import "../styles/ServiceAccordion.css";

function VehicleInspection() {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (item) => {
        setOpenItem(openItem === item ? null : item);
    };

    return (
        <section className="services" id="services">
            <h2>Everything You Need to Know About Vehicle Inspection</h2>

            <div className="service-grid">
                <div className="service-card">
                    <span className="service-num">Pillar 02</span>

                    <h3>Vehicle Inspection</h3>

                    <p>
                        Complete vehicle inspection requirements, document
                        checks, periodic fitness review and inspection
                        scheduling services.
                    </p>

                    <div className="service-accordion">
                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("annual")}
                            >
                                <span>Annual vehicle inspection</span>
                                <span className="accordion-icon">
                                    {openItem === "annual" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "annual" && (
                                <div className="accordion-content">
                                    <h4>Periodic Inspection</h4>

                                    <p>
                                        Vehicle owners must complete required
                                        inspections to confirm the vehicle
                                        remains roadworthy and meets official
                                        safety standards.
                                    </p>

                                    <h5>Documents You May Need</h5>

                                    <ul>
                                        <li>Vehicle registration book</li>
                                        <li>Revenue licence details</li>
                                        <li>
                                            Previous inspection report, if
                                            applicable
                                        </li>
                                        <li>
                                            Insurance and ownership documents
                                        </li>
                                    </ul>

                                    <h5>How to Apply</h5>

                                    <ol>
                                        <li>
                                            Check the inspection due date for
                                            your vehicle.
                                        </li>
                                        <li>
                                            Bring the vehicle and supporting
                                            documents to the inspection centre.
                                        </li>
                                        <li>
                                            Present the vehicle for mechanical
                                            and document review.
                                        </li>
                                        <li>
                                            Pay the applicable inspection fee.
                                        </li>
                                        <li>
                                            Receive the certificate or approval
                                            after the inspection.
                                        </li>
                                    </ol>

                                    <h5>Before You Visit</h5>

                                    <ul>
                                        <li>
                                            Ensure the vehicle is in a
                                            roadworthy condition.
                                        </li>
                                        <li>
                                            Check headlights, brakes, tyres and
                                            emissions requirements.
                                        </li>
                                        <li>
                                            Carry all relevant registration and
                                            ownership documents.
                                        </li>
                                    </ul>

                                    <a href="/vehicle-inspection">
                                        View complete inspection services →
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("preRegistration")}
                            >
                                <span>Pre-registration inspection</span>
                                <span className="accordion-icon">
                                    {openItem === "preRegistration" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "preRegistration" && (
                                <div className="accordion-content">
                                    <p>
                                        This inspection is required for vehicles
                                        being registered or processed through
                                        official DMT procedures.
                                    </p>

                                    <p>
                                        The inspection confirms compliance with
                                        safety and registration standards before
                                        final approval.
                                    </p>

                                    <a href="/vehicle-inspection">
                                        View pre-registration inspection details
                                        →
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="accordion-item">
                            <button
                                className="accordion-button"
                                onClick={() => toggleItem("import")}
                            >
                                <span>Imported vehicle inspection</span>
                                <span className="accordion-icon">
                                    {openItem === "import" ? "−" : "+"}
                                </span>
                            </button>

                            {openItem === "import" && (
                                <div className="accordion-content">
                                    <p>
                                        Imported vehicles may require specialist
                                        inspection before registration,
                                        including document validation and
                                        technical checks.
                                    </p>

                                    <p>
                                        Applicants should be prepared with
                                        import documents, customs records and
                                        vehicle details.
                                    </p>

                                    <a href="/vehicle-inspection">
                                        View imported vehicle inspection steps →
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <a className="service-link" href="/vehicle-inspection">
                        Open inspection hub →
                    </a>
                </div>
            </div>
        </section>
    );
}

export default VehicleInspection;
