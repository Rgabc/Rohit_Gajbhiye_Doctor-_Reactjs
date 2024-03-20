import React,{useState} from "react";
import "./Home.css"
import drpawan from "./Image/drpawan.png"
import drwanita from "./Image/drwanita.png"
import drudhara from "./Image/drudhara.png"
import "./All.css"
import Footer from "./Footer";
import Navbar from "./Navbar";

const AllDr=()=>{
    const[heart,setHeart]=useState(true)

    return(<>
    <Navbar/>

    
    <div className="container" style={{textAlign:"center"}}>
        
        <h5 className="modal-title "style={{ color: "#007569"}}>Our Doctors</h5>
        <span style={{color:"#b1b1b1"}}>Great doctor if you need your family member to get effective immediate<br/>

assistance, emergency treatment or a simple consultation.</span><br/><br/>
<div className="container-sm">
        <div class="d-flex flex-row mb-3 flex-wrap option">
  <div class="p-2 category1"><p>All</p></div>
  <div class="p-2 category"><p>Nurologist</p></div>
  <div class="p-2 category"><p>Cardiologist</p></div>
  <div class="p-2 category"><p>Dermotologist</p></div>
</div>

        </div>
        <div class="d-flex flex-row mb-3  flex-wrap flex2 " >
  <div className="p-2 flex2Data endo">
  <img src={drpawan} className="rounded drpawan"/>
    <h4>Dr.Pawan</h4>

    <div className="heart" ><span onClick={()=>{setHeart(!heart)}} className={heart? "noColor":"color"}>♡</span>
    <span onClick={()=>{setHeart(!heart)}} className={heart? "color":"noColor"}>🤍</span>
         </div>
<p>Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero et
velit interdum, ac mattis.</p>
<div className="container-sm Book"  > <h5>Book</h5></div>
<div className="container-sm rating"  > <h6>★ <b>5.0</b></h6></div>

</div>
  <div className="p-2 flex2Data endo">
  <img src={drwanita} className="rounded drpawan"/>
    <h4>Dr.Wanitha</h4>

    <div className="heart" ><span onClick={()=>{setHeart(!heart)}} className={heart? "noColor":"color"}>♡</span>
    <span onClick={()=>{setHeart(!heart)}} className={heart? "color":"noColor"}>🤍</span>
         </div>
<p>Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero et
velit interdum, ac mattis.</p>
<div className="container-sm Book"  > <h5>Book</h5></div>
<div className="container-sm rating"  > <h6>★ <b>5.0</b></h6></div>
  </div>
  <div className="p-2 flex2Data endo">
  <img src={drudhara} className="rounded drpawan"/>
    <h4>Dr.Udara</h4>

    <div className="heart" ><span onClick={()=>{setHeart(!heart)}} className={heart? "noColor":"color"}>♡</span>
    <span onClick={()=>{setHeart(!heart)}} className={heart? "color":"noColor"}>🤍</span>
         </div>
<p>Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero et
velit interdum, ac mattis.</p>
<div className="container-sm Book"  > <h5>Book</h5></div>
<div className="container-sm rating"  > <h6>★ <b>5.0</b></h6></div>
  </div>
  <div className="p-2 flex2Data endo"><img src={drpawan} className="rounded drpawan"/>
    <h4>Dr.Pawan</h4>

    <div className="heart" ><span onClick={()=>{setHeart(!heart)}} className={heart? "noColor":"color"}>♡</span>
    <span onClick={()=>{setHeart(!heart)}} className={heart? "color":"noColor"}>🤍</span>
         </div>
<p>Jorem ipsum dolor, consectetur
adipiscing elit. Nunc v libero et
velit interdum, ac mattis.</p>
<div className="container-sm Book"  > <h5>Book</h5></div>
<div className="container-sm rating"  > <h6>★ <b>5.0</b></h6></div></div>
</div>
<button className="optionbtn">See More</button>
    </div><br/>
    <Footer color={"#007569"}/>
    </>)
}
export default AllDr;