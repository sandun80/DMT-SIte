import React from "react";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="about-page">

      {/* Page Header */}
      <section className="about-header">
        <div className="about-header-content">
          <h1>About Us</h1>
          <p>
            Department of Motor Traffic • මෝටර් රථ ප්‍රවාහන දෙපාර්තමේන්තුව
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">

        <div className="about-introduction">
          <h2>Department of Motor Traffic</h2>

          <p>
            The Department of Motor Traffic is the government institution
            responsible for the registration of motor vehicles and the
            issuance of driving licences in Sri Lanka.
          </p>

          <p>
            The department provides a range of services to vehicle owners,
            drivers and other members of the public while maintaining
            accurate records related to motor vehicles and driving licences.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="about-cards">

          <div className="about-card">
            <div className="card-icon">🎯</div>

            <h3>Our Mission</h3>

            <p>
              To provide efficient, transparent and reliable motor traffic
              services to the people of Sri Lanka through modern technology
              and effective administration.
            </p>
          </div>

          <div className="about-card">
            <div className="card-icon">👁️</div>

            <h3>Our Vision</h3>

            <p>
              To become a modern and citizen-focused organization delivering
              high-quality motor traffic services through innovation and
              digital transformation.
            </p>
          </div>

        </div>

        {/* What We Do */}
        <div className="about-services">

          <h2>What We Do</h2>

          <div className="service-grid">

            <div className="service-item">
              <h3>Vehicle Registration</h3>
              <p>
                Registration of new and existing motor vehicles and
                maintenance of vehicle registration information.
              </p>
            </div>

            <div className="service-item">
              <h3>Driving Licences</h3>
              <p>
                Services related to obtaining, renewing and managing
                driving licences.
              </p>
            </div>

            <div className="service-item">
              <h3>Vehicle Information</h3>
              <p>
                Providing vehicle-related information and maintaining
                official vehicle records.
              </p>
            </div>

            <div className="service-item">
              <h3>Revenue Licences</h3>
              <p>
                Services related to the issuance and renewal of revenue
                licences.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default AboutUs;