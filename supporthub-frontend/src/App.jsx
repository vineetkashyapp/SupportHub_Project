import { useState, useEffect } from "react";
const API_URL = "http://localhost:8080";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [tickets, setTickets] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState("dashboard");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.text();

      if (result === "Login successful") {
        setLoggedIn(true);
      } else {
        setMessage("Invalid email or password.");
      }
    } catch (error) {
      setMessage("Unable to connect to the server.");
    }

    setLoading(false);
  };

if (loggedIn) {
  return (
    <Dashboard
      tickets={tickets}
      setTickets={setTickets}
      page={page}
      setPage={setPage}
      setLoggedIn={setLoggedIn}
    />
  );
}
  return (
    <div className="login-page">

      {/* Left Section */}
      <section className="brand-section">
        <div className="brand-content">

          <div className="brand-logo">
            <div className="logo-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div>
              <h1>SupportHub</h1>
              <p>Employee Support System</p>
            </div>
          </div>

          <div className="hero-content">
            <div className="small-label">
              <span className="status-dot"></span>
              INTERNAL SUPPORT PLATFORM
            </div>

            <h2>
              Resolve issues.
              <br />
              <span>Empower your team.</span>
            </h2>

            <p>
              A centralized platform for managing employee support requests,
              tracking tickets, and resolving workplace issues efficiently.
            </p>
          </div>

          <div className="features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Simple ticket management</strong>
                <p>Create and track support requests</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Fast issue resolution</strong>
                <p>Keep your support workflow organized</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <div>
                <strong>Team collaboration</strong>
                <p>Assign tickets to the right employee</p>
              </div>
            </div>
          </div>

          <div className="brand-footer">
            <span>© 2026 SupportHub</span>
            <span>Secure internal access</span>
          </div>

        </div>
      </section>


      {/* Right Section */}
      <section className="login-section">

        <div className="login-card">

          <div className="mobile-logo">
            <div className="mobile-logo-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <strong>SupportHub</strong>
          </div>

          <div className="login-heading">
            <p className="welcome-text">WELCOME BACK</p>

            <h2>Sign in to your account</h2>

            <p>
              Enter your credentials to access the employee support portal.
            </p>
          </div>


          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="input-group">

              <label htmlFor="email">Email address</label>

              <div className="input-wrapper">

                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

            </div>


            {/* Password */}
            <div className="input-group">

              <div className="password-label">
                <label htmlFor="password">Password</label>

                
              </div>

              <div className="input-wrapper">

                <svg
                  className="input-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                </svg>

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Message */}
            {message && (
              <div
                className={`message ${
                  message === "Login successful!"
                    ? "success"
                    : "error"
                }`}
              >
                {message}
              </div>
            )}


            {/* Login button */}
            <button
              type="submit"
              className="login-button"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign in
                  <span className="arrow">→</span>
                </>
              )}
            </button>

          </form>


          <div className="security-note">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>

            <span>Your connection is protected</span>

          </div>

        </div>

      </section>

    </div>
  );
}

function Dashboard({ tickets, setTickets, page, setPage, setLoggedIn }) {
  const [ticketTitle, setTicketTitle] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketPriority, setTicketPriority] = useState("MEDIUM");
  const [ticketMessage, setTicketMessage] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  useEffect(() => {
  fetch(`${API_URL}/tickets`)
  
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch tickets");
      }
      return response.json();
    })
    .then((data) => {

      setTickets(data);
    })
    .catch((error) => {
      console.error("Error fetching tickets:", error);
    });
}, [setTickets]);
const totalTickets = tickets.length;

const openTickets = tickets.filter(
  (ticket) => ticket.status === "OPEN"
).length;

const inProgressTickets = tickets.filter(
  (ticket) => ticket.status === "IN_PROGRESS"
).length;

const resolvedTickets = tickets.filter(
  (ticket) => ticket.status === "RESOLVED"
).length;
const handleStatusChange = async (ticketId, newStatus) => {
  try {
    const response = await 
      fetch(`${API_URL}/tickets/${ticketId}/status?status=${newStatus}`, {
        method: "PUT",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update ticket status");
    }

    const updatedTicket = await response.json();

    setTickets((previousTickets) =>
      previousTickets.map((ticket) =>
        ticket.id === ticketId ? updatedTicket : ticket
      )
    );
  } catch (error) {
    console.error("Error updating ticket status:", error);
  }
};

const handleAssignEmployee = async (ticketId, employeeId) => {
  try {
    const response = await 
      fetch(`${API_URL}/tickets/${ticketId}/employee/${employeeId}`, {
        method: "PUT",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to assign employee");
    }

    const updatedTicket = await response.json();

    

    setTickets((previousTickets) =>
      previousTickets.map((ticket) =>
        ticket.id === ticketId
          ? {
              ...ticket,
              employee: updatedTicket.employee,
            }
          : ticket
      )
    );
  } catch (error) {
    console.error("Error assigning employee:", error);
  }
};
const handleDeleteTicket = async (ticketId) => {
  const ticket = tickets.find((ticket) => ticket.id === ticketId);

  if (!ticket || ticket.status !== "RESOLVED") {
    return;
  }

  const confirmed = window.confirm(
    `Are you sure you want to delete Ticket #${ticketId}?`
  );

  if (!confirmed) {
    return;
  }

  try {
    const response = await fetch(`${API_URL}/tickets/${ticketId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete ticket");
    }

    setTickets((previousTickets) =>
      previousTickets.filter((ticket) => ticket.id !== ticketId)
    );
  } catch (error) {
    console.error("Error deleting ticket:", error);
  }
};
  const handleCreateTicket = async () => {
    if (!ticketTitle.trim() || !ticketDescription.trim()) {
      setTicketMessage("Please enter both title and description.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: ticketTitle,
          description: ticketDescription,
          status: "OPEN",
          priority: ticketPriority,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      const newTicket = await response.json();

      setTickets((previousTickets) => [
        ...previousTickets,
        newTicket,
      ]);

      setTicketTitle("");
      setTicketDescription("");
      setTicketPriority("MEDIUM");
      setTicketMessage("Ticket created successfully!");

      setTimeout(() => {
        setPage("dashboard");
        setTicketMessage("");
      }, 1000);

    } catch (error) {
      console.error("Error creating ticket:", error);
      setTicketMessage("Unable to create ticket.");
    }
  };
  if (page === "employees") {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <strong>SupportHub</strong>
            <small>Employee Support</small>
          </div>
        </div>

        <nav className="sidebar-nav">

          <a
            href="#dashboard"
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </a>

          <a
            href="#tickets"
            onClick={() => setPage("tickets")}
          >
            My Tickets
          </a>

          <a
            href="#create"
            onClick={() => setPage("create")}
          >
            Create Ticket
          </a>

          <a
            className="active"
            href="#employees"
            onClick={() => setPage("employees")}
          >
            Employees
          </a>

        </nav>

        <div className="sidebar-bottom">
          <div className="user-info">
            <div className="avatar">VK</div>

            <div>
              <strong>Vineet Kashyap</strong>
              <small>Employee</small>
            </div>
          </div>
          <button
            className="logout-button"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">TEAM DIRECTORY</p>

            <h1>Employees</h1>

            <p>
              View employees registered in SupportHub.
            </p>
          </div>
        </header>

        <section className="tickets-section">

          <div className="section-header">
            <div>
              <h2>Employee Directory</h2>
              <p>Employees available in the support system</p>
            </div>
          </div>

          <div className="ticket-table">

            <div className="table-header">
              <span>Employee</span>
              <span>Email</span>
              <span>ID</span>
            </div>

            <div className="ticket-row">
              <div>
                <strong>Vineet Kashyap</strong>
                <small>Employee</small>
              </div>

              <span>vineet@example.com</span>

              <span>2</span>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}
  if (page === "tickets") {
  return (
    <div className="dashboard">
      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <strong>SupportHub</strong>
            <small>Employee Support</small>
          </div>
        </div>

        <nav className="sidebar-nav">

          <a
            href="#dashboard"
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </a>

          <a
            className="active"
            href="#tickets"
          >
            My Tickets
          </a>

          <a
            href="#create"
            onClick={() => setPage("create")}
          >
            Create Ticket
          </a>

          <a
            href="#employees"
            onClick={() => setPage("employees")}
          >
            Employees
          </a>

        </nav>

        <div className="sidebar-bottom">
          <div className="user-info">
            <div className="avatar">VK</div>

            <div>
              <strong>Vineet Kashyap</strong>
              <small>Employee</small>
            </div>
          </div>
        </div>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">SUPPORT REQUESTS</p>

            <h1>My Tickets</h1>

            <p>
              View and track all your support requests.
            </p>
          </div>

          <button
            className="create-ticket-btn"
            onClick={() => setPage("create")}
          >
            + Create Ticket
          </button>
        </header>

        <section className="tickets-section">

          <div className="section-header">
            <div>
              <h2>All Tickets</h2>
              <p>Your submitted support requests</p>
            </div>
          </div>

          <div className="ticket-table my-tickets-table">

            <div className="table-header">
              <span>Ticket</span>
              <span>Status</span>
              <span>Priority</span>
              <span>Assigned To</span>
              <span>Action</span>
            </div>

            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <div
                  className="ticket-row"
                  key={ticket.id}
                >

                  <div>
                    <strong>
                      #{ticket.id} {ticket.title}
                    </strong>

                    <small>
                      {ticket.description}
                    </small>
                  </div>

                  <select
                    className="ticket-status-select"
                    value={ticket.status}
                    onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                 >
                    <option value="OPEN">Open</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="RESOLVED">Resolved</option>
                  </select>

                  <span>{ticket.priority || "Not set"}</span>

                  <select
                    className="ticket-status-select"
                    value={ticket.employee ? ticket.employee.id : ""}
                    onChange={(e) =>
                      handleAssignEmployee(ticket.id, Number(e.target.value))
                    }
                  >
                    <option value="">Unassigned</option>
                    <option value="2">Vineet Kashyap</option>
                  </select>

                  {ticket.status === "RESOLVED" && (
                    <div className="ticket-action-menu">
                      <button
                        className="menu-dots-btn"
                        onClick={() =>
                          setOpenMenu(openMenu === ticket.id ? null : ticket.id)
                        }
                      >
                        ⋮
                      </button>

                      {openMenu === ticket.id && (
                        <div className="ticket-action-dropdown">
                          <button
                            onClick={() => {
                              setOpenMenu(null);
                              handleDeleteTicket(ticket.id);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                </div>
              ))
            ) : (
              <div className="ticket-row">
                <span>No tickets found</span>
              </div>
            )}

          </div>

        </section>

      </main>
    </div>
  );
}
if (page === "create") {
  return (
    <div className="dashboard">
      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div>
            <strong>SupportHub</strong>
            <small>Employee Support</small>
          </div>
        </div>

        <nav className="sidebar-nav">

          <a
            href="#dashboard"
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </a>

          <a href="#tickets"
          onClick={() => setPage("tickets")}
          >
            My Tickets
          </a>

          <a
            className="active"
            href="#create"
          >
            Create Ticket
          </a>

          <a href="#employees"
          onClick={() => setPage("employees")}
          >
            Employees
          </a>

        </nav>

        <div className="sidebar-bottom">
          <div className="user-info">
            <div className="avatar">VK</div>

            <div>
              <strong>Vineet Kashyap</strong>
              <small>Employee</small>
            </div>
          </div>
        </div>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">SUPPORT REQUEST</p>

            <h1>Create Ticket</h1>

            <p>
              Submit a new support request to the team.
            </p>
          </div>
        </header>

        <section className="create-ticket-section">

          <div className="create-ticket-card">

            <div className="form-heading">
              <h2>New Support Ticket</h2>

              <p>
                Provide the details of the issue you are facing.
              </p>
            </div>

            <div className="ticket-form">

              <div className="form-group">
                <label>Ticket Title</label>

                <input
                  type="text"
                  placeholder="e.g. Laptop not working"
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>

                <textarea
                  rows="6"
                  placeholder="Describe the issue in detail..."
                  value={ticketDescription}
                  onChange={(e) => setTicketDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label>Priority</label>

                <select
                  value={ticketPriority}
                  onChange={(e) => setTicketPriority(e.target.value)}
                >
                  <option value="LOW">Low</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HIGH">High</option>
                </select>
              </div>

              {ticketMessage && (
                <div className="ticket-message">
                  {ticketMessage}
                </div>
              )}

              <div className="form-actions">

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setPage("dashboard")}
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="submit-ticket-btn"
                  onClick={handleCreateTicket}
                >
                  Create Ticket
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div>
            <strong>SupportHub</strong>
            <small>Employee Support</small>
          </div>
        </div>

        <nav className="sidebar-nav">
          <a className="active" href="#dashboard">Dashboard</a>
          <a
            href="#tickets"
            onClick={() => setPage("tickets")}
          >
            My Tickets
          </a>
          <a
  href="#create"
  onClick={() => setPage("create")}
>
  Create Ticket
</a>
          <a
            href="#employees"
            onClick={() => setPage("employees")}
          >
            Employees
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="user-info">
            <div className="avatar">VK</div>
            <div>
              <strong>Vineet Kashyap</strong>
              <small>Employee</small>
            </div>
          </div>
          <button
            type="button"
            className="logout-button"
            onClick={() => setLoggedIn(false)}
          >
            Logout
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <p className="dashboard-label">OVERVIEW</p>
            <h1>Dashboard</h1>
            <p>Welcome back, Vineet. Here's your support overview.</p>
          </div>

          <button
          className="create-ticket-btn"
          onClick={() => setPage("create")}
          >
          + Create Ticket
          </button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">T</div>
            <div>
              <span>Total Tickets</span>
              <strong>{totalTickets}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon open">O</div>
            <div>
              <span>Open</span>
              <strong>{openTickets}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon progress">P</div>
            <div>
              <span>In Progress</span>
              <strong>{inProgressTickets}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon resolved">R</div>
            <div>
              <span>Resolved</span>
              <strong>{resolvedTickets}</strong>
            </div>
          </div>
        </section>

        <section className="tickets-section">
          <div className="section-header">
            <div>
              <h2>Recent Tickets</h2>
              <p>Track your latest support requests</p>
            </div>

            <button
              className="view-all-btn"
              onClick={() => setPage("tickets")}
           >
              View all
            </button>
          </div>

          <div className="ticket-table">
            <div className="table-header">
              <span>Ticket</span>
              <span>Status</span>
              <span>Assigned To</span>
            </div>

            {tickets.length > 0 ? (
  tickets.map((ticket) => (
    <div className="ticket-row" key={ticket.id}>
      <div>
        <strong>#{ticket.id} {ticket.title}</strong>
        <small>{ticket.description}</small>
      </div>

      <span className="status-badge progress-badge">
        {ticket.status === "IN_PROGRESS"
          ? "In Progress"
          : ticket.status === "OPEN"
          ? "Open"
          : ticket.status === "RESOLVED"
          ? "Resolved"
          : ticket.status}
      </span>

      <span>
        {ticket.employee
          ? ticket.employee.name
          : "Unassigned"}
      </span>
    </div>
  ))
) : (
  <div className="ticket-row">
    <span>No tickets found</span>
  </div>
)}
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;