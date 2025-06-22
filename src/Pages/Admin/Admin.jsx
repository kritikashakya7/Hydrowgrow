import React from "react";
import "../../css/Admincss/Admin.css";
import Sidebar from "../../Components/Sidebar";
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
    
<Sidebar/>
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
