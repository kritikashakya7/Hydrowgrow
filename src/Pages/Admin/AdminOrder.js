import React from "react";
import "../../css/Admincss/AdminOrder.css";
import Sidebar from "../../Components/Sidebar";

import {
  LayoutDashboard,
  ShoppingCart,
  PackageOpen,
  ListOrdered,
  Users,
  LogOut
} from "lucide-react";
const AdminOrder = () => {
  return (
    <>

      <div className="admin-container">
        <Sidebar/>
        <main className="main-content">
          <header>
            <h1>Welcome, Admin!</h1>
          </header>

          <section className="transactions">
            <h2>Orders</h2>
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              
            </table>
          </section>
        </main>
      </div>
    </>
  );
};

export default AdminOrder;
