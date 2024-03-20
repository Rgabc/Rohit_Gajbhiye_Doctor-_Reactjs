import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Appoint.css"

const Appointment=()=>{
    const navigate=useNavigate()
   
   return(<>
   <Navbar/>
   <div className="container">
    <h1 className="modal-title"style={{ color: "#007569",textAlign:"center"}} >Book Your Appointment</h1>
    <p style={{textAlign:"center"}}>Great doctor if you need your family member to get effective immediate<br/>

assistance, emergency treatment or a simple consultation.</p>
<div className="container-sm formBox" style={{border:"solid 1px black"}}>
<h5>Book Your Appointment</h5>
        <form className="appointForm" >
            <label>Patient name</label><br/>
            <input className="patient" required placeholder="Patient Name" type="text"/><br/>
            <label>Department</label><br/>
          <select>
            <option> select Department</option></select><br/>
            <label> Your Email</label><br/>
           <input type="email" placeholder="Email"/><br/>
           <div className="sideSec"><br/>
           <select>
            <option> select Department</option></select><br/>
            <label> Phone No</label><br/>
           <input type="number" placeholder="Phone No"/><br/><br/>

           </div>
           <label>Comments:</label><br/>
           <textarea placeholder="You Message"></textarea><br/><br/>
           <button onClick={()=>{navigate("/payment")}}>Booking Appointment</button><br/><br/>
        </form>

</div>


   </div><br/>


<Footer color={"#007569"}/>
    </>)
}
export default Appointment;