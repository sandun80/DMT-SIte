import "../styles/hero.css";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-main">
                <p className="welcome">WELCOME TO DMT</p>

                <h1>Department of Motor Traffic</h1>

                <p className="description">
                    Access vehicle registration, driving licence services,
                    revenue licence services and other DMT services online.
                </p>

                {/* <form
                    className="quicksearch"
                    role="search"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <select aria-label="Search by">
                        <option>Reg. No.</option>
                        <option>NIC</option>
                        <option>Licence No.</option>
                    </select>
                    <input
                        type="text"
                        aria-label="Search value"
                        placeholder="e.g. WP KA 4521 or NIC number"
                    />
                    <button className="primary-btn" type="submit">
                        Check Status
                    </button>
                </form> */}
            </div>

            {/* <div className="hero-panel">
                <div className="stat">
                    <span>Revenue licence renewal</span>
                    <b>Avg. 4 minutes</b>
                </div>
                <div className="stat">
                    <span>Vehicle information report</span>
                    <b>Rs. 500 · instant</b>
                </div>
                <div className="stat">
                    <span>Driving test slots this week</span>
                    <b>1,240 open</b>
                </div>
                <div className="stat">
                    <span>Branches accepting bookings</span>
                    <b>38 islandwide</b>
                </div>
            </div> */}
        </section>
    );
}

export default Hero;
