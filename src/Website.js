import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaFacebook, FaGithub, FaInstagram, FaLink} from 'react-icons/fa'
import React, { useState } from 'react';
import Card from './custom/card';
import JobCard from './custom/jobCard';
import { database } from './Firebase';
import { ref, set } from 'firebase/database';
import { Link } from 'react-router-dom';
const projectData = {
  1:{
    name:'Card Flip Game',
    description:'Created a memory-based Card Flip game in ReactJS in which player have to clear the board within time',
    details:{
      github:'https://github.com/Hrithik1211/cardflip',
      timeline:'May 2022',
      link:'https://hrithik1211.github.io/cardflip/',
      details:{
        1:'Developed a memory-based Card Flip game in React JS to clear the board in timed format',
        2:'Used perspective and transform property of CSS to create 3-D card Flip animation on hover and click',
        3:'Stored the data in Local Storage of the browser to maintain the stats of user based on the games played',
        4:'Created a dashboard to display the stats of the current game and also the previous stats of the player from the Local Storage'
      }
    }
  },
  2:{
    name:'Sholka Recommendation',
    description:'Developed Web Platform for Shloka Recommendation System Using ReactJS',
    details:{
      github:'https://github.com/Hrithik1211/NLP-for-Sanskrit-Recommendation-System.git',
      timeline:'Dec 2021 - Jan 2022',
      link:'https://sanskritshala.github.io/shloka.github.io/',
      details:{
        1:'Developed the Front-end of a web-based platform which recommends Sanskrit Shlokas based on user search.',
        2:'Worked on the frameworks like ReactJS for Front-end and Django and used zIndex based display features.',
        3:'Integrated graph based visualiser to display the relationship between the searched and recommended shlokas.',
        4:'Implemented interactive realtime word highligther to highlight similar words in same colors in purport of shlokas.'
      }}
  },
  3:{
    name:'Idea Hive',
    description:'Developed a Mobile Application in REACT NATIVE for students to post and discuss queries in groups',
    details:{
      github:'https://github.com/Hrithik1211/Idea-Hive.git',
      timeline:'June 2021',
      link:'',
      details:{
        1:'Developed a discussion platform using React Native to create groups and post ideas.',
        2:'Used Google Firebase for backend services such as Realtime Database, Cloud storage and Authentication.',
        3:'Built the search bar with Autocomplete Suggestion to search for groups and join groups from the search results.',
        4:'Implemented the unique username and unique group name features using the database.',
        5:'Added the request permission functionality for private groups and its approval by group admin, for privacy.'
      }
    }
    
  },
  4:{
    name:'Instaload',
    description:'Created an Android Application in Android Studio using JAVA to download Instagram posts using links',
    details:{
      github:'https://github.com/Hrithik1211/Instaload/tree/master',
      timeline:'Sept 2020',
      link:'',
      details:{
        1:'Developed an application in Java in Android Studio to download posts from instagram using the post link.',
        2:'Used java library to get the HTML of the post then extracted the download link from it.',
        3:'Implemented the viewing option to preview the images or the videos before downloading.',
        4:'Added the functionality for downloading the images or videos using the link and then storing it on the device.'
      }
    }
  },
  5:{
    name:'Trucken',
    description:'Developed an Android Application in Android Studio for a Tranportation StartUp ',
    details:{
      github:'https://github.com/Hrithik1211/Instaload/tree/master',
      timeline:'May 2020 - June 2020',
      link:'',
      details:{
        1:'Developed an app in Java in Android Studio which acts as a intermediary between Shippers and Truck providers.',
        2:'Used Google Firebase for backend services such as Realtime Database, cloud storage and Authentication.'
      }
    }
  }
}
const skills = {
  1:{
    name:'Programming',
    description:'C, C++, Java, Python, HTML, CSS, JavaScript, SQL',
    details:{}
  },
  2:{
    name:'Frameworks',
    description:'ReactJs, React Native, NextJs, Flutter, jQuery, Jest, Bootstrap',
    details:{}
  },
  3:{
    name:'Utilities',
    description:'Numpy, Matplotlib, Pandas, Git, Bash, React Testing Library, LATEX',
    details:{}
  },
  4:{
    name:'Softwares',
    description:'MySQL, Firebase, Android Studio, VS Code, AutoCAD',
    details:{}
  }
}
const education = {
  1:{
    name:'B.Tech',
    college:'Indian Institute of Technology Kanpur',
    description:'Senior Undergraduate at IIT Kanpur\n CPI - 7.55',
    details:'2019-Present'
  },
  
  2:{
    name:'XII (ISC)',
    college:'St. Peter\'s College, Agra',
    description:'Completed Secondary High School with a score of 95%',
    details:'2018'
  },
  
  3:{
    name:'X (ICSE)',
    college:'St. Peter\'s College, Agra',
    description:'Completed High School with a score of 95.6%',
    details:'2016'
  }
}
const experience = {
  1:{
    name:'Software Developer Intern',
    college:'RIA insurance',
    description:'Joined the Company through College Internship Drive and was involved in Unit and Integration Testing Using Jest and RTL. Developed the Career Page and Job Posting Panel in React',
    details:'May \'22 - July \'22'
  },
  
  2:{
    name:'Software Developer Intern',
    college:'Dron Study',
    description:'Developed and hosted Multi Level Marketing Software with User Authentication using Google Firebase Authentication',
    details:'July \'20 - August \'20'
  },
  
}
function Resume({val}){
  return (
    <div className={`screen-container ${val?'screen':''} Resume container-main`}>
      <div className='row'>
        <h1 className='text-center project-heading'>
          ABOUT ME
        </h1>
      </div>
      <div className='row'>

      <div className='col-lg-5 personal-details justify-content-center'>
        <div className='col-12'>
          <h2 style={{padding:20}}>
            PERSONAL INFORMATION
          </h2>
          <div className='row'>
            <p className='col-md-6 text'><span className='span-text'>Name:</span> Hrithik Sharma</p>
            <p className='col-md-6 text'><span className='span-text'>College:</span> Indian Institute of Technology Kanpur</p>
          </div>
          
          <div className='row'>
              <div className='col-md-6 email-col' style={{}}>
                <span className='span-text text'>Email:</span>
                <div className='email-container'>
                <div className='text-email' onClick={() => {
                  window.open('mailto:hrsharma@iitk.ac.in')
                }}>hrsharma@iitk.ac.in</div>
                  <div className='text-email' onClick={() => {
                  window.open('mailto:hs.hp121@gmail.com')
                }}>hs.hp121@gmail.com</div>
              
                </div >
                
              </div>
              
            <p className='col-md-6 text'><span className='span-text'>Course: </span> Chemical Engineering</p>
          </div>
          
          <div className='row'>
            <p className='col-md-6 text'><span className='span-text'>Mobile:</span> (+91) 7452822787 </p>
            <p className='col-md-6 text'><span className='span-text'>Languages: </span> English, Hindi</p>
          </div>

          <div className='row'>
            <a target={'_blank'} href='https://www.linkedin.com/in/hrithik1211/' className='col-md-6 text'><span className='span-text'>LinkedIn:</span> Hrithik1211 </a>
            <a target={'_blank'} href='https://github.com/Hrithik1211/' className='col-md-6 text'><span className='span-text'>GitHub: </span> Hrithik1211</a>
          </div>

          <div className='row'>
            <a target={'_blank'} href='https://codeforces.com/profile/Hrithik_S' className='col-md-6 text'><span className='span-text'>Codeforces:</span> Hrithik_S </a>
            <a target={'_blank'} href='https://codechef.com/users/hs1211' className='col-md-6 text'><span className='span-text'>Codechef: </span> hs1211</a>
          </div>
          
          <div className='row ' style={{marginTop:20}}>
            <div className='col-lg-6 col-md-4 download-button'
            onClick={() => {
              let link = document.createElement('a');
              link.href=require('../src/images/Hrithik_Sharma.pdf')
              link.download='/'
              link.click()
            }}
            >
              Download Resume
            </div>
          </div>
        </div>
      </div>
      {val==100&&<div className='col-lg-7 projects-section align-self-center'>
        <div className='row card-console project-row'>
          {Object.keys(skills).map((val,index) => (
            <div className='col-md-5 '>
              <Card data={skills[val]} />
            </div>
          ))}
        </div>
      </div>
      
      }
      </div>
      {val==100 &&
      
      <div className='row justify-content-center details'>
      <h2 className='text-center text-heading'>
        Experience & Education
      </h2>
        <div className='col-lg-5'>
          {
            Object.keys(experience).map((val,index) => (
              <JobCard data={experience[val]}/>
            ))
          }
        </div>
        <div className='col-lg-5'>
          {
            Object.keys(education).map((val,index) => (
              <JobCard data={education[val]}/>
            ))
          }
        </div>
      </div>}
    </div>
  )
}
function Projects({val}){
  const [modal, setmodal] = useState(false)
  const [pval, setpval] = useState(null)
  return (
    <div className={`screen-container ${val?'screen':''} container-main  `}>
      <div className='row'>
        <h1 className='text-center project-heading'>
          PROJECTS
        </h1>
      </div>
      <div className='row col-lg-11 col-md-12 justify-content-center project-row'>
        {Object.keys(projectData).map((val,index) => (
          <div onClick={() => {setpval(projectData[val])}} className='col-lg-4 col-md-6 col-sm-12'>
            <Card data={projectData[val]} setmodal={setmodal} />
            </div>
        ))}
      </div>
      {modal && <Modal val={pval} setmodal={setmodal}/>}
    </div>
  )
}
function Contact({val}){
  const [form, setForm] = useState({
    name:'',email:'',subject:'',message:''
  })
  return (
    <div className={`screen-container ${val?'screen':''} container-main  `}>
      <div className='row'>
        <h2 className='text-center project-heading'>
          CONTACT
        </h2>
      </div>
      <div className='row'>
        <div className='col-lg-6'>
            <div className='row'>
            <div className='col-md-6'>
            <input onChange={(e) => {
              setForm(val => ({...val,name:e.target.value}))
            }} placeholder='NAME' value={form.name} className='col-12 contact-input'/>
            </div>

            <div className='col-md-6'>
            <input onChange={(e) => {
              setForm(val => ({...val,email:e.target.value}))
            }} placeholder='EMAIL' value={form.email} className='col-12 contact-input'/>
            </div>
            
            </div>
            <div className='col-md-12'>
            <input onChange={(e) => {
              setForm(val => ({...val,subject:e.target.value}))
            }} placeholder='SUBJECT' value={form.subject} className='contact-input col-12'/>    
            </div>
            <div className='col-md-12'>
            <textarea onChange={(e) => {
              setForm(val => ({...val,message:e.target.value}))
            }} placeholder='MESSAGE' value={form.message} className='col-12 contact-message'/>
            <button onClick={() => {
              set(ref(database,'messages/'+(new Date()).getTime()),form)
              setForm(val => ({...val,name:'',email:'',subject:'',message:''}))
            }} className='col-md-4 col-sm-6 contact-submit'>
              SUBMIT
            </button>
            </div>
            

        </div>
        <div className='col-lg-5 contact-info'>
          <div className='row justify-content-center'>
            <div className='row col-md-8 col-sm-11'>
            <div className='text-contact' style={{}}>
                <span className='span-text text'>Email:</span>
                <div className='email-container'>
                <div className='text-email' onClick={() => {
                  window.open('mailto:hrsharma@iitk.ac.in')
                }}>hrsharma@iitk.ac.in</div>
                  <div className='text-email' onClick={() => {
                  window.open('mailto:hs.hp121@gmail.com')
                }}>hs.hp121@gmail.com</div>
              
                </div >
                
              </div>
              
          <p className='text-contact'><span className='span-text'>Contact:</span> (+91) 7452822787 </p>
          <a target={'_blank'} href='https://www.linkedin.com/in/hrithik1211/' className='text-contact'><span className='span-text'>LinkedIn:</span> Hrithik1211 </a>
          <a target={'_blank'} href='https://github.com/Hrithik1211/' className='text-contact'><span className='span-text'>GitHub: </span> Hrithik1211</a>
          <div className='col-12 link-icons'>
            <img src={require('../src/images/codeforces.png')} onClick={() => {
              window.open('https://codeforces.com/profile/Hrithik_S')
            }} className='contact-codeforces'/>
            <img src={require('../src/images/codechef.jpeg')} onClick={() => {
              window.open('https://www.codechef.com/users/hs1211')
            }} size={32} className='contact-codechef'/>
            <FaFacebook onClick={() => {
              window.open('https://www.facebook.com/hrithik.sharma.9003')
            }} size={32} className='contact-facebook'/>
            <FaInstagram onClick={() => {
              window.open('https://www.instagram.com/hrithik1211/')
            }} size={32} className='contact-instagram'/>
          </div>
            </div>
          
          </div>
        </div>

      </div>
    </div>
  )
}
function Page({val}){
  return (
    <div className={`screen-container ${val?'screen':''} container-main`} style={{position:'absolute',zIndex:0}}>

    </div>
  )
}
function Modal({val,setmodal}){
  return (
    <div className={`modals col-md-8 col-sm-11`}>
      <div className='project-details'>
        <h1 className='text-heading text-center'>
          {val.name}
        </h1>
          {val.details.link&& <div style={{cursor:'pointer'}} onClick={() => {
            window.open(val.details.link)
          }} className='col-lg-12 text-center'>
            <span className='span-text'><FaLink/> : </span>
            {val.details.link}
          </div>}
          <div style={{cursor:'pointer'}} onClick={() => {
            window.open(val.details.github)
          }} className='col-lg-12 text-center'>
            <span className='span-text'><FaGithub/> : </span>
            {val.details.github}
          </div>
          <div className='col-lg-12 text-center'>
            {val.details.timeline}
          </div>
          <div className='col-12 project-description'>
          {
            Object.values(val.details.details).map(dval => (
              <li>{dval} </li>
            ))
          }
        </div>

        </div>
      <div style={{
        position:'absolute',
        zIndex:2,
        right:12,
        top:12,
        cursor:'pointer'
      }}
      onClick={() => {
        setmodal(false)
      }}
      >
        Close
      </div>
    </div>
  )
}
function Website() {
  const [page, setPage] = useState('Home')

  return (
    <div className="App">
      <div className='container-main row justify-content-evenly'>
        <div className='col-lg-4 col-md-6'>
          <img src={require('../src/images/profilepic.jpg')} className='profile-image' />
        </div>
        <div
        className='col-lg-7 col-md-6 profile-info justify-content-center'>
          <div className='col-md-11'>
            <h1 className='bold'>
              HELLO
            </h1>
            <h2 className='bold'>
              I'm HRITHIK SHARMA
            </h2>
            <h4>
              Senior UG at Indian Institute of Technology Kanpur
            </h4>
            <p className='text-data'>
            I am a Chemical Engineering major pursuing my interests in the field of Software Development. I am a proficient programmer with good problem solving skills. Always eager to learn new technologies and continually aim to enhance my programming skills to present better solutions for the problems I work on.
            </p>
            <button onClick={() => {
              setPage('Resume')
            }} className='profile-button'>
              More About Me
            </button>
          </div>
        </div>
        <div className='col-lg-1 navigation'>
          <p className={`icons ${page=='Home'?'glow':''}`} onClick={() => {
            setPage('Home')
          }} style={{padding:12}}>Home</p>
          <p className={`icons ${page=='Resume'?'glow':''}`} onClick={() => {
            setPage('Resume')
          }} style={{padding:12}}>Resume</p>
          <p className={`icons ${page=='Projects'?'glow':''}`} onClick={() => {
            setPage('Projects')
          }} style={{padding:12}}>Projects</p>
          <p className={`icons ${page=='Contact'?'glow':''}`} onClick={() => {
            setPage('Contact')
          }} style={{padding:12}}>Contact</p>
        </div>
      </div>
      <Resume val={page=='Resume'?100:0} />
      <Projects val={page=='Projects'?100:0} />
      <Contact val={page=='Contact'?100:0} />
      <Page val={page=='Home'?0:100}/>
    </div>
  );
}

export default Website;