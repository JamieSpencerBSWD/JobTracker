import React, { useEffect, useState } from 'react'
import Job from '../components/Job';
import './jobtracker.css'

const JobTracker = () => {
    //Store jobs in State array.
    //Iterate/map over jobs and pass down each jobs information to the Job component.
    //Display those jobs here.

    //The role of this file is to display, Edit, Add, Remove, and Update Job Listings.
    //It should store each job listing into a database (like sqlite, or Mongo)

    const [jobList, setJobList] = useState([])

    

    useEffect(() => {
      return () => {
        
      }
    }, [])

    const addJob = () => {
        let jobID = jobList.length;
        let dateTime = new Date(Date.now());
        setJobList([...jobList, {
        // id
        iD: jobID,
        // Position/Title
        position: "Position",
        // Company
        company: "Company",
        // Status
        status: ["Applied", "Reached Out", "Interview", "Offer", "Denied - closed door", "Denied - open door"],
        // Date Applied
        dateApplied: dateTime.toString(),
        // Location
        location: ["Remote", "In Person", "Hybrid"],
        // Company Location
        companyLocation: "Company Location",
        // Link to Listing/Post
        postLink: "www.job.com/jobs?=12345",
        // Notes
        notes: "Notes go here",
        }])
        console.log(dateTime)
    }
  return (
    <div>
        <h1>JobTracker</h1>
        <button onClick={addJob}>Add Job</button>
        <div className='JobHeaders'>
        <p>Job ID</p>
        <p>Position</p>
        <p>Company</p>
        <p>Application Status</p>
        <p>Date Applied</p>
        <p>Job Location</p>
        <p>Company Location</p>
        <p>Link To Posting</p>
        <p>Notes</p>
        </div>
        {jobList.map(result => (
            <Job key={result.iD} job={result}></Job>
        ))}
    </div>
  )
}

export default JobTracker