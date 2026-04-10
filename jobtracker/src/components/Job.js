import React from 'react'

const Job = (props) => {
    //Each job should have:

        // id
        // Position/Title
        // Company
        // Status
        // Date Applied
        // Location
        // Link to Listing/Post
        // Notes
  return (
    <div>Job {props.jobtitle}</div>
  )
}

export default Job