import React from 'react'
import Project from './Project.js'
import type { ProjectData } from "../types/project";

export default function ProjectPage() {



    const projects : ProjectData[] = [
        {title:'PLRMO LMS', 
        description:'The PLRMO Learning Management System (LMS) is a web-based application designed to help students, teachers, and administrators manage courses, track progress, and access learning materials efficiently and securely.', 
        img:['/images/PLRMO/1.png','/images/PLRMO/2.png','/images/PLRMO/3.png'],
        technologies :['Postgress','Express.Js','React.Js','Node.Js', 'Websocket', 'GEMINI'],
        features:[
            'Skill Development: Access to quality training modules designed for practical skill acquisition across various industries.',
            'Training Calendar: A system to stay updated with upcoming workshops, sessions, and important events.',
            'Community Learning: A social feature to connect with fellow trainees, share experiences, and learn collaboratively.',
            'Progress Tracking: Intuitive progress indicators for each module to help users monitor their learning journey.',
            'Integrated Chatbot Support: AI-driven assistance to answer inquiries, guide system navigation, and provide technical support.',
            'Learning Resources: A centralized hub for videos, PDFs, and interactive lessons.',
            ],
        link: '',
        is_status: false,
        duration: 'Sept 2025 - On Going'
        
        },
        {title:'Keeper (AWS Deployment)', 
        description:'Built a cloud-based system where the backend runs on Amazon EC2, application data is securely stored in Amazon RDS, and images and files are managed using Amazon S3 for scalable storage.', 
        img:['/images/keeper/1.png','/images/keeper/2.png','/images/keeper/3.png','/images/keeper/4.png','/images/keeper/5.png','/images/keeper/6.png'],
        technologies :['AWS','RDS','EC2','React','Express', 'Postgres', 'Node'],
        features:[
            'Cloud Deployment – Hosted on AWS EC2 with Nginx and PM2 for reliable production uptime.',
            'Real-World Ready – Combines full-stack technologies and cloud deployment for a professional application.',
            'User Authentication & Security – Users can register and log in securely using JWT for protected sessions.',
            'Task Management – Users can create, read, update, and delete their tasks easily.',
            'Interactive Frontend – Built with React, the UI is responsive and updates in real-time.',
            'Backend API – Node.js and Express handle requests and protect routes for authenticated users.',
            'Database Integration – PostgreSQL on AWS RDS securely stores users and tasks.',
            
            ],
        link: 'http://3.1.81.248',
        is_status: true,
        duration: '1 week'
        },
        
    ]
  return (
    
    <div className='flex flex-wrap gap-[5%] w-full  flex-row justify-center'>
        {projects.map((project, i)=>{
            return <Project key={i} project={project}/>
            }
        )}
    </div>
    
  )
}
