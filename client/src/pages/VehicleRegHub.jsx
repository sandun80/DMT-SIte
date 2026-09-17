import { useState } from "react";
import "../styles/VehicleRegHub.css";

function VehicleRegHub() {
    const [selectedForm, setSelectedForm] = useState(null);

    const formDetails = {
        mta2: {
            title: "MTA 2 - First Vehicle Registration",
        },
        "ownership-transfer": {
            title: "MTA 6 / MTA 8 - Transfer of Ownership",
            sections: [
                [
                    "Current Owner",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "New Owner",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle and Transfer Details",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Date of Change of Possession",
                    ],
                ],
            ],
            documents: [
                "Current Certificate of Registration",
                "Proof of Identity",
                "Transfer Documents",
            ],
        },
        "absolute-ownership": {
            title: "Absolute Ownership",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Engine Number",
                    ],
                ],
                [
                    "Ownership Details",
                    [
                        "Basis for Claim of Ownership",
                        "Date of Acquisition",
                        "Previous Owner Name",
                    ],
                ],
            ],
            documents: [
                "Certificate of Registration",
                "Proof of Identity",
                "Evidence of Ownership",
            ],
        },
        "mortgage-registration": {
            title: "MTA 3 - Hire-Purchase / Mortgage Registration",
            sections: [
                [
                    "Registered Owner",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Engine Number",
                    ],
                ],
                [
                    "Agreement Details",
                    [
                        "Lender or Finance Company",
                        "Agreement Number",
                        "Agreement Date",
                    ],
                ],
            ],
            documents: [
                "Certificate of Registration",
                "Hire-Purchase or Mortgage Agreement",
                "Proof of Identity",
            ],
        },
        cmt72: {
            title: "CMT 72 - Change of Vehicle Particulars",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Engine Number",
                    ],
                ],
                [
                    "Change Requested",
                    [
                        "Particular to be Changed",
                        "Current Recorded Detail",
                        "New Detail",
                    ],
                ],
            ],
            documents: [
                "Certificate of Registration",
                "Proof of Change",
                "Proof of Identity",
            ],
        },
        cmt65: {
            title: "CMT 65 - Duplicate Certificate of Registration",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Engine Number",
                    ],
                ],
                [
                    "Duplicate Certificate Details",
                    [
                        "Reason for Request",
                        "Date Certificate Was Lost or Damaged",
                        "Police Report Number (if applicable)",
                    ],
                ],
            ],
            documents: [
                "Proof of Identity",
                "Police Report (if applicable)",
                "Damaged Certificate (if applicable)",
            ],
        },
        "registration-after-death": {
            title: "MTA 5 / MTA 7 - Registration Following Death of Owner",
            sections: [
                [
                    "Deceased Owner",
                    ["Full Name", "NIC / Passport Number", "Date of Death"],
                ],
                [
                    "Applicant / Successor",
                    [
                        "Full Name",
                        "NIC / Passport Number",
                        "Relationship to Deceased",
                        "Address",
                    ],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Engine Number",
                    ],
                ],
            ],
            documents: [
                "Death Certificate",
                "Certificate of Registration",
                "Proof of Succession",
            ],
        },
        "new-number-plate": {
            title: "New Number Plate",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Contact Number"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Vehicle Type",
                    ],
                ],
                [
                    "Plate Requirement",
                    [
                        "Number of Plates Required",
                        "Plate Type",
                        "Collection Office",
                    ],
                ],
            ],
            documents: ["Certificate of Registration", "Proof of Identity"],
        },
        "replacement-number-plate": {
            title: "Replacement Number Plate",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Contact Number"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Vehicle Type",
                    ],
                ],
                [
                    "Replacement Details",
                    [
                        "Reason for Replacement",
                        "Number Plate Lost or Damaged",
                        "Police Report Number (if applicable)",
                    ],
                ],
            ],
            documents: [
                "Certificate of Registration",
                "Proof of Identity",
                "Police Report (if applicable)",
            ],
        },
        "change-province-number-plate": {
            title: "Change of Province / Number Plate",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Address"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Vehicle Type",
                    ],
                ],
                [
                    "Change Details",
                    [
                        "Current Province / Plate",
                        "Requested Province / Plate",
                        "Reason for Change",
                    ],
                ],
            ],
            documents: [
                "Certificate of Registration",
                "Proof of Identity",
                "Supporting Evidence",
            ],
        },
        "special-number-plate": {
            title: "Special / Personalized Number Plate",
            sections: [
                [
                    "Applicant Information",
                    ["Full Name", "NIC / Passport Number", "Contact Number"],
                ],
                [
                    "Vehicle Information",
                    [
                        "Vehicle Registration Number",
                        "Chassis Number",
                        "Vehicle Type",
                    ],
                ],
                [
                    "Plate Preference",
                    [
                        "Preferred Number or Letter Combination",
                        "Alternative Preference",
                        "Collection Office",
                    ],
                ],
            ],
            documents: ["Certificate of Registration", "Proof of Identity"],
        },
    };

    const selectedFormDetails = formDetails[selectedForm];

    const closeForm = () => {
        setSelectedForm(null);
    };

    return (
        <div className="vehicle-reg-hub">
            {/* HEADER */}
            <section className="vehicle-reg-hub-header">
                <div>
                    <span>DEPARTMENT OF MOTOR TRAFFIC</span>

                    <h1>Vehicle Registration Forms</h1>

                    <p>
                        Access and complete vehicle registration forms directly
                        through the Department of Motor Traffic website.
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <main className="vehicle-reg-hub-container">
                {/* =========================
                    REGISTRATION
                ========================== */}

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>01</span>

                        <div>
                            <h2>Registration</h2>

                            <p>
                                Forms for registering a new vehicle in Sri
                                Lanka.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        {/* First Vehicle Registration */}
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    MTA 2
                                </span>

                                <h3>First Vehicle Registration</h3>

                                <p>New vehicle registration using MTA 2.</p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() => setSelectedForm("mta2")}
                            >
                                View Form →
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================
                    OWNERSHIP TRANSFER
                ========================== */}

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>02</span>

                        <div>
                            <h2>Ownership Transfer</h2>

                            <p>
                                Forms for transferring ownership and recording
                                ownership-related interests.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        {/* MTA 6 / MTA 8 */}
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    MTA 6 / MTA 8
                                </span>

                                <h3>Transfer of Ownership</h3>

                                <p>
                                    Notify a change of possession and apply for
                                    registration following a transfer.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() =>
                                    setSelectedForm("ownership-transfer")
                                }
                            >
                                View Form →
                            </button>
                        </div>

                        {/* Absolute Ownership */}
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    OWNERSHIP
                                </span>

                                <h3>Absolute Ownership</h3>

                                <p>
                                    Apply to record absolute ownership of the
                                    vehicle.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() =>
                                    setSelectedForm("absolute-ownership")
                                }
                            >
                                View Form →
                            </button>
                        </div>

                        {/* Mortgage Registration */}
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    MTA 3
                                </span>

                                <h3>Mortgage-Related Registration</h3>

                                <p>
                                    Record or update a mortgage-related
                                    registration for a vehicle.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() =>
                                    setSelectedForm("mortgage-registration")
                                }
                            >
                                View Form →
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================
                    CHANGE OF VEHICLE PARTICULARS
                ========================== */}

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>03</span>

                        <div>
                            <h2>Change of Vehicle Particulars</h2>

                            <p>
                                Update details recorded for a registered
                                vehicle.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        {/* CMT 72 */}
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    CMT 72
                                </span>

                                <h3>Change of Vehicle Particulars</h3>

                                <p>
                                    Change of name or address, colour, engine,
                                    or other registration details using CMT 72.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() => setSelectedForm("cmt72")}
                            >
                                View Form →
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================
                    DUPLICATE CERTIFICATE OF REGISTRATION
                ========================== */}

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>04</span>

                        <div>
                            <h2>Duplicate Certificate of Registration</h2>

                            <p>
                                Apply for a replacement Certificate of
                                Registration.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    CMT 65
                                </span>

                                <h3>Duplicate CR</h3>

                                <p>
                                    Application for a duplicate Certificate of
                                    Registration using CMT 65.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() => setSelectedForm("cmt65")}
                            >
                                View Form →
                            </button>
                        </div>
                    </div>
                </section>

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>05</span>

                        <div>
                            <h2>Registration Following Death of Owner</h2>

                            <p>
                                Transfer registration following the death of a
                                registered owner.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        <div className="vehicle-reg-hub-form">
                            <div>
                                <span className="vehicle-reg-hub-form-code">
                                    MTA 5 / MTA 7
                                </span>

                                <h3>Registration Following Death of Owner</h3>

                                <p>
                                    Complete the required MTA 5 and MTA 7 forms
                                    to register the vehicle in the successor's
                                    name.
                                </p>
                            </div>

                            <button
                                className="vehicle-reg-hub-download"
                                onClick={() =>
                                    setSelectedForm("registration-after-death")
                                }
                            >
                                View Form →
                            </button>
                        </div>
                    </div>
                </section>

                {/* =========================
                    NUMBER PLATES
                ========================== */}

                <section className="vehicle-reg-hub-section">
                    <div className="vehicle-reg-hub-section-heading">
                        <span>06</span>

                        <div>
                            <h2>Number Plates</h2>

                            <p>
                                Services for obtaining, replacing, and changing
                                vehicle number plates.
                            </p>
                        </div>
                    </div>

                    <div className="vehicle-reg-hub-form-list">
                        {[
                            [
                                "new-number-plate",
                                "NUMBER PLATE",
                                "New Number Plate",
                                "Apply for a number plate for a newly registered vehicle.",
                            ],
                            [
                                "replacement-number-plate",
                                "NUMBER PLATE",
                                "Replacement Number Plate",
                                "Request a replacement for a damaged, lost, or unreadable number plate.",
                            ],
                            [
                                "change-province-number-plate",
                                "NUMBER PLATE",
                                "Change of Province / Number Plate",
                                "Apply to change the province identifier or vehicle number plate.",
                            ],
                            [
                                "special-number-plate",
                                "NUMBER PLATE",
                                "Special / Personalized Number Plate",
                                "Apply for a special or personalized vehicle number plate.",
                            ],
                        ].map(([formId, code, title, description]) => (
                            <div className="vehicle-reg-hub-form" key={formId}>
                                <div>
                                    <span className="vehicle-reg-hub-form-code">
                                        {code}
                                    </span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </div>

                                <button
                                    className="vehicle-reg-hub-download"
                                    onClick={() => setSelectedForm(formId)}
                                >
                                    View Form →
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* ==========================================
                FORM MODAL
            =========================================== */}

            {selectedForm && (
                <div className="vehicle-reg-form-overlay" onClick={closeForm}>
                    <div
                        className="vehicle-reg-form-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* MODAL HEADER */}

                        <div className="vehicle-reg-form-modal-header">
                            <div>
                                <span>APPLICATION FORM</span>

                                <h2>{selectedFormDetails.title}</h2>
                            </div>

                            <button
                                className="vehicle-reg-form-close"
                                onClick={closeForm}
                            >
                                ×
                            </button>
                        </div>

                        {/* FORM BODY */}

                        <div className="vehicle-reg-form-body">
                            {/* ======================
                                MTA 2
                            ======================= */}

                            {selectedForm === "mta2" && (
                                <form>
                                    <div className="vehicle-reg-form-section">
                                        <h3>Applicant Information</h3>

                                        <div className="vehicle-reg-form-grid">
                                            <div className="vehicle-reg-input-group">
                                                <label>
                                                    Name with Initials
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter name with initials"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Full Name</label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>
                                                    NIC / Passport Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport number"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Title</label>

                                                <select>
                                                    <option value="">
                                                        Select title
                                                    </option>

                                                    <option>Mr.</option>

                                                    <option>Mrs.</option>

                                                    <option>Ms.</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="vehicle-reg-input-group">
                                            <label>Address</label>

                                            <textarea
                                                rows="3"
                                                placeholder="Enter residential address"
                                            />
                                        </div>
                                    </div>

                                    <div className="vehicle-reg-form-section">
                                        <h3>Vehicle Information</h3>

                                        <div className="vehicle-reg-form-grid">
                                            <div className="vehicle-reg-input-group">
                                                <label>Vehicle Type</label>

                                                <select>
                                                    <option value="">
                                                        Select vehicle type
                                                    </option>

                                                    <option>Motor Car</option>

                                                    <option>
                                                        Motor Bicycle
                                                    </option>

                                                    <option>
                                                        Dual Purpose Vehicle
                                                    </option>

                                                    <option>
                                                        Three Wheeler
                                                    </option>

                                                    <option>Lorry</option>

                                                    <option>Other</option>
                                                </select>
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Make</label>

                                                <input
                                                    type="text"
                                                    placeholder="Vehicle make"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Model</label>

                                                <input
                                                    type="text"
                                                    placeholder="Vehicle model"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>
                                                    Year of Manufacture
                                                </label>

                                                <input
                                                    type="number"
                                                    placeholder="YYYY"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Chassis Number</label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Engine Number</label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter engine number"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Fuel Type</label>

                                                <select>
                                                    <option value="">
                                                        Select fuel type
                                                    </option>

                                                    <option>Petrol</option>

                                                    <option>Diesel</option>

                                                    <option>Electric</option>

                                                    <option>Hybrid</option>
                                                </select>
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>Colour</label>

                                                <input
                                                    type="text"
                                                    placeholder="Vehicle colour"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vehicle-reg-form-section">
                                        <h3>Import Information</h3>

                                        <div className="vehicle-reg-form-grid">
                                            <div className="vehicle-reg-input-group">
                                                <label>
                                                    Customs Registration
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter customs registration"
                                                />
                                            </div>

                                            <div className="vehicle-reg-input-group">
                                                <label>
                                                    Import Permit Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter permit number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="vehicle-reg-form-section">
                                        <h3>Supporting Documents</h3>

                                        <div className="vehicle-reg-upload-grid">
                                            <label className="vehicle-reg-upload">
                                                <span>NIC / Passport</span>

                                                <input type="file" />
                                            </label>

                                            <label className="vehicle-reg-upload">
                                                <span>
                                                    Customs Registration
                                                </span>

                                                <input type="file" />
                                            </label>

                                            <label className="vehicle-reg-upload">
                                                <span>Import Permit</span>

                                                <input type="file" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="vehicle-reg-form-actions">
                                        <button
                                            type="button"
                                            className="vehicle-reg-cancel-button"
                                            onClick={closeForm}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="vehicle-reg-submit-button"
                                        >
                                            Continue →
                                        </button>
                                    </div>
                                </form>
                            )}

                            {selectedForm !== "mta2" && (
                                <form
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    {selectedFormDetails.sections.map(
                                        ([sectionTitle, fields]) => (
                                            <div
                                                className="vehicle-reg-form-section"
                                                key={sectionTitle}
                                            >
                                                <h3>{sectionTitle}</h3>

                                                <div className="vehicle-reg-form-grid">
                                                    {fields.map((field) => (
                                                        <div
                                                            className="vehicle-reg-input-group"
                                                            key={field}
                                                        >
                                                            <label>
                                                                {field}
                                                            </label>
                                                            <input
                                                                type={
                                                                    field.includes(
                                                                        "Date",
                                                                    )
                                                                        ? "date"
                                                                        : "text"
                                                                }
                                                                placeholder={`Enter ${field.toLowerCase()}`}
                                                                required
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ),
                                    )}

                                    <div className="vehicle-reg-form-section">
                                        <h3>Supporting Documents</h3>

                                        <div className="vehicle-reg-upload-grid">
                                            {selectedFormDetails.documents.map(
                                                (document) => (
                                                    <label
                                                        className="vehicle-reg-upload"
                                                        key={document}
                                                    >
                                                        <span>{document}</span>
                                                        <input type="file" />
                                                    </label>
                                                ),
                                            )}
                                        </div>
                                    </div>

                                    <div className="vehicle-reg-form-actions">
                                        <button
                                            type="button"
                                            className="vehicle-reg-cancel-button"
                                            onClick={closeForm}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="vehicle-reg-submit-button"
                                        >
                                            Continue →
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VehicleRegHub;
