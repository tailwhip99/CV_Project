import React from 'react'
import '../styles/Career.css'
import '../styles/NewJob.css'


function deleteJob(key) {
  const chosenJob = document.getElementById(key)
   const Jobs = document.querySelector('.Jobs')
 Jobs.removeChild(chosenJob)
   }


function OpenNewJob() {
 
    const newjob = document.querySelector('.newJob')
    newjob.style.visibility = 'visible'
  
  }
  
const Career = (props) => {
    const { jobs } = props;
    
    return (
      
        
 <div className='Career'>
    <div className="NameandTitle">
        <input className="name" type="text" name="Name" placeholder="Your name" ></input>
        
        <div className='Job-title'>
        <input className="job" type="text" name="Job" placeholder="Your job"></input>
        </div>
    </div>
    <div className="Intro">
    <h4>CAREER</h4>
    <button onClick={()=> OpenNewJob()} >+</button>
   
   
 </div>
 
 <div className="Jobs">
 
     {jobs.map((job) => {
      
   return ( 
    
   <div id={job.id} className="cjob">
    <div className='c-first-line'>
   <p className='jcompany'>{job.company}</p>
   <p className='jfromto'>{job.from} -  {job.to} </p>
   <button  onClick={ () => deleteJob(job.id)}>X</button>
   </div>

   <div className='c-second-line'>
   <p className='jtitlelocation'>{job.title} | {job.location}</p>
  </div>

  <div className='c-third-line'>
   <p className="jdescription">{job.description}</p>
   </div>
   <div className='c-fourth-line'>
   <p className="jsentence">{job.sentence}</p>
   </div>

   </div>
   )
     })}
      </div>
    </div>
    )
}

export default Career;