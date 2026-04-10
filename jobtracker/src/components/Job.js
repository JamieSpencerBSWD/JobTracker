import React from 'react'

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
    <div>
        <p>Job ID: {props.job.iD}</p>
        <p>Position: {props.job.position}</p>
        <p>Company: {props.job.company}</p>
        <p>Application Status: {props.job.status[0]}</p>
        <p>Date Applied: {props.job.dateApplied}</p>
        <p>Job Location: {props.job.location[0]}</p>
        <p>Company Location: {props.job.companyLocation}</p>
        <p>Link To Posting: {props.job.postLink}</p>
        <p>Notes: {props.job.notes}</p>
    </div>
  )
}

export default Job