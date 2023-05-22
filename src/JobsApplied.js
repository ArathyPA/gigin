import {useState,useEffect} from "react"
import Login from "./Login";
import './App.css';
import { useNavigate } from "react-router-dom";
export default function Jobs() {
  const history=useNavigate();
  const handleclick=()=>{history('/jobs')}
  async function fetchJobs() {
    const response = await fetch("https://dev123.gigin.ai/abc/index.php/v4/gigs/postings/list?limit=10&offset=0&is_precal_done=1&scope=recomm?employee_id=221516");
    const jsonData = await response.json();
    console.log(jsonData);
  }

  

  useEffect(() => {
    fetchJobs();
  },[]);

  return (
    <div>  
      <div className="nav">   
     <h3 onClick={handleclick}>Recommended Jobs</h3>
     <h3>Applied Jobs</h3>  
     </div>    
     <h1>Applied Jobs</h1>
    </div>

  );
}
