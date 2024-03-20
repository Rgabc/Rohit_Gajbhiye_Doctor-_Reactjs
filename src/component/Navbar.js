import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
const Navbar=()=>{
    const navigate=useNavigate()


    return(<>
      
  
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid" style={{background:"#007569"}}>
    <a className="navbar-brand" href="#">
   
    <h2 style={{color:"white"}}> Doctor +</h2>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <form className="d-flex " role="search">
   
    
    <input
          className="form-control me-2 text-body-tertiary "
          type="search"
          
          placeholder=  " ⌕    Search Doctor"
          aria-label="Search"
        />
       
        {/* <button className="btn btn-outline-success" type="submit">
          Search
        </button> */}
      </form>

    <div className="collapse navbar-collapse home" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item" >
          <a className="nav-link active text-white"  aria-current="page" onClick={()=>{navigate("/")}}>
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-white" href="#">
            Service
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-white" href="#">
            About Us
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link active text-white" onClick={()=>{navigate("/signup")}}>
            Register
          </a>
        </li>
         <li className=" text-bg-light p-1" type="submit" >
          <h6 onClick={()=>{navigate("/login")}}>Login</h6>
        </li>
        {/* <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li> */}
      </ul>
   
    </div>
  </div>
</nav>

    
    </>)
}
export default Navbar;