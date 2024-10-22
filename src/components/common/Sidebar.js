import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Sidebar = () => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item active">
          <Link className="nav-link collapsed " to="/admin/dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        {/* End Dashboard Nav */}

        <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse">
            <i className="bi bi-journal-text"></i>
            <span>Forms</span>
            <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
          <ul id="forms-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/forms-elements">
                <i className="bi bi-circle"></i><span>Form Elements</span>
              </Link>
            </li>
            <li>
              <Link to="/forms-layouts">
                <i className="bi bi-circle"></i><span>Form Layouts</span>
              </Link>
            </li>
            <li>
              <Link to="/forms-editors">
                <i className="bi bi-circle"></i><span>Form Editors</span>
              </Link>
            </li>
            <li>
              <Link to="/forms-validation">
                <i className="bi bi-circle"></i><span>Form Validation</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Forms Nav */}

        <li className="nav-item">
            <Link className="nav-link collapsed" data-bs-target="#users-nav" data-bs-toggle="collapse">
            <i className="bi bi-people"></i>
            <span>Users</span>
            <i className="bi bi-chevron-down ms-auto"></i>
            </Link>
          <ul id="users-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/forms-elements">
                <i className="bi bi-circle"></i><span>Create</span>
              </Link>
            </li>
            <li>
              <Link to="/forms-layouts">
                <i className="bi bi-circle"></i><span>Index</span>
              </Link>
            </li>
          </ul>
        </li>
        {/* End Forms Nav */}

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/contact">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
        {/* End Contact Page Nav */}
        
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/faq">
            <i className="bi bi-question-circle"></i>
            <span>F.A.Q</span>
          </Link>
        </li>
        {/* End F.A.Q Page Nav */}

        <li className="nav-item">
          <Link className="nav-link collapsed" to="/admin/profile">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </Link>
        </li>
        {/* End Profile Page Nav */}


      </ul>
    </aside>
  );
}

export default Sidebar;
