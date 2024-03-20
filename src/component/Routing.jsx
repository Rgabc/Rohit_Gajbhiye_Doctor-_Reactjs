import React from "react";
import {Routes,Route} from "react-router-dom"

import Home from "./Home"
import All from "./All"
import Signup from "./Signup";
import Profile from "./Profile";
import Appointment from "./Appointment";
import Payment from "./Payment";
import Confirm from "./Confirm";
import History from "./History";


// import Edit from "./Edit";
const Routing=()=>{
    return(<>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/alldr" element={<All/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/login" element={<Profile/>}/>
        <Route exact path="/appoint" element={<Appointment/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route exact path="/confirm" element={<Confirm/>}/>
        <Route exact path="/appointHistory" element={<History/>}/>
    
        {/* <Route exact path="/edit/:userid" element={<Edit/>}/> */}
    </Routes>
    </>)
}
export default Routing;