import React from 'react'
import './job.css'

const Job = (props) => {
    //Each job should have:

        // id
        // Position/Title
        // Company
        // Status
        // Date Applied
        // Location
        // Company Location
        // Link to Listing/Post
        // Notes
  return (
    <div className='jobContainer'>
        <p>{props.job.iD}</p>
        <p>{props.job.position}</p>
        <p>{props.job.company}</p>
        <p>{props.job.status[0]}</p>
        <p>{props.job.dateApplied}</p>
        <p>{props.job.location[0]}</p>
        <p>{props.job.companyLocation}</p>
        <p>{props.job.postLink}</p>
        <p>{props.job.notes}</p>
    </div>
  )
}

export default Job