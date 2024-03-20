import React,{useState,useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Signup.css"
const Signup=()=>{
    const getData=()=>{
        const Data= localStorage.getItem("reg");
       
        if(Data){
            return JSON.parse(Data);
        }
        else{ return[]}
       
    }
    const[user,setUser]=useState({id:Math.round(Math.random()*1000),name:"",age:"",gender:"",dob:"",num:"",add:"",blood:""})
    const[data,setData]=useState(getData())
    // const[name,setName]=useState();
    // const[age,setAge]=useState();
    // const[gender,setGender]=useState();
    // const[dob,setDob]=useState();
    // const[num,setNum]=useState();
    // const[add,setAdd]=useState();
    // const[blood,setBlood]=useState();
    console.log(data)
    const update=async (e)=>{
      setUser(await {...user,[e.target.name]:e.target.value})
     
  }

     const submitHandler= async(e)=>{
        e.preventDefault();
        await setData([...data,user]);
        setUser({name:""})

     }
     
     useEffect(()=>{
        localStorage.setItem("reg",JSON.stringify(data))
     },[data])

      
    return(<>
    <Navbar/>
    <div className="container-sm">
    <form onSubmit={submitHandler} style={{border:"solid black 2px"}}>
        <h4 className="modal-title reg" style={{color:"#007569"}}>Register</h4>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      Name 
    </label>
    <input
    name="name"
      type="text"
      className="form-control signupData"
      onChange={update}value={user.name}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="age" className="form-label signTitle">
      age
    </label>
    <input
      type="number"
      className="form-control signupData"
      onChange={update}value={user.age}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      gender
    </label>
    <input
      type="text"
      className="form-control signupData"
      onChange={update}value={user.gender}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      DOB
    </label>
    <input
      type="Date"
      className="form-control signupData"
      onChange={update}value={user.dob}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      Phone No 
    </label>
    <input
      type="Number"
      className="form-control signupData"
      onChange={update}value={user.num}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      Address 
    </label>
    <input
      type="text"
      className="form-control signupData"
      onChange={update}value={user.add}
    />
  </div><br/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label signTitle">
      Blood Group
    </label>
    <input
      type="text"
      className="form-control signupData"
      onChange={update}value={user.blood}
    />
  </div><br/>
  
  <button type="submit" className="btn btn-primary signbtn">
    Submit
  </button>
</form>


    </div>



    <Footer color={"#007569"}/>
    </>)
}
export default Signup;