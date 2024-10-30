import React from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';

const Dashboard = () => {
  return (
    <>
    <Header />
    <Sidebar />
    <main id="main" className="main">
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            {/* <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li> */}
            <li className="breadcrumb-item">Admin</li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>
      
    </main>
    </>
    );
  };
  
  export default Dashboard;
  