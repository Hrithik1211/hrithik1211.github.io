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
    name:'TRACKING OF MICROPARTICLES IN COMPLEX MEDIA',
    description:'Python Application to track micro-particles in video',
    details:{
      timeline:'Jul 2022 - Present',
      details:{
        1:'Created an application using Python to track the Janus particles and to identify their instantaneous normal vector in videos.',
        2:'Used OpenCV library to process the extracted image frames using medianBlur, adaptiveThreshold, cvtColor functions.',
        3:'Applied the Hough Transformation technique to detect the particles and equator lines on the particles.',
        4:'Compiled the processed frames marked with normal vectors into a video along with the trajectory traced by every particle.',
        5:'Implemented a generic algorithm to convert videos from Lab Frame of Reference to Particle Frame of Reference.'
      }
    }
  },
  2:{
    name:'Card Flip Game',
    description:'Created a memory-based Card Flip game in ReactJS in which player have to clear the board within time',
    details:{
      github:'https://github.com/Hrithik1211/cardflip',
      timeline:'May 2022',
      link:'https://hrithik1211.github.io/cardflip/',
      details:{
        1:'Developed a timed memory-based Card Flip game in React JS to clear the board in timed format',
        2:'Used perspective and transform property of CSS to create 3-D card Flip animation on hover and click',
        3:'Stored the data in Local Storage of the browser to maintain the stats of user based on the games played',
        4:'Created a dashboard to display the stats of the current game and also the previous stats of the player from the Local Storage'
      }
    }
  },
  3:{
    name:'Sanskritshala',
    description:'Developed a platform which contains Sanskrit tools',
    details:{
      github:'https://github.com/sanskritshala/sanskritshala.github.io',
      timeline:'Jan 2022 - Apr 2022',
      link:'https://sanskritshala.github.io/',
      details:{
        1:'Developed the front-end in ReactJS for Sanskrit applications such as Shloka Recommendation, Dependency Parsing.',
        2:'Created Dependency Parser which is an annotation tool to create gold standard data in semi-automated way.',
        3:'Built Shloka Recommendation tool which recommends Sanskrit Shlokas from pre-processed data on search.',
        4:'Created interactive realtime word highlighter and graphic visualizations between the searched and recommended shlokas.'
      }}
  },
  4:{
    name:'Sholka Recommendation',
    description:'Developed Web Platform for Shloka Recommendation System Using ReactJS',
    details:{
      github:'https://github.com/Hrithik1211/NLP-for-Sanskrit-Recommendation-System.git',
      timeline:'Dec 2021 - Jan 2022',
      link:'https://sanskritshala.github.io/shloka.github.io/',
      details:{
        1:'Developed the Front-end in REACT which recommends Sanskrit Shlokas from pre-processed data on search.',
        2:'Used react-graph-vis package to graphically visualise relationship between searched & recommended shlokas.',
        3:'Created an interactive realtime word highligther to highlight similar words in same colors in purport of shlokas.',
        4:'Worked using z-index property of CSS to create a Tour of the Platform on first visit to the website.'
      }}
  },
  5:{
    name:'Idea Hive',
    description:'Developed a Mobile Application in REACT NATIVE for students to post and discuss queries in groups',
    details:{
      github:'https://github.com/Hrithik1211/Idea-Hive.git',
      timeline:'June 2021',
      link:'',
      details:{
        1:'Developed a discussion platform in React Native which enables users to create groups, post content and discuss ideas.',
        2:'Implemented the unique username feature using Realtime Database with multiple user authentication options.',
        3:'Built the search bar with Autocomplete Suggestions and feature to create and join multiple public/private groups.',
        4:'Added features like private groups, commenting on posts, bookmarking the posts, updating the profile pic etc.'}
    }
    
  },
  6:{
    name:'Instaload',
    description:'Created an Android Application in Android Studio using JAVA to download Instagram posts using links',
    details:{
      github:'https://github.com/Hrithik1211/Instaload/tree/master',
      timeline:'Sept 2020',
      link:'',
      details:{
        1:'Developed an application in Java in Android Studio to download posts from instagram using the post link.',
        2:'Used Java Ion library to get the HTML of the post then parsed the data to get download link.',
        3:'Implemented the option to preview the images or the videos before downloading.',
        4:'Added the functionality to download the images or videos using the link and then storing it on the device.'}
    }
  },
  7:{
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
    description:'ReactJs, React Native, NextJs, jQuery, Jest, Bootstrap',
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
    details:'2019 - Present'
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
    college:'GetRIA Technology',
    moreDetails:'Received PPO',
    work:{
      name:'Software Developer Intern | GetRIA Technology' ,
      details:{
        timeline:'May 2022 - Jul 2022',
      
        details:{
          1:'Received Pre-Placement Offer from GetRIA Technology based on performance towards the end of the internship',
      2:'Collaborated with the front-end team to create Career Page and Job Portal in ReactJS as well as to expand test coverage.',
      3:'Tested the dynamic features of the website by writing Unit and Integration Test cases using JEST and RTL.',
      4:'Developed the Career Page and integrated it with the database to retrieve data with Search & Filter options for Job Search.',
      5:'Built the Job Portal and integrated it with Google APIs to parse data to styled JSX directly from Google Docs and Sheets.',
      6:'Created a timed format memory-based Card Flip game in ReactJS during the training week and hosted it on GitHub',
    
        },
      }
},
    description:'Joined the Company through College Internship Drive and was involved in Unit and Integration Testing Using Jest and RTL. Developed the Career Page and Job Posting Panel in React',
    details:'May \'22 - July \'22'
  },
  
  2:{
    name:'Software Developer Intern',
    college:'Dron Study',
    work:{
      
      name:'Software Developer Intern | DronStudy' ,
      details:{
        timeline:'Jul 2020 - Aug 2020',
      
        details:{
          1:'Developed a web-based Multi Level Marketing (MLM) Software using JavaScript, CSS and HTML.',
          2:'Used backend services of Google Firebase for Realtime Database, Cloud Storage, and Authentication.',
          3:'Created user portal interface based on their level in the marketing Tree and also their downline.',
          4:'Implemented the level-based structure of Multi Level Marketing for commission calculation on sale of the product.'
          
        },
      }
},
    description:'Developed and hosted Multi Level Marketing Software with User Authentication using Google Firebase Authentication',
    details:'July \'20 - August \'20'
  },
  
}
function Resume({val}){
  const [modal, setmodal] = useState(false)
  const [pval, setpval] = useState(null)
  console.log(pval)
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
              link.href=require('../src/images/Hrithik Sharma.pdf')
              link.download='Hrithik Sharma Resume.pdf'
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
        <div className='col-lg-5 experience' onClick={() => {setmodal(!modal)}}>
          {
            Object.keys(experience).map((val,index) => (
              <JobCard data={experience[val]} click={experience[val].work} setclick={setpval} />
            ))
          }
        </div>
        <div className='col-lg-5'>
          {
            Object.keys(education).map((val,index) => (
              <JobCard data={education[val]} click={education[val].work} setclick={setpval} />
            ))
          }
        </div>
      </div>}
      {modal && <div onClick={() => {setmodal(!modal)}} style={{backgroundColor:'rgb(174, 182, 191, .5)',height:'100vh',width:'100vw',position:'fixed',top:0,left:0,zIndex:9999}} ><Modal val={pval} setmodal={setmodal}/></div> }
 
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
      {modal && <div onClick={() => {setmodal(!modal)}} style={{backgroundColor:'rgb(174, 182, 191, .5)',height:'100vh',width:'100vw',position:'fixed',top:0,left:0,zIndex:9999}} ><Modal val={pval} setmodal={setmodal}/></div> }
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
    <div onClick={(e) => {e.stopPropagation()}} className={`modals col-md-8 col-sm-11`}>
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
          {val.details.github?<div style={{cursor:'pointer'}} onClick={() => {
            window.open(val.details.github)
          }} className='col-lg-12 text-center'>
            <span className='span-text'><FaGithub/> : </span>
            {val.details.github}
          </div>:<></>}
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