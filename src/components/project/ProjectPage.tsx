import React from 'react'
import Project from './Project.js'
import type { ProjectData } from "../types/project";

export const projects: ProjectData[] = [
    {
        title: 'PLRMO LMS (E-Kabuhayan)',
        description: 'The PLRMO Learning Management System (LMS) is a web-based application designed to help students, teachers, and administrators manage courses, track progress, and access learning materials efficiently and securely.',
        img: ['/images/PLRMO/1.png', '/images/PLRMO/2.png', '/images/PLRMO/3.png'],
        technologies: ['PostgreSQL', 'Express.js', 'React.js', 'Node.js', 'Websocket', 'Gemini API'],
        features: [
            'Skill Development: Access to quality training modules designed for practical skill acquisition across various industries.',
            'Training Calendar: A system to stay updated with upcoming workshops, sessions, and important events.',
            'Community Learning: A social feature to connect with fellow trainees, share experiences, and learn collaboratively.',
            'Progress Tracking: Intuitive progress indicators for each module to help users monitor their learning journey.',
            'Integrated Chatbot Support: AI-driven assistance to answer inquiries, guide system navigation, and provide technical support.',
            'Learning Resources: A centralized hub for videos, PDFs, and interactive lessons.',
        ],
        link: '',
        is_status: false,
        duration: 'Sept 2025 - On Going',
        challenges: 'Designing a real-time progress-tracking system and interactive classroom experience that stays fast and doesn\'t drop websocket connections during internet interruptions.',
        solutions: 'Implemented an automated reconnection logic with exponential backoff on the client-side, combined with local state caching so that progress logs are synced once the connection resumes.',
        github: 'https://github.com/mrc-rdn/CAPSTONE-DEPLOYMENT'
    },
    {
        title: 'Nex-TOS',
        description: 'A web-based business operations and service management platform that streamlines equipment management, technician workflows, client services, inventory, billing, and field operations.',
        img: ['/images/nex-tos/1.png', '/images/nex-tos/2.png', '/images/nex-tos/3.png', '/images/nex-tos/4.png'],
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Supabase'],
        features: [
            'Technician Management: Allocate, track, and manage service tasks and schedules dynamically.',
            'Inventory Control: Track spare parts, stock levels, equipment status, and maintenance schedules.',
            'Client Portal: Allow clients to view work order statuses, request new services, and view invoice history.',
            'Billing & Invoicing: Auto-generate detailed work logs and invoices directly from completed technician tickets.',
        ],
        link: '',
        is_status: false,
        duration: 'Jan 2026 - On Going',
        challenges: 'Syncing real-time updates for field technicians working on-site where offline support and immediate database updates are critical.',
        solutions: 'Utilized Supabase\'s Realtime subscription channel with optimistic UI updates in React. If the connection fails, data edits are saved locally and pushed to PostgreSQL once online.',
        github: 'https://github.com/mrc-rdn/nex-tos'
    },
    {
        title: 'Devotion Tracker',
        description: 'A web-based application designed to help users build and maintain a consistent devotional routine. It allows users to record their daily devotions, write journals, and track their spiritual progress.',
        img: ['/images/devotion/1.png', '/images/devotion/2.png', '/images/devotion/3.png', '/images/devotion/4.png'],
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        features: [
            'Daily Journals: Log daily devotion scriptures, thoughts, and personal reflections with rich text editing.',
            'Streak System: Track continuous daily entries using dynamic badges and motivational visual charts.',
            'Progress Reports: Export monthly digests of reflections, prayer requests, and key takeaways.',
        ],
        link: 'https://devotion-tracker.vercel.app/',
        is_status: false,
        duration: 'Feb 2026 - On Going',
        challenges: 'Ensuring that streak calculations are timezone-independent and don\'t reset incorrectly due to timezone offsets on the client side.',
        solutions: 'Saved all dates in ISO 8601 UTC format, and computed streaks dynamically in the database layer using SQL timestamp comparisons shifted to the user\'s local offset.',
        github: 'https://github.com/mrc-rdn/devotion-tracker'
    },
    {
        title: 'Keeper (AWS Deployment)',
        description: 'Built a cloud-based system where the backend runs on Amazon EC2, application data is securely stored in Amazon RDS, and images and files are managed using Amazon S3 for scalable storage.',
        img: ['/images/keeper/1.png', '/images/keeper/2.png', '/images/keeper/3.png', '/images/keeper/4.png', '/images/keeper/5.png', '/images/keeper/6.png'],
        technologies: ['AWS', 'RDS', 'EC2', 'React', 'Express', 'Postgres', 'Node'],
        features: [
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
        duration: '1 week',
        challenges: 'Configuring secure AWS IAM roles, setting up Nginx reverse proxy with PM2 daemon, and managing PostgreSQL credentials on RDS safely.',
        solutions: 'Created specific security groups for backend/frontend networks, locked RDS to EC2 private subnet, configured reverse proxy headers to forward client IPs, and stored credentials in secure dotenv environment files.',
        github: 'https://github.com/mrc-rdn/keeper-aws'
    }
]

export default function ProjectPage() {
    return (
        <div className='flex flex-col w-full'>
            {projects.map((project, i) => {
                return <Project key={i} project={project} index={i} />
            }
            )}
        </div>
    )
}
