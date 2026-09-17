import { Link } from "react-router-dom";
import "../styles/welcome.css";

import vehicleRegImg from "../assets/VehicleReg.jpg";
import vehicleInspectionImg from "../assets/VehicleInspection.jpg";
import drivingLicenceImg from "../assets/DrivingLicence.jpg";
import otherServicesImg from "../assets/OtherServices.jpg";

function Welcome() {
    return (
        <div className="welcome-page">

            <main className="welcome-content">

                <div className="welcome-title">
                    <h1>Department of Motor Traffic</h1>

                    <p>
                        මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව
                    </p>

                    <span>Welcome to DMT</span>
                </div>


                <div className="welcome-tiles">

                    {/* Vehicle Registration */}
                    <Link
                        to="/vehicle-registration"
                        className="welcome-tile"
                    >
                        <div className="tile-top-bar">
                            <span className="tile-number">01</span>
                        </div>

                        <div className="tile-image-wrapper">
                            <img
                                src={vehicleRegImg}
                                alt="Sri Lanka DMT Vehicle Registration"
                                className="tile-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="tile-content">
                            <h2>Vehicle Registration</h2>

                            <p>
                                Vehicle Registration Related Services
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </Link>


                    {/* Vehicle Inspection */}
                    <Link
                        to="/vehicle-inspection"
                        className="welcome-tile"
                    >
                        <div className="tile-top-bar">
                            <span className="tile-number">02</span>
                        </div>

                        <div className="tile-image-wrapper">
                            <img
                                src={vehicleInspectionImg}
                                alt="Sri Lanka DMT Vehicle Inspection"
                                className="tile-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="tile-content">
                            <h2>Vehicle Inspection</h2>

                            <p>
                                Vehicle inspection related services.
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </Link>


                    {/* Driving Licence */}
                    <Link
                        to="/driving-licence"
                        className="welcome-tile"
                    >
                        <div className="tile-top-bar">
                            <span className="tile-number">03</span>
                        </div>

                        <div className="tile-image-wrapper">
                            <img
                                src={drivingLicenceImg}
                                alt="Sri Lanka DMT Driving Licence"
                                className="tile-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="tile-content">
                            <h2>Driving Licence</h2>

                            <p>
                                Driving licence applications, renewals
                                and related services.
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </Link>


                    {/* Other Services */}
                    <Link
                        to="/other-services"
                        className="welcome-tile"
                    >
                        <div className="tile-top-bar">
                            <span className="tile-number">04</span>
                        </div>

                        <div className="tile-image-wrapper">
                            <img
                                src={otherServicesImg}
                                alt="Sri Lanka DMT Other Services"
                                className="tile-image"
                                loading="lazy"
                            />
                        </div>

                        <div className="tile-content">
                            <h2>Other Services</h2>

                            <p>
                                Access other motor traffic related
                                services and information.
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </Link>

                </div>

            </main>


            <footer className="welcome-footer">
                <p>
                    Department of Motor Traffic • Sri Lanka
                </p>
            </footer>

        </div>
    );
}

export default Welcome;