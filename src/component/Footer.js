import React from "react";
import "./Footer.css"
const Footer=({color})=>{
    console.log(color)
    const bg={
        background:color,
        color:"white"
    }
    
    return(<>
    <footer style={bg}>
        <div className="container footerBox">
        <div class="d-flex flex-row mb-3 footerFlex">
  <div class="p-2"><h1>Doctor +</h1></div>
  <div class="p-2"style={{width:"20rem"}}><p>Thank you for visiting my website, and I look forward

to being a part of your wellness journey. Let's thrive

together!</p></div>
  <div class="p-2">📞 +91-1234567890<br/>
  ✉contact@gmail.com<br/>
 <p style={{color:"blue"}}>ⓕ &nbsp;▶ &nbsp;✉</p> 
</div>
</div>
        </div>
    </footer>

    </>)
}
export default Footer 