import React from 'react';
import "../../css/Admincss/Customers.css";
import Sidebar from "../../Components/Sidebar";

const Customers = () => {
  return (
    <div className="admin-container">
      <Sidebar />
      <main className="main-content">
        <header>
          <h1>Welcome, Admin!</h1>
        </header>

        <section className="transactions">
          <h2>Customers</h2>
          <table>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button className="delete-btn">
                    🗑 Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default Customers;
