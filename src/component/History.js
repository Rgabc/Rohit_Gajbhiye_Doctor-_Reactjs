import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Profile.css"
import alandr from "./Image/alandr.jpg"
const History=()=>{
    return(<>
    <Navbar/>
    <div className="container">
    <p style={{fontSize:"6rem",color:"#007569"}}>&#8406;</p><h2 className="profile" style={{color:"#007569"}}>Appointment</h2>
    <div className="container-sm">
        <div className="userBox">
          
            <img src={alandr} className="alan"/>
            <h5>Alan</h5>
            <h6>35 Years old</h6>
        </div>
        <div className="history">
        <button>Update Setting</button>
            
            <div className="history1"><h5>Covid Test<br/>
            <p>Dr Zeena</p>
            </h5>
            <h6>30 March</h6>
            </div><br/>
            <div className="history1 history2"><h5>Dentist<br/>
            <p>Dr Calvin Carlo</p>
            </h5>
            <h6>31 May</h6>
            </div>
            
            
        </div>
        <table className="tableData">
        <tbody>
            <tr>
            <th><span>👤</span> Gender</th>&nbsp;
            <td>Male</td>
        </tr>
            <tr>
            <th>📅 Dob</th>&nbsp;
            <td>31/03/1996</td>
        </tr>
            <tr>
            <th><span>📱</span>phone No</th>&nbsp;
            <td>7245854525</td>
        </tr>
            <tr>
            <th><span>📃</span> Address</th>&nbsp;
            <td>Australia</td>
        </tr>
            <tr>
            <th><span>🩸</span> Blood Group</th>&nbsp;
            <td>B<sup>+ve</sup></td>
        </tr>
            
        </tbody>
        
    </table>

    </div>
   

   
    </div>




    <Footer color={"#007569"}/>
    </>)
}
export default History;
