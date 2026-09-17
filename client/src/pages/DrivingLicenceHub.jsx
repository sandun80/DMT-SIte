import { useState } from "react";
import "../styles/DrivingLicenceHub.css";

function DrivingLicenceHub() {
    const [activeTask, setActiveTask] = useState(null);

    const closeTask = () => {
        setActiveTask(null);
    };

    const tasks = [
        {
            id: "new-licence",
            number: "01",
            title: "Get a New Driving Licence",
            description:
                "Apply for your first Sri Lankan driving licence.",
        },
        {
            id: "renew-licence",
            number: "02",
            title: "Renew Driving Licence",
            description:
                "Renew the validity of your existing driving licence.",
        },
        {
            id: "add-class",
            number: "03",
            title: "Add Vehicle Class",
            description:
                "Apply to add an additional vehicle class to your driving licence.",
        },
        {
            id: "duplicate",
            number: "04",
            title: "Duplicate Driving Licence",
            description:
                "Apply for a duplicate licence if your licence is lost or damaged.",
        },
        {
            id: "change-particulars",
            number: "05",
            title: "Change Licence Particulars",
            description:
                "Request changes to personal information recorded on your licence.",
        },
        {
            id: "foreign-conversion",
            number: "06",
            title: "Convert Foreign Driving Licence",
            description:
                "Apply to convert an eligible foreign driving licence to a Sri Lankan licence.",
        },
        {
            id: "old-to-new",
            number: "07",
            title: "Convert Old Licence to Smart Card",
            description:
                "Convert an old driving licence to the current smart-card format.",
        },
    ];

    return (
        <div className="driving-licence-hub">

            {/* HEADER */}

            <section className="driving-licence-hub-header">

                <div className="driving-licence-hub-header-content">

                    <span>
                        DEPARTMENT OF MOTOR TRAFFIC
                    </span>

                    <h1>
                        Driving Licence
                    </h1>

                    <p>
                        Access driving licence services and complete
                        licence-related applications online.
                    </p>

                </div>

            </section>


            {/* MAIN */}

            <main className="driving-licence-hub-container">

                <section className="driving-licence-hub-section">

                    <div className="driving-licence-hub-section-heading">

                        <span>
                            SERVICES
                        </span>

                        <div>

                            <h2>
                                Driving Licence Services
                            </h2>

                            <p>
                                Select the service you need to begin.
                            </p>

                        </div>

                    </div>


                    {/* TASK LIST */}

                    <div className="driving-licence-hub-task-list">

                        {tasks.map((task) => (

                            <div
                                className="driving-licence-hub-task"
                                key={task.id}
                            >

                                <div className="driving-licence-hub-task-number">
                                    {task.number}
                                </div>


                                <div className="driving-licence-hub-task-content">

                                    <h3>
                                        {task.title}
                                    </h3>

                                    <p>
                                        {task.description}
                                    </p>

                                </div>


                                <button
                                    className="driving-licence-hub-task-button"
                                    onClick={() =>
                                        setActiveTask(task.id)
                                    }
                                >
                                    Start →
                                </button>

                            </div>

                        ))}

                    </div>

                </section>

            </main>


            {/* =====================================
                MODAL
            ====================================== */}

            {activeTask && (

                <div
                    className="driving-licence-task-overlay"
                    onClick={closeTask}
                >

                    <div
                        className="driving-licence-task-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* MODAL HEADER */}

                        <div className="driving-licence-task-header">

                            <div>

                                <span>
                                    ONLINE SERVICE
                                </span>

                                <h2>

                                    {activeTask === "new-licence" &&
                                        "New Driving Licence"}

                                    {activeTask === "renew-licence" &&
                                        "Renew Driving Licence"}

                                    {activeTask === "add-class" &&
                                        "Add Vehicle Class"}

                                    {activeTask === "duplicate" &&
                                        "Duplicate Driving Licence"}

                                    {activeTask === "change-particulars" &&
                                        "Change Licence Particulars"}

                                    {activeTask === "foreign-conversion" &&
                                        "Convert Foreign Driving Licence"}

                                    {activeTask === "old-to-new" &&
                                        "Convert Old Licence to Smart Card"}

                                </h2>

                            </div>


                            <button
                                className="driving-licence-task-close"
                                onClick={closeTask}
                            >
                                ×
                            </button>

                        </div>


                        {/* MODAL BODY */}

                        <div className="driving-licence-task-body">


                            {/* =================================
                                NEW LICENCE
                            ================================= */}

                            {activeTask === "new-licence" && (

                                <form>

                                    <h3>
                                        New Driving Licence Application
                                    </h3>

                                    <p className="driving-task-description">
                                        Complete your details to begin
                                        the application for a new driving
                                        licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Applicant Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">
                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />
                                            </div>


                                            <div className="driving-input">
                                                <label>
                                                    NIC / Passport Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport number"
                                                />
                                            </div>


                                            <div className="driving-input">
                                                <label>
                                                    Date of Birth
                                                </label>

                                                <input
                                                    type="date"
                                                />
                                            </div>


                                            <div className="driving-input">
                                                <label>
                                                    Contact Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    placeholder="Enter phone number"
                                                />
                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Licence Class
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Vehicle Class
                                                </label>

                                                <select>

                                                    <option>
                                                        Select vehicle class
                                                    </option>

                                                    <option>
                                                        A
                                                    </option>

                                                    <option>
                                                        A1
                                                    </option>

                                                    <option>
                                                        B
                                                    </option>

                                                    <option>
                                                        B1
                                                    </option>

                                                    <option>
                                                        C
                                                    </option>

                                                    <option>
                                                        C1
                                                    </option>

                                                    <option>
                                                        D
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Medical Certificate
                                        </h4>

                                        <div className="driving-upload">

                                            <label>
                                                Upload Medical Fitness
                                                Certificate
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Service Location
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    District / Office
                                                </label>

                                                <select>

                                                    <option>
                                                        Select office
                                                    </option>

                                                    <option>
                                                        Werahera
                                                    </option>

                                                    <option>
                                                        Colombo
                                                    </option>

                                                    <option>
                                                        Gampaha
                                                    </option>

                                                    <option>
                                                        Kalutara
                                                    </option>

                                                    <option>
                                                        Kandy
                                                    </option>

                                                    <option>
                                                        Kurunegala
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                RENEW LICENCE
                            ================================= */}

                            {activeTask === "renew-licence" && (

                                <form>

                                    <h3>
                                        Driving Licence Renewal
                                    </h3>

                                    <p className="driving-task-description">
                                        Renew the validity of your existing
                                        driving licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Licence Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Driving Licence Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter licence number"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    NIC Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Medical Certificate
                                        </h4>

                                        <div className="driving-upload">

                                            <label>
                                                Upload Medical Fitness
                                                Certificate
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Appointment
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Preferred Office
                                                </label>

                                                <select>

                                                    <option>
                                                        Select office
                                                    </option>

                                                    <option>
                                                        Werahera
                                                    </option>

                                                    <option>
                                                        Colombo
                                                    </option>

                                                    <option>
                                                        Gampaha
                                                    </option>

                                                    <option>
                                                        Kandy
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    Preferred Date
                                                </label>

                                                <input
                                                    type="date"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                ADD CLASS
                            ================================= */}

                            {activeTask === "add-class" && (

                                <form>

                                    <h3>
                                        Add Vehicle Class
                                    </h3>

                                    <p className="driving-task-description">
                                        Apply to add another vehicle class
                                        to your driving licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Current Licence
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Licence Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter licence number"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    Current Class
                                                </label>

                                                <select>

                                                    <option>
                                                        Select current class
                                                    </option>

                                                    <option>
                                                        A
                                                    </option>

                                                    <option>
                                                        A1
                                                    </option>

                                                    <option>
                                                        B
                                                    </option>

                                                    <option>
                                                        B1
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            New Vehicle Class
                                        </h4>

                                        <div className="driving-input">

                                            <label>
                                                Class to Add
                                            </label>

                                            <select>

                                                <option>
                                                    Select new class
                                                </option>

                                                <option>
                                                    A
                                                </option>

                                                <option>
                                                    A1
                                                </option>

                                                <option>
                                                    B
                                                </option>

                                                <option>
                                                    B1
                                                </option>

                                                <option>
                                                    C
                                                </option>

                                                <option>
                                                    C1
                                                </option>

                                                <option>
                                                    D
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                DUPLICATE
                            ================================= */}

                            {activeTask === "duplicate" && (

                                <form>

                                    <h3>
                                        Duplicate Driving Licence
                                    </h3>

                                    <p className="driving-task-description">
                                        Apply for a duplicate licence if
                                        your existing licence has been lost,
                                        damaged or defaced.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Applicant Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    NIC / Passport
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    Driving Licence Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="If available"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Reason
                                        </h4>

                                        <div className="driving-input">

                                            <label>
                                                Select Reason
                                            </label>

                                            <select>

                                                <option>
                                                    Select reason
                                                </option>

                                                <option>
                                                    Lost
                                                </option>

                                                <option>
                                                    Damaged
                                                </option>

                                                <option>
                                                    Defaced
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Supporting Document
                                        </h4>

                                        <div className="driving-upload">

                                            <label>
                                                Police Complaint /
                                                Existing Licence
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Submit Application →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                CHANGE PARTICULARS
                            ================================= */}

                            {activeTask === "change-particulars" && (

                                <form>

                                    <h3>
                                        Change Licence Particulars
                                    </h3>

                                    <p className="driving-task-description">
                                        Request a change to information
                                        recorded on your driving licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Current Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Licence Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter licence number"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    NIC Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Information to Change
                                        </h4>

                                        <div className="driving-input">

                                            <label>
                                                Change Type
                                            </label>

                                            <select>

                                                <option>
                                                    Select change
                                                </option>

                                                <option>
                                                    Name
                                                </option>

                                                <option>
                                                    Address
                                                </option>

                                                <option>
                                                    Other Particular
                                                </option>

                                            </select>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Supporting Document
                                        </h4>

                                        <div className="driving-upload">

                                            <label>
                                                Upload Supporting Document
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                FOREIGN LICENCE
                            ================================= */}

                            {activeTask === "foreign-conversion" && (

                                <form>

                                    <h3>
                                        Foreign Licence Conversion
                                    </h3>

                                    <p className="driving-task-description">
                                        Apply to convert an eligible foreign
                                        driving licence to a Sri Lankan
                                        driving licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Applicant Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    Passport Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter passport number"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    Sri Lankan Visa
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter visa details"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Foreign Licence
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Issuing Country
                                                </label>

                                                <select>

                                                    <option>
                                                        Select country
                                                    </option>

                                                    <option>
                                                        Australia
                                                    </option>

                                                    <option>
                                                        Canada
                                                    </option>

                                                    <option>
                                                        India
                                                    </option>

                                                    <option>
                                                        Japan
                                                    </option>

                                                    <option>
                                                        United Kingdom
                                                    </option>

                                                    <option>
                                                        Other
                                                    </option>

                                                </select>

                                            </div>

                                        </div>


                                        <div className="driving-upload">

                                            <label>
                                                Upload Foreign Driving
                                                Licence
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
                                        >
                                            Submit Conversion →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                OLD TO NEW
                            ================================= */}

                            {activeTask === "old-to-new" && (

                                <form>

                                    <h3>
                                        Convert Old Licence to Smart Card
                                    </h3>

                                    <p className="driving-task-description">
                                        Apply to convert your existing
                                        old-format driving licence to a
                                        smart-card driving licence.
                                    </p>


                                    <div className="driving-task-section">

                                        <h4>
                                            Licence Details
                                        </h4>

                                        <div className="driving-task-grid">

                                            <div className="driving-input">

                                                <label>
                                                    Existing Licence Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter licence number"
                                                />

                                            </div>


                                            <div className="driving-input">

                                                <label>
                                                    NIC Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="driving-task-section">

                                        <h4>
                                            Documents
                                        </h4>

                                        <div className="driving-upload">

                                            <label>
                                                Upload Existing Licence
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                        <br />

                                        <div className="driving-upload">

                                            <label>
                                                Upload Medical Certificate
                                            </label>

                                            <input
                                                type="file"
                                            />

                                        </div>

                                    </div>


                                    <div className="driving-task-actions">

                                        <button
                                            type="button"
                                            className="driving-task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="driving-task-primary"
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

export default DrivingLicenceHub;