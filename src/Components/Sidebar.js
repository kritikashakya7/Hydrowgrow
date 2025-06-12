import React from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  Users,
  LogOut
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo"><span>Hydro</span>Grow</h2>
      <nav>
        <ul>
          <li className="active">
            <LayoutDashboard size={18} />
            Dashboard
          </li>
          <li>
            <Link to="/AdminOrder" className="sidebar-link">
              <ShoppingCart size={18} />
              Orders
            </Link>
          </li>
          <li>
            <Link to="/Customers" className="sidebar-link">
              <Users size={18} />
              Customers
            </Link>
          </li>
        </ul>
      </nav>
      <button className="logout-btn">
        <LogOut size={18} /> Logout
      </button>
    </aside>
  );
};

export default Sidebar;
