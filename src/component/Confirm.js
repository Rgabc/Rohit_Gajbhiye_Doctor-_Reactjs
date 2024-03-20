import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import check from "./Image/check.jpg"
import dralan from "./Image/dralan.jpg"
import "./Appoint.css"
import { useNavigate } from "react-router-dom";
const Confirm=()=>{
    const navigate=useNavigate();
    return(<>
    <Navbar/>
    <div className="container ">
        <img className="check" src={check}/>

        <div className="container-sm">
        <h5 className="modal-title "style={{ color: "#007569",textAlign:"center"}}>Your Appointment Booked Succesfully</h5><br/>

        <div className="conatiner-sm checkBox">
            <img className="finalpic" src={dralan}/>
            <div className="conatiner-sm finalTitle">
                <h5>Dr John</h5>
                <p>Eye Care<br/>Newyork,USA</p><i className="fa-solid fa-location-dot"></i>
            </div>
            <table className="table1 table2">
        <tbody>
            <tr>
            <th>Booking Date:</th>&nbsp;
            <td>Sun, 30 Apr 2024</td>
        </tr>
            <tr>
            <th>Booking Time:</th>&nbsp;
            <td>10:00AM to 11:00 AM</td>
        </tr>
            <tr>
            <th>Type of consultation:</th>&nbsp;
            <td>Clinic Consulting</td>
        </tr>
           
            
        </tbody>
        
    </table>



            <button onClick={()=>{navigate("/")}}>Back To Home</button><br/><br/>

        </div><br/>


        </div>

    </div>



    <Footer color={"#007569"}/>
    </>)
}
export default Confirm;