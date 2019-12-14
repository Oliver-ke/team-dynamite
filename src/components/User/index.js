import React from "react";
import { Navbar, Image, Button } from "react-bootstrap";
import "./index.css";
import Logo from "../../images/logo.png";

const index = () => {
  return (
    <div>
      <Navbar variant="dark" className="dashboard-nav">
        <div className="brand-container">
          <Navbar.Brand href="#home" style={{ color: "#0D1B4C" }}>
            <img
              alt=""
              src={Logo}
              width="110"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
        </div>
        <div className="dashboard-nav-items">
          <span style={{ marginRight: "10px" }}>JAME BLAKE</span>
          <Image
            src="https://images.fatherly.com/wp-content/uploads/2019/07/what-boys-need-today.jpg?q=65&enable=upscale&w=600"
            height="40"
            width="40"
            alt=""
            roundedCircle
            style={{ marginRight: "50px" }}
          />
        </div>
      </Navbar>

      <div className="user-panic-container">
          <p> Welcome James Blake, Click the panic button to send a Panic Alert!</p>
          <p> Add a <b>Panic</b> description if you have time..</p>
          <textarea placeholder=" Add your panic description if you have time..." rows="10" cols="50" >

          </textarea>
        <div className="user-panic-btn-container">
          <Button className="btn btn-danger user-panic-btn">Panic!</Button>
        </div>
      </div>
    </div>
  );
};

export default index;
