import React,{useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Profile.css"
import alandr from "./Image/alandr.jpg"
import { useNavigate } from "react-router-dom";
const Profile=()=>{
    const navigate=useNavigate()
    const[heart,setHeart]=useState(true)


    return(<>
    <Navbar/>
    <div className="container">
    <p style={{fontSize:"6rem",color:"#007569"}}>&#8406;</p><h2 className="profile" style={{color:"#007569"}}> User Profile</h2>
    <div className="container-sm">
        <div className="userBox">
          
            <img src={alandr} className="alan"/>
            <h5>Alan</h5>
            <h6>35 Years old</h6>
        </div>
        <div className="his">
            <div className="appoint" onClick={()=>{navigate("/appointHistory")}}><i class="fa-solid fa-calendar-days"></i><h6>Appointment</h6>
            <p>| ❯</p>
            </div>
            <div className="appoint"><i class="fa-solid fa-notes-medical"></i><h6>Saved Doctors</h6>
            <p>| ❯</p>
            </div>
            <div className="appoint"><i class="fa-solid fa-clock-rotate-left"></i><h6>Patient Health History</h6>
            <p>| ❯</p>
            </div>
            <button onClick={()=>{setHeart(!heart)}}>Update Setting</button>
        </div>
        <table className="table1">
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
    <div className={ heart? "none":" conatiner-sm updateSetting" }>
    <button onClick={()=>{setHeart(!heart)}}>Update Setting</button>
    <h5>Personal Information:</h5>
        <form>
            <label> Full Name</label><br/>
           <input type="text" placeholder="Full Name"/><br/>
            <label> Your Email</label><br/>
           <input type="email" placeholder="Email"/><br/>
           <div className="sideSec">
           <label>Last Name</label><br/>
           <input type="text" placeholder="Last Name"/><br/>
            <label> Phone No</label><br/>
           <input type="number" placeholder="Phone No"/><br/>

           </div>
           <label>Your bio Here:</label><br/>
           <textarea placeholder="Bio"></textarea>
        </form>


    </div>

   
    </div>
    <Footer color={"#007569"}/>
    
    </>)
}
export default Profile;