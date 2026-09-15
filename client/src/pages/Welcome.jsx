import "../styles/welcome.css";

function Welcome() {
    return (
        <div className="welcome-page">

            {/* Main Welcome Section */}
            <main className="welcome-content">

                {/* DMT Name */}
                <div className="welcome-title">
                    <h1>Department of Motor Traffic</h1>
                    <p>මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව</p>
                    <span>Welcome to DMT</span>
                </div>


                {/* Service Tiles */}
                <div className="welcome-tiles">

                    {/* Tile 1 */}
                    <div className="welcome-tile">
                        <div className="tile-number">01</div>

                        <div className="tile-content">
                            <h2>Vehicle Registration</h2>

                            <p>
                               Vehicle Registration Related Services
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </div>


                    {/* Tile 2 */}
                    <div className="welcome-tile">
                        <div className="tile-number">02</div>

                        <div className="tile-content">
                            <h2>Vehicle Inspection</h2>

                            <p>
                                Vehicle inspection
                                related services.
                            </p>
                        </div>

                        <div className="tile-arrow">
                            →
                        </div>
                    </div>


                    {/* Tile 3 */}
                    <div className="welcome-tile">
                        <div className="tile-number">03</div>

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
                    </div>


                    {/* Tile 4 */}
                    <div className="welcome-tile">
                        <div className="tile-number">04</div>

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
                    </div>

                </div>

            </main>


            {/* Footer Text */}
            <footer className="welcome-footer">
                <p>
                    Department of Motor Traffic • Sri Lanka
                </p>
            </footer>

        </div>
    );
}

export default Welcome;