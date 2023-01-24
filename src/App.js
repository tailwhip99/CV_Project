import React, { Component } from 'react'


import Contacts from './components/Contacts.js';
import Career from './components/Career.js';
import AddPic from './components/AddPic.js'

import uniqid from "uniqid";

import './styles/App.css';
import "./styles/NewJob.css"
import "./styles/NewPic.css"
import "./styles/Contacts.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
        job: {
          id: uniqid(),
        company: '',
        from: '',
        to: '',
        title:'',
        location:'',
        description:'',
        sentence:'',
      },

      
      jobs: [
        {
          id: uniqid(),
          company: "Microsoft",
          from: "2019",
          to: "2022",
          title:"Manager",
          location:"Budapest,Király utca 22.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
          sentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: uniqid(),
          company: "Apple",
          from: "2018",
          to: "2019",
          title:"Webdesigner",
          location:"Zalaegerszeg,Kossuth utca 23.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
          sentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
          id: uniqid(),
          company: "IWIW",
          from: "2015",
          to: "2029",
          title:"Nurse",
          location:"London,Hawk Street 16.",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
          sentence:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
      ],
    }
  
 
}

company_handleChange = e => {
  this.setState({
    job : {
     id:this.state.job.id,
      company : e.target.value,
      from: this.state.job.from,
      to: this.state.job.to,
      title: this.state.job.title,
      location: this.state.job.location,
      description: this.state.job.description,
      sentence: this.state.job.sentence
    }
  })
};

from_handleChange = e => {
  this.setState({
    job : {
      id:this.state.job.id,
      company : this.state.job.company,
      from: e.target.value,
      to: this.state.job.to,
      title: this.state.job.title,
      location: this.state.job.location,
      description: this.state.job.description,
      sentence: this.state.job.sentence
    }
   

  })
};




to_handleChange = e => {
  this.setState({
    job : {
      id:this.state.job.id,
    company : this.state.job.company,
      from: this.state.job.from,
      to: e.target.value,
      title: this.state.job.title,
      location: this.state.job.location,
      description: this.state.job.description,
      sentence: this.state.job.sentence
    }
  })
};

title_handleChange = e => {
  this.setState({
    job: {
      id:this.state.job.id,
    company : this.state.job.company,
    from: this.state.job.from,
    to: this.state.job.to,
    title:e.target.value,
    location: this.state.job.location,
    description: this.state.job.description,
    sentence: this.state.job.sentence
  }
  })
};
location_handleChange = e => {
  this.setState({
    job: {
      id:this.state.job.id,
    company : this.state.job.company,
      from: this.state.job.from,
      to: this.state.job.to,
      title: this.state.job.title,
      location: e.target.value,
      description: this.state.job.description,
      sentence: this.state.job.sentence
    }
  })
};
description_handleChange = e => {
  this.setState({
    job: {
      id:this.state.job.id,
    company : this.state.job.company,
      from: this.state.job.from,
      to: this.state.job.to,
      title: this.state.job.title,
      location: this.state.job.location,
      description: e.target.value,
      sentence: this.state.job.sentence
    }
  })
};
sentence_handleChange = e => {
  this.setState({
    job: {
      id:this.state.job.id,
    company : this.state.job.company,
      from: this.state.job.from,
      to: this.state.job.to,
      title: this.state.job.title,
      location: this.state.job.location,
      description: this.state.job.description,
      sentence: e.target.value
    }
  })
};
onSubmitJob = e => {




  e.preventDefault();
  this.setState({
    jobs: this.state.jobs.concat(this.state.job),
    job: {
      id: uniqid(),
      company: '',
      from: '',
      to: '',
      title:'',
      location:'',
      description:'',
      sentence:'',
    },
   
  


  } 
  ) 
  this.CloseNewJob() 
 
}





ResetForm = e => {
   let inputs = document.querySelectorAll('input')
   inputs.forEach(input => input.value = '')

   
}

OpenNewJob = () => {
 
  const newjob = document.querySelector('.newJob')
  newjob.style.visibility = 'visible'

}
 CloseNewJob = () => {

  const newJob = document.querySelector('.newJob')
      newJob.style.visibility = 'hidden'
     this.ResetForm()
      
 }

 HideAddJob = () => {
  const addJob = document.querySelector('.addJob')
  addJob.style.visibility='hidden'

 }
 RevealAddJob = () => {
  const addJob = document.querySelector('.addJob')
  addJob.style.visibility='visible'
  this.CloseNewJob()
 }
 
 

  render() {
    const {jobs} = this.state;

    return (
      <div className="App">
        <Contacts  />
        <Career jobs={jobs} />
       <AddPic/>

        <div className="addJob">
          <p>  Add your previous job! </p>
         <button onClick={this.OpenNewJob}>+</button>
        </div>
        <form method="get" id="new-job">
        <div className="newJob">
          <div className="closeButton">
          <button type="reset" onClick={this.CloseNewJob}>X</button>
          </div>
         <div >
          <h1>Add your previous job!</h1>
          
          </div>
          <div className="first-line">
            
            <label htmlfor="company">Company</label>
          <input onChange={this.company_handleChange}  className="Company" type="text" name="Company" id="company" placeholder="Company name" required  ></input>
          
          <label htmlfor="Start Date">Date</label>
          <input onChange={this.from_handleChange} 
            className="from" 
            type="text" 
            name="from"
            id="from" 
            placeholder="From"
            maxlength="4"
            pattern="[0-9]+"
            required  >

            </input>
          <p className="Date">-</p>
      
          <input onChange={this.to_handleChange} 
           className="to"
            type="text"
            name="to"
            placeholder="To"
            id="to"
            maxlength="4"
            pattern="[0-9]+"
            required   >

            </input>
        
          </div>

          <div className="second-line">
         <div className="left">
          <label htmlfor="Title">Job Title</label>
          <input onChange={this.title_handleChange}  

          className="JobTitle"
          type="text" 
          name="JobTitle"
          placeholder="JOB TITLE"
          required 
             >
             </input>
          
          <label htmlfor="Location">Job Location</label>
          <input onChange={this.location_handleChange}  
          className="location" 
          type="text" 
          name="Locations" 
          placeholder="Location" 
          required   
          >

          </input>

          </div>
          </div>


          <div className="third-line">
          <label htmlfor="Description">Description</label>
          <textarea onChange={this.description_handleChange} 
          name="description" 
          placeholder="In a short statement of no more than a few sentences describe your role in the company and outline your key and main responsibilites. Give a brief outline of your job role and also any other important duties." >

          </textarea>
          
          </div>
          
          <div className="fourth-line">

          <label htmlfor="Sentence">Sentence</label>
          <textarea onChange={this.sentence_handleChange}  name="sentence" placeholder="A sentence describing your duties,keep them relevant to the job" ></textarea>
          </div>
          <button className="addTask" onClick={this.onSubmitJob} >Add job</button>
         
        </div>
        </form>
      </div>
    );
  }


  }


  

export default App;
