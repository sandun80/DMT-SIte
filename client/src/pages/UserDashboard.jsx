import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserDashboard.css";

const applications = [
	{ id: "DMT-2026-00481", title: "Driving licence renewal", type: "Driving licence", updated: "Updated 18 Sep 2026", status: "In review", progress: 68 },
	{ id: "DMT-2026-00319", title: "Vehicle revenue licence", type: "Vehicle services", updated: "Updated 12 Sep 2026", status: "Payment pending", progress: 42 },
];

const vehicles = [
	{ number: "CAA-4821", model: "Toyota Aqua", expiry: "24 Nov 2026", state: "Valid" },
	{ number: "WP-KD-9134", model: "Suzuki Wagon R", expiry: "08 Feb 2027", state: "Valid" },
];

function UserDashboard() {
	const [activeView, setActiveView] = useState("Overview");
	const [notice, setNotice] = useState("");

	const showNotice = (message) => {
		setNotice(message);
		window.setTimeout(() => setNotice(""), 2800);
	};

	return (
		<main className="dashboard-page">
			<section className="dashboard-shell">
				<div className="dashboard-heading">
					<div>
						<span className="dashboard-eyebrow">Citizen portal</span>
						<h1>Good morning, Kasun</h1>
						<p>Manage your Department of Motor Traffic services from one place.</p>
					</div>
					<div className="dashboard-account">
						<span className="dashboard-avatar">KP</span>
						<div><strong>Kasun Perera</strong><span>NIC ending 4582</span></div>
						<button type="button" onClick={() => showNotice("Profile settings are coming soon.")}>Settings</button>
					</div>
				</div>

				<nav className="dashboard-tabs" aria-label="Dashboard sections">
					{["Overview", "Applications", "Documents"].map((view) => (
						<button type="button" key={view} className={activeView === view ? "active" : ""} onClick={() => setActiveView(view)}>{view}</button>
					))}
				</nav>

				{activeView === "Overview" ? (
					<>
						<div className="dashboard-stats">
							<article className="dashboard-stat dashboard-stat-primary"><span className="stat-label">Open applications</span><strong>02</strong><span className="stat-note">One action needs your attention</span></article>
							<article className="dashboard-stat"><span className="stat-label">Registered vehicles</span><strong>02</strong><span className="stat-note">Both records are up to date</span></article>
							<article className="dashboard-stat"><span className="stat-label">Saved documents</span><strong>06</strong><span className="stat-note">Last uploaded 04 Sep 2026</span></article>
						</div>

						<div className="dashboard-grid">
							<section className="dashboard-panel dashboard-applications">
								<div className="panel-heading"><div><span className="panel-kicker">Track progress</span><h2>Recent applications</h2></div><button type="button" className="text-button" onClick={() => setActiveView("Applications")}>View all</button></div>
								<div className="application-list">
									{applications.map((application) => (
										<article className="application-item" key={application.id}>
											<div className="application-icon">{application.type === "Driving licence" ? "DL" : "VL"}</div>
											<div className="application-content"><div className="application-title-row"><div><h3>{application.title}</h3><span>{application.id} | {application.updated}</span></div><span className={`status status-${application.status === "In review" ? "review" : "pending"}`}>{application.status}</span></div><div className="progress-track" aria-label={`${application.progress}% complete`}><span style={{ width: `${application.progress}%` }} /></div></div>
										</article>
									))}
								</div>
							</section>

							<section className="dashboard-panel quick-actions">
								<div className="panel-heading"><div><span className="panel-kicker">Start a service</span><h2>Quick actions</h2></div></div>
								<div className="quick-action-list">
									<Link to="/driving-licence"><span>DL</span><div><strong>Driving licence</strong><small>Renew or apply for a licence</small></div><b>-&gt;</b></Link>
									<Link to="/vehicle-registration"><span>VR</span><div><strong>Vehicle registration</strong><small>Register or transfer ownership</small></div><b>-&gt;</b></Link>
									<Link to="/vehicle-inspection"><span>VI</span><div><strong>Vehicle inspection</strong><small>Book an inspection appointment</small></div><b>-&gt;</b></Link>
								</div>
							</section>
						</div>

						<div className="dashboard-grid dashboard-grid-lower">
							<section className="dashboard-panel"><div className="panel-heading"><div><span className="panel-kicker">Your records</span><h2>My vehicles</h2></div><button type="button" className="text-button" onClick={() => showNotice("Vehicle records are already up to date.")}>Manage</button></div><div className="vehicle-list">{vehicles.map((vehicle) => <div className="vehicle-item" key={vehicle.number}><div className="vehicle-mark">CAR</div><div><strong>{vehicle.number}</strong><span>{vehicle.model}</span></div><div className="vehicle-expiry"><small>Licence expiry</small><strong>{vehicle.expiry}</strong></div><span className="valid-dot">{vehicle.state}</span></div>)}</div></section>
							<section className="dashboard-panel dashboard-notices"><div className="panel-heading"><div><span className="panel-kicker">Stay informed</span><h2>Notices</h2></div><button type="button" className="text-button" onClick={() => showNotice("You have no unread notices.")}>Mark read</button></div><div className="notice-item"><span className="notice-dot" /><div><strong>Payment required</strong><p>Complete payment for DMT-2026-00319 before 22 Sep.</p><small>2 hours ago</small></div></div><div className="notice-item"><span className="notice-dot muted" /><div><strong>New service update</strong><p>Online vehicle inspection bookings are now available.</p><small>3 days ago</small></div></div></section>
						</div>
					</>
				) : (
					<section className="dashboard-panel dashboard-empty-state"><span className="panel-kicker">{activeView}</span><h2>{activeView} will appear here</h2><p>This section is ready for your saved {activeView.toLowerCase()} once the portal services are connected.</p><button type="button" className="primary-button" onClick={() => setActiveView("Overview")}>Back to overview</button></section>
				)}
			</section>
			{notice && <div className="dashboard-toast" role="status">{notice}</div>}
		</main>
	);
}

export default UserDashboard;
