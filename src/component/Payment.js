import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "./Appoint.css"


const Payment=()=>{
    const navigate=useNavigate()
    return(<>
    <Navbar/>
    <div className="container payment">
    <p style={{fontSize:"6rem",color:"#007569"}}>&#8406;</p><h2 className="profile" style={{color:"#007569"}}> Payment Method</h2>

    <input type="radio" /> <label>💳 Credit/Debit Card:</label>
    <div className="conatiner-sm creditBox">
       <div className="cName cardName">
        <label>Name on card</label>
        <input type="text" placeholder="John.s"/>
       </div>
       <div className="cName cardNumber">
        <label>Card Number</label>
        <input type="text" placeholder="123-456-258"/>
       </div>
       <div className="cName exp">
        <label>expire Date</label>
        <input type="text" placeholder="02/35"/>
       </div>
       <div className="cName cvv">
        <label>CVC/CVV</label>
        <input type="password" placeholder="***"/>
       </div>
       <button>Cancel</button> <button onClick={()=>{navigate("/confirm")}}>Next</button>

    </div>

    <div className="container-sm paypal">
        <input type="radio"/><label><i class="fa-brands fa-cc-paypal"></i><b>Paypal</b></label>

    </div>
    <input type="radio"/><label><b>PrePayment</b></label>



    </div><br/>

    <Footer color={"#007569"}/>
    </>)
}

export default Payment;
