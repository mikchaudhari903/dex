import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Contact Us</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to='/admin/dashboard' >Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Contact Us</li>
          </ol>
        </nav>
      </div>
    </main>
    </>
    );
  };
  
  export default Contact;
  