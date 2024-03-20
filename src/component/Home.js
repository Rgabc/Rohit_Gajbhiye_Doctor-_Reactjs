import React, { useEffect, useState } from "react";
// import Edit from "./Edit";
import "./Home.css"
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import starshadow from "./Image/starshadow.png"
import star from "./Image/star.png"
import ladiesdr from "./Image/ladiesdr.png"
import circlepic from "./Image/circlepic.png"
import circlepic2 from "./Image/circlepic2.png"
import expdr from "./Image/expdr.png"
import entdr from  "./Image/entdr.png"
import endodr from "./Image/endodr.png"
import pulmodr from "./Image/pulmodr.png"
import veterdr from "./Image/veterdr.png"
import radiodr from "./Image/radiodr.png"
import drpawan from "./Image/drpawan.png"
import drwanita from "./Image/drwanita.png"
import drudhara from "./Image/drudhara.png"
import fb1 from "./Image/fb1.png"
import fb2 from "./Image/fb2.png"
import fb3 from "./Image/fb3.png"

const Home = () => {
    const navigate = useNavigate();
    const[heart,setHeart]=useState(true)

    return (<>
        <Navbar />

        <section>
            <div class="container-md">

                <div class="container text-center">
                    <div class="row" >
                        <div class="col-md-4 "><h1 style={{ color: "#007569", width: "30rem", textAlign: "left" }}>Find your near by doctor

                            & book your appointment

                            & get treatment fast
                        </h1></div>
                        <div class="col-md-4 offset-md-4 "><img src={starshadow} class="rounded starshadow " alt="..." />
                            <img src={star} class="rounded  star " alt="..." />
                            <img src={ladiesdr} class="rounded  ladiesdr " alt="..." />
                            <div class="container-sm drcircle" style={{ height: "9rem", width: "9rem", borderRadius: "50%" }}>
                                <img src={circlepic} class="rounded circlepic  " alt="..." />
                                <img src={circlepic} class="rounded circlepic1  " alt="..." />
                                <img src={circlepic2} class="rounded circlepic2  " alt="..." />
                                <img src={circlepic2} class="rounded circlepic2_1  " alt="..." />

                                <h6 className="drcircle_title"><b>3.5k+ Plus</b></h6>
                                <p className="drcircle_title2">Happy Patient</p>
                            </div>
                        </div>
                        <div class="col-md-3 offset-md-3 firstform" ><h5 style={{ color: "#276a7b", margin: ".5rem" }}>Let's Find Your Perfect Doctor</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Appointment Type
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control w-50 forminput"
                                        placeholder="All Type                       &#8897;"
                                    />
                                </div>
                                <div className="mb-3 patientlabel" >
                                    <label htmlFor="exampleInputPassword1" className="form-label" >
                                        Patient Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control w-50 forminput1 "
                                        placeholder="Enter Patient Name     &#8897;"
                                    />
                                </div>

                                <button onClick={()=>{navigate("/appoint")}} type="submit" className="btn btn-primary booking" style={{ background: "#276a7b" }}>
                                    Booking Now &#129134;
                                </button>
                            </form>


                        </div>
                    </div>


                </div>

                <div className="threesteps container-sm">
                    <div className="title2 container-sm"><h3>Easy Step's To book Your Appointment</h3></div>
                    <div class="container-sm onecircle " style={{
                        height: "11rem", width: "11rem", borderRadius: "50%", background: "white",
                        boxShadow: "0px 2px 0px 2px rgba(90, 80, 80, 0.249)", textAlign: "center"
                    }}>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Select the location <br />

                            and search near by

                            doctor</p>
                        <div
                            className="smallonecircle"><b>1</b>

                        </div>


                    </div>
                    <div class="container-sm twocircle " style={{
                        height: "11rem", width: "11rem", borderRadius: "50%", background: "white",
                        boxShadow: "0px 2px 0px 2px rgba(90, 80, 80, 0.249)", textAlign: "center"
                    }}>
                        {/* <i className="fa-solid fa-location-dot"></i> */}

                        <p>
                            <b>🕒</b> <br />
                            Schedule and Book <br />

                            your date and time<br />

                            for appointment</p>
                        <div
                            className="smalltwocircle"><b>2</b>

                        </div>


                    </div>
                    <div class="container-sm threecircle " style={{
                        height: "11rem", width: "11rem", borderRadius: "50%", background: "white",
                        boxShadow: "0px 2px 0px 2px rgba(90, 80, 80, 0.249)", textAlign: "center"
                    }}>
                        {/* <i className="fa-solid fa-location-dot"></i> */}

                        <p>

                            Easy way to make

                            payment in <br />

                            multiple getway</p>
                        <div
                            className="smallthreecircle"><b>3</b>

                        </div>


                    </div>

                </div>
            </div>
        </section>
        <section className="secondSection" >
            <div class="container-sm expBg" >
                <img src={expdr} className="rounded expdr"/>

            </div>
            <div className="continer-sm expTitle">
                <span style={{ color: "#007569" }}>
                    <h4>Experienced doctor analyse the patient<br />
                        giving them aproper treatment</h4>
                </span>
                <span style={{color:"#b1b1b1"}}>Doctor availability</span><br/>
                <span style={{color:"#b1b1b1"}}>Treatment & Consulting
                </span><br/
                >
                <span style={{color:"#b1b1b1"}}>
                    Top Specialist doctor
                </span>
                <span style={{color:"#b1b1b1"}}><br/>
                    Apply coupon for treatment</span>
                    
                    <button type="submit" className="btn btn-primary bookAppoint" style={{ background: "#276a7b" }}>
                                    Book Appointment
                                </button>
            </div>
        </section>
<section className="thirdSection" >
    <div className="container">
        <h5 className="modal-title" style={{ color: "#007569" }}>Variouse specialist are here you to take care of your Health</h5>
        <span style={{color:"#b1b1b1"}}>Doctors are available at any time to care your health</span>
        <div className="d-flex flex-row mb-3 flex-wrap flex1" >
  <div className="p-2 flex1Data ent "><h4>ENT<br/>
Specialist</h4>
<p>treating disorders and
other issues related to the
ear, nose, throat, and
related head and neck</p>
<div className="container-sm readMore"  > <p>Read More</p></div>
<img src={entdr} className="rounded entdr"/>
</div>
  <div className="p-2 flex1Data endo"><h4>Specialist<br/>
Endocrinologist</h4>
<p>Patients with<br/>
diabetes and<br/>
thyroid issues are<br/>
treated</p>
<div className="container-sm readMore"  > <p>Read More</p></div>
<img src={endodr} className="rounded endodr"/></div>
  <div className="p-2 flex1Data onco"><h4>Specialist<br/>
Oncologists</h4>
<p>examine, diagnose,<br/>
and treat<br/> cancer by <br/>chemotherapy  </p>
<div className="container-sm readMore" > <p>Read More</p></div>
<img src={ladiesdr} className="rounded oncodr"/></div>
  <div className="p-2 flex1Data endo"><h4> Specialist<br/>
Pulmonologist</h4>
<p>treating diseases of<br/>
the respiratory<br/>
system in both<br/>
men and women
</p>
<div className="container-sm readMore"  > <p>Read More</p></div>
<img src={pulmodr} className="rounded pulmodr"/></div>
  <div className="p-2 flex1Data onco"><h4>Specialist<br/>
Veterinarian</h4>
<p>treats diseases,<br/>
problems, and<br/>
injuries in <br/>humans.</p>
<div className="container-sm readMore"  > <p>Read More</p></div>
<img src={veterdr} className="rounded veterdr"/></div>
  <div className="p-2 flex1Data ent"><h4>Specialist<br/>
Radiologist</h4>
<p>treat diseases in
both humans<br/>
with the help<br/> of new <br/> technology</p>
<div className="container-sm readMore"  > <p>Read More</p></div>
<img src={radiodr} className="rounded veterdr"/></div>
</div>

    </div>

</section>
<section className="forthSection"  >
    <div className="container">
        <h5 className="modal-title "style={{ color: "#007569" }}>Our Top Rated Doctors</h5>
        <span style={{color:"#b1b1b1"}}>Top Rated Doctors are available at any time to care your health</span>
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
<div className="container-sm Book"  > <h5 onClick={()=>{navigate(`/alldr`)}}>Book</h5></div>
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



    </div>

</section>
<section className="fifthSection" >
    <div className="container">
    <h5 className="modal-title "style={{ color: "#007569" }}>Customers Feedback</h5>
    <h6 className="modal-title">Our users share stories of satisfaction, trust,<br/>
and exceptional experiences. Explore now!</h6>
<div className="container-sm pr_btn"> <button className="prev"><p>Previous</p></button><button className="next"><p>Next</p></button></div>

    <div class="d-flex flex-row mb-3 flex3 flex-wrap">
  <div class="p-2 flex3Data">
    <img src={fb1} className="rounded fb1"/>
<h5 className="modal-title" style={{ color: "#007569" }}>Natalie Summers</h5>
<p>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry s standard
dummy text ever since the 1500s</p>
<div className="container-sm FeedbackRating"  > <h6>★★★★★ </h6>
</div>

  </div>
  <div class="p-2 flex3Data fb2">  <img src={fb2} className="rounded fb1"/>
<h5 className="modal-title" style={{ color: "#007569" }}>Natalie Summers</h5>
<p>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry s standard
dummy text ever since the 1500s</p>
<div className="container-sm FeedbackRating"  > <h6>★★★★ </h6>
</div></div>
  <div class="p-2 flex3Data">  <img src={fb3} className="rounded fb1"/>
<h5 className="modal-title" style={{ color: "#007569" }}>Natalie Summers</h5>
<p>Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem
Ipsum has been the industry s standard
dummy text ever since the 1500s</p>
<div className="container-sm FeedbackRating"  > <h6>★★★★★ </h6>
</div></div>
</div>

    </div>

</section>
<Footer color={"black"}/>

    </>)


}
export default Home;