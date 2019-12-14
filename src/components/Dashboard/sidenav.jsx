import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Sidenav = props => {
  return (
    <div style={{ zIndex: "1000000" }} className="entire-sidenav">
      <div className="sidenav-container" style={{ backgroundColor: "#E9EEF4" }}>
        {/* <div><FontAwesomeIcon icon={faWindowClose} style={{ fontSize: "35px", position: "absolute", right: "0"}} /></div> */}
        <div style={{marginTop: "15%", }}>
          <div>
            <Link to="/dashboard/" className="sidenav-links">
              Panic Alerts
            </Link>
          </div>

          <div>
            <Link to="/dashboard/pinnedfeeds" className="sidenav-links">
              Pinned Panics
            </Link>
          </div>

          <div>
            <Link to="/dashboard/users" className="sidenav-links">
              Create Users
            </Link>
          </div>
          <div>
            <Button className="btn-danger">Logout</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
