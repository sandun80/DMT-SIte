import { useState } from "react";
import "../styles/VehicleInspectionHub.css";

function VehicleInspectionHub() {

    const [activeTask, setActiveTask] = useState(null);

    const closeTask = () => {
        setActiveTask(null);
    };

    const tasks = [
        {
            id: "vehicle-inspection",
            number: "01",
            title: "Vehicle Inspection",
            description:
                "Request an inspection of your motor vehicle.",
        },
        {
            id: "registration-inspection",
            number: "02",
            title: "Registration Inspection",
            description:
                "Request an inspection required for vehicle registration.",
        },
        {
            id: "identity-inspection",
            number: "03",
            title: "Vehicle Identity Inspection",
            description:
                "Request inspection for verification of vehicle identity details.",
        },
        {
            id: "emission-testing",
            number: "04",
            title: "Vehicle Emission Testing",
            description:
                "Find an emission testing service and manage your emission test.",
        },
        {
            id: "prototype-inspection",
            number: "05",
            title: "Prototype & Special Inspection",
            description:
                "Submit a request for prototype or special vehicle inspection.",
        },
        {
            id: "weight-certificate",
            number: "06",
            title: "Certificate of Weight",
            description:
                "Apply for a certificate of weight for your vehicle.",
        },
    ];

    return (
        <div className="vehicle-inspection-hub">

            {/* HEADER */}

            <section className="vehicle-inspection-hub-header">

                <div className="vehicle-inspection-hub-header-content">

                    <span>
                        DEPARTMENT OF MOTOR TRAFFIC
                    </span>

                    <h1>
                        Vehicle Inspection
                    </h1>

                    <p>
                        Access vehicle inspection services and complete
                        inspection-related tasks online.
                    </p>

                </div>

            </section>


            {/* MAIN */}

            <main className="vehicle-inspection-hub-container">

                <section className="vehicle-inspection-hub-section">

                    <div className="vehicle-inspection-hub-section-heading">

                       

                        <div>

                            <h2>
                                Vehicle Inspection Services
                            </h2>

                            <p>
                                Select the service you need to begin.
                            </p>

                        </div>

                    </div>


                    {/* TASK LIST */}

                    <div className="vehicle-inspection-hub-task-list">

                        {tasks.map((task) => (

                            <div
                                className="vehicle-inspection-hub-task"
                                key={task.id}
                            >

                                <div className="vehicle-inspection-hub-task-number">
                                    {task.number}
                                </div>

                                <div className="vehicle-inspection-hub-task-content">

                                    <h3>
                                        {task.title}
                                    </h3>

                                    <p>
                                        {task.description}
                                    </p>

                                </div>

                                <button
                                    className="vehicle-inspection-hub-task-button"
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


            {/* ==================================
                TASK MODAL
            ================================== */}

            {activeTask && (

                <div
                    className="vehicle-inspection-task-overlay"
                    onClick={closeTask}
                >

                    <div
                        className="vehicle-inspection-task-modal"
                        onClick={(event) =>
                            event.stopPropagation()
                        }
                    >

                        {/* MODAL HEADER */}

                        <div className="vehicle-inspection-task-header">

                            <div>

                                <span>
                                    ONLINE SERVICE
                                </span>

                                <h2>

                                    {activeTask ===
                                        "vehicle-inspection" &&
                                        "Vehicle Inspection"}

                                    {activeTask ===
                                        "registration-inspection" &&
                                        "Registration Inspection"}

                                    {activeTask ===
                                        "identity-inspection" &&
                                        "Vehicle Identity Inspection"}

                                    {activeTask ===
                                        "emission-testing" &&
                                        "Vehicle Emission Testing"}

                                    {activeTask ===
                                        "prototype-inspection" &&
                                        "Prototype & Special Inspection"}

                                    {activeTask ===
                                        "weight-certificate" &&
                                        "Certificate of Weight"}

                                </h2>

                            </div>


                            <button
                                className="vehicle-inspection-task-close"
                                onClick={closeTask}
                            >
                                ×
                            </button>

                        </div>


                        {/* MODAL BODY */}

                        <div className="vehicle-inspection-task-body">


                            {/* =================================
                                VEHICLE INSPECTION
                            ================================= */}

                            {activeTask ===
                                "vehicle-inspection" && (

                                <form>

                                    <h3>
                                        Request Vehicle Inspection
                                    </h3>

                                    <p className="task-description">
                                        Enter your vehicle details and
                                        select your preferred inspection
                                        location.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Applicant Details
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">
                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />
                                            </div>


                                            <div className="task-input">
                                                <label>
                                                    NIC / Passport Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport number"
                                                />
                                            </div>


                                            <div className="task-input">
                                                <label>
                                                    Contact Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    placeholder="Enter contact number"
                                                />
                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Details
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">
                                                <label>
                                                    Registration Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="e.g. WP CAB-1234"
                                                />
                                            </div>


                                            <div className="task-input">
                                                <label>
                                                    Chassis Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />
                                            </div>


                                            <div className="task-input">
                                                <label>
                                                    Engine Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter engine number"
                                                />
                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Inspection Appointment
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Inspection Location
                                                </label>

                                                <select>

                                                    <option>
                                                        Select location
                                                    </option>

                                                    <option>
                                                        DMT Head Office
                                                    </option>

                                                    <option>
                                                        Werahera
                                                    </option>

                                                    <option>
                                                        Other
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Preferred Date
                                                </label>

                                                <input
                                                    type="date"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                REGISTRATION INSPECTION
                            ================================= */}

                            {activeTask ===
                                "registration-inspection" && (

                                <form>

                                    <h3>
                                        Registration Inspection
                                    </h3>

                                    <p className="task-description">
                                        Submit the details required to
                                        request an inspection associated
                                        with vehicle registration.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Details
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Vehicle Type
                                                </label>

                                                <select>

                                                    <option>
                                                        Select vehicle type
                                                    </option>

                                                    <option>
                                                        Motor Car
                                                    </option>

                                                    <option>
                                                        Motor Bicycle
                                                    </option>

                                                    <option>
                                                        Three Wheeler
                                                    </option>

                                                    <option>
                                                        Lorry
                                                    </option>

                                                    <option>
                                                        Other
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Chassis Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Engine Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter engine number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Inspection Appointment
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Inspection Location
                                                </label>

                                                <select>

                                                    <option>
                                                        Select location
                                                    </option>

                                                    <option>
                                                        DMT Facility
                                                    </option>

                                                    <option>
                                                        Applicant Facility
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Preferred Date
                                                </label>

                                                <input
                                                    type="date"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Request Inspection →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                IDENTITY INSPECTION
                            ================================= */}

                            {activeTask ===
                                "identity-inspection" && (

                                <form>

                                    <h3>
                                        Vehicle Identity Inspection
                                    </h3>

                                    <p className="task-description">
                                        Submit a request to have the
                                        identity of your vehicle verified.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Registration Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter registration number"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Chassis Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Engine Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter engine number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Applicant Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    NIC / Passport
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Request Inspection →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                EMISSION TESTING
                            ================================= */}

                            {activeTask ===
                                "emission-testing" && (

                                <form>

                                    <h3>
                                        Vehicle Emission Testing
                                    </h3>

                                    <p className="task-description">
                                        Enter your vehicle information to
                                        begin the emission testing service.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Registration Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter registration number"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Vehicle Type
                                                </label>

                                                <select>

                                                    <option>
                                                        Select vehicle type
                                                    </option>

                                                    <option>
                                                        Motor Bicycle
                                                    </option>

                                                    <option>
                                                        Three Wheeler
                                                    </option>

                                                    <option>
                                                        Motor Car
                                                    </option>

                                                    <option>
                                                        Van
                                                    </option>

                                                    <option>
                                                        Lorry
                                                    </option>

                                                    <option>
                                                        Bus
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Fuel Type
                                                </label>

                                                <select>

                                                    <option>
                                                        Select fuel type
                                                    </option>

                                                    <option>
                                                        Petrol
                                                    </option>

                                                    <option>
                                                        Diesel
                                                    </option>

                                                </select>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Testing Centre
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Preferred Centre
                                                </label>

                                                <select>

                                                    <option>
                                                        Select testing centre
                                                    </option>

                                                    <option>
                                                        Laugh Eco Sri
                                                    </option>

                                                    <option>
                                                        Klenco Lanka
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Preferred Date
                                                </label>

                                                <input
                                                    type="date"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Continue →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                PROTOTYPE INSPECTION
                            ================================= */}

                            {activeTask ===
                                "prototype-inspection" && (

                                <form>

                                    <h3>
                                        Prototype & Special Inspection
                                    </h3>

                                    <p className="task-description">
                                        Submit the details required for a
                                        prototype or special vehicle
                                        inspection.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Applicant Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Applicant Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter applicant name"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Contact Number
                                                </label>

                                                <input
                                                    type="tel"
                                                    placeholder="Enter contact number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Vehicle Type
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter vehicle type"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Manufacturer
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter manufacturer"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Chassis Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Supporting Documents
                                        </h4>

                                        <input
                                            type="file"
                                            className="task-file"
                                        />

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Submit Request →
                                        </button>

                                    </div>

                                </form>

                            )}


                            {/* =================================
                                WEIGHT CERTIFICATE
                            ================================= */}

                            {activeTask ===
                                "weight-certificate" && (

                                <form>

                                    <h3>
                                        Certificate of Weight
                                    </h3>

                                    <p className="task-description">
                                        Apply for a vehicle weight
                                        certificate.
                                    </p>


                                    <div className="task-form-section">

                                        <h4>
                                            Vehicle Information
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Registration Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter registration number"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Vehicle Type
                                                </label>

                                                <select>

                                                    <option>
                                                        Select vehicle type
                                                    </option>

                                                    <option>
                                                        Motor Car
                                                    </option>

                                                    <option>
                                                        Lorry
                                                    </option>

                                                    <option>
                                                        Bus
                                                    </option>

                                                    <option>
                                                        Other
                                                    </option>

                                                </select>

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    Chassis Number
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter chassis number"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-form-section">

                                        <h4>
                                            Applicant Details
                                        </h4>

                                        <div className="task-form-grid">

                                            <div className="task-input">

                                                <label>
                                                    Full Name
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter full name"
                                                />

                                            </div>


                                            <div className="task-input">

                                                <label>
                                                    NIC / Passport
                                                </label>

                                                <input
                                                    type="text"
                                                    placeholder="Enter NIC or passport"
                                                />

                                            </div>

                                        </div>

                                    </div>


                                    <div className="task-actions">

                                        <button
                                            type="button"
                                            className="task-cancel"
                                            onClick={closeTask}
                                        >
                                            Cancel
                                        </button>

                                        <button
                                            type="submit"
                                            className="task-primary"
                                        >
                                            Submit Application →
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

export default VehicleInspectionHub;