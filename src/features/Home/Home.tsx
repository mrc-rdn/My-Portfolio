import { GitHubCalendar } from "react-github-calendar";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectPage from '../../components/project/ProjectPage.tsx'
import type { ProjectHighlightData, socialaccount } from "../../components/types/project.ts";


export default function Home() {



    const socialAccount: socialaccount[] = [{ id: 1, social: 'github ↗', link: 'https://github.com/mrc-rdn' },
    { id: 2, social: 'linkedin ↗', link: 'https://www.linkedin.com/in/john-marco-ardina-71b166371/' },
    { id: 3, social: 'instagram ↗', link: 'https://www.instagram.com/mrc_rdna/' }]

    const projectHightlightData: ProjectHighlightData[] = [
        { title: 'E-Kabuhayan', year: 2025, description: 'web-based application designed to help students, teachers, and administrators manage courses, track progress, and access learning materials efficiently and securely.' },
        { title: 'Nex-TOS', year: 2026, description: 'web-based business operations and service management platform that streamlines equipment management, technician workflows, client services, inventory, billing, and field operations.' },
        { title: 'Devotion Tracker', year: 2026, description: 'web-based application designed to help users build and maintain a consistent devotional routine. It allows users to record their daily devotions, track their spiritual progress.' }
    ]

    const stack: string[] = [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "AWS",
        'Tailwind'

    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const email = "johnmarcoardina49@gmail.com";
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className=' w-full sm:w-auto md:w-185 h-screen flex flex-col items-center mx-auto px-10 '>
            <div className=' flex flex-col sm:flex-row items-center sm:items-start pt-30 pb-15'>

                <img src="/images/Mrc.png" alt="" className='sm:h-70 sm:w-70 w-70 ' />
                <div className='text-gray-400 w-full mt-10 sm:mt-0'>
                    <h1 className='text-gray-100 font-bitcount sm:text-3xl text-2xl sm:ml-10'>John Marco Ardina</h1>
                    <p className=" font-display font-saira text-lg  text-[15px] sm:ml-10 py-3">
                        I am a Full Stack Developer dedicated to helping teams build reliable and
                        effective solutions with passion and excellence.
                    </p>
                    <p className="font-display font-saira text-lg  text-[15px] sm:ml-10 py-3">
                        Transforming creative ideas, code, and concepts into engaging digital experiences
                        that inspire, solve problems, and create lasting impact.
                    </p>
                    <div className="sm:px-10 py-3 w-full flex  flex-wrap ">
                        {
                            socialAccount.map((items) => {
                                return (
                                    <a
                                        key={items.id}
                                        className="text-[13px] m-2 "
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={items.link}>
                                        {items.social}

                                    </a>
                                )
                            })
                        }
                        <button className="text-[13px] m-2 "
                            onClick={() => { setIsOpen(!isOpen) }}
                        >
                            Email
                        </button>
                    </div>
                </div>


            </div>

            <div className="flex w-full py-15 flex-col">
                <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
                    <h1 className="font-bitcount text-xl text-gray-100">01 — Projects</h1>
                    <Link to="/projects" className="font-saira text-gray-100 hover:text-white transition duration-300">ALL PROJECTS →</Link>



                </div>

                {
                    projectHightlightData.map((items, index) => {
                        return (
                            <Link to={`/projects/${index}`} key={index} className="block h-auto border-b border-gray-600/70 py-5 group cursor-pointer">
                                <div className="w-full flex justify-between">
                                    <h1 className="font-saira font-bold text-lg text-gray-100 group-hover:text-white transition duration-300">{items.title} <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm ml-1">view details ↗</span></h1>
                                    <p className="font-saira text-sm text-gray-400">{items.year}</p>
                                </div>

                                <p className="font-saira text-sm text-gray-400 pt-2">{items.description}</p>
                            </Link>
                        )
                    })
                }



            </div>

            <div className="flex w-full py-15 flex-col">
                <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
                    <h1 className="font-bitcount text-xl text-gray-100">02 — Experince</h1>
                    <Link to="/experience" className="font-saira text-gray-100 hover:text-white transition duration-300">FULL HISTORY →</Link>



                </div>


                <div className="  border-b border-gray-600/70 py-5">
                    <div className="w-full flex justify-between">
                        <p className="font-saira text- text-gray-400">2026</p>
                        <h1 className="font-saira font-bold  text-gray-100 w-90">Software Development Intern</h1>
                        <p className="font-saira text- text-gray-400">NexVision Inc.</p>
                    </div>

                </div>

            </div>

            <div className="flex w-full py-15 flex-col">
                <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
                    <h1 className="font-bitcount text-xl text-gray-100">03 — Stack</h1>
                    <Link to="/stack" className="font-saira text-gray-100 hover:text-white transition duration-300">VIEW ALL →</Link>



                </div>


                <div className="  py-5 flex flex-wrap ">
                    {
                        stack.map((items, index) => {
                            return (
                                <p className="px-3 py-1 font-saira text-sm text-gray-400 border mr-2 mb-2 rounded-lg 
                                hover:text-gray-100 duration-100 ease-in-out hover:animate-bounce">{items}</p>
                            )
                        })
                    }
                    <p className="px-3 py-1 font-saira text-sm text-gray-400 border border-dashed mr-2 mb-2 rounded-lg 
                        hover:text-gray-100 duration-100 ease-in-out hover:animate-bounce">More</p>

                </div>

            </div>

            <div className="flex w-full py-15 flex-col">
                <div className="flex justify-between w-full items-center h-10 pb-10 border-b border-gray-600/70">
                    <h1 className="font-bitcount text-xl text-gray-100">03 — Certifications</h1>
                    <Link to="/certifications" className="font-saira text-gray-100 hover:text-white transition duration-300">VIEW ALL →</Link>



                </div>
                <div className="py-5 flex">
                    <a href="">
                        <div className="px-3 py-1 font-saira text-sm text-gray-400 border mr-2 mb-2 rounded-lg 
                                hover:text-gray-100 duration-100 ease-in-out hover:animate-bounce">

                            <img className="w-10 h-10"
                                src="/images/testdome.webp" alt="" />
                            <p>Test Dome</p>
                            <p></p>



                        </div>
                    </a>
                </div>



            </div>

            <div className={isOpen ? ("w-full h-screen bg-white/50 fixed inset-0 flex items-center justify-center") : ('hidden')} >
                <div className="w-100 h-55 rounded-xl bg-neutral-800 text-gray-200 p-7 relative">
                    <button className="text-[13px] absolute ml-85 top-4"
                        onClick={() => { setIsOpen(false) }}
                    >
                        ⨉
                    </button>

                    <p className="text-sm font-bitcount">Get in touch</p>

                    <p className="text-lg font-saira text-lg my-2">say hello</p>
                    <p className="font-saira text-sm my-4">For work, collabs, or just to say hi — drop me a line.</p>
                    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700 rounded-xl p-1 px-2 max-w-md">
                        <span className="text-white text-sm">{email}</span>

                        <button
                            onClick={copyEmail}
                            className="bg-white text-black px-4 py-2 px-2 rounded-lg hover:bg-gray-200 transition text-sm"
                        >
                            {copied ? "Copied!" : "Copy"}
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}
