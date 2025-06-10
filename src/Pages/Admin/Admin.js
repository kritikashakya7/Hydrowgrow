import React from "react";
import "../../css/Admincss/Admin.css";

import {
  LayoutDashboard,
  ShoppingCart,
  PackageOpen,
  ListOrdered,
  Users,
  LogOut
} from "lucide-react";
const Admin = () => {
  return (
    <>

      <div className="admin-container">
        <aside className="sidebar">
          <h2 className="logo"><span>Hydro</span>Grow</h2>
          <nav>
            <ul>
              <li className="active"><LayoutDashboard size={18} /> Dashboard</li>
              <li><ShoppingCart size={18} /> Orders</li>
              <li><PackageOpen size={18} /> Products</li>
              <li><ListOrdered size={18} /> Categories</li>
              <li><Users size={18} /> Customers</li>
            </ul>
          </nav>
          <button className="logout-btn"><LogOut size={18} /> Logout</button>
        </aside>

        <main className="main-content">
          <header>
            <h1>Welcome, Admin!</h1>
          </header>

          <section className="summary-cards">
            <div className="card blue"><Users size={18} /> Customers </div>
            <div className="card orange"><ShoppingCart size={18} /> Orders </div>
            <div className="card yellow"><ListOrdered size={18} /> Categories </div>
            <div className="card green"><PackageOpen size={18} /> Products </div>
          </section>

          <section className="transactions">
            <h2>Recent Transactions</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer Name</th>
                  <th>Order Date</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default Admin;
