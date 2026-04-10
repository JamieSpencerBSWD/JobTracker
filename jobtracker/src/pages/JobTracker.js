import React, { useEffect } from 'react'
import Job from '../components/Job';

const JobTracker = () => {
    //Store jobs in State array.
    //Iterate/map over jobs and pass down each jobs information to the Job component.
    //Display those jobs here.

    //The role of this file is to display, Edit, Add, Remove, and Update Job Listings.
    //It should store each job listing into a database (like sqlite, or Mongo)
    useEffect(() => {
      return () => {
        
      }
    }, [])
    
  return (
    <div>JobTracker
        <Job jobtitle="This Is The Jobs Title"/>
    </div>
  )
}

export default JobTracker