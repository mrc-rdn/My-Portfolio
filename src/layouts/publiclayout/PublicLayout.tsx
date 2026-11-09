
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react";
import {MessageSquareText, FolderKanban, UserStar, Layers, BadgeCheck,  Gamepad2   } from "lucide-react"
import type {Nav}  from '../../components/types/project';

export default function PublicLayout() {
    const nav: Nav[] = [
        {
        label: 'Project',
        icon: FolderKanban,
        },
        {
        label: 'Experience',
        icon: FolderKanban,
        },
        {
        label: 'Stack',
        icon: Layers,
        },
        {
        label: 'Certifications',
        icon: BadgeCheck,
        },
        {
        label: 'Games',
        icon: Gamepad2,
        },

    ]
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const location = useLocation();
//['Project', 'Experience', 'Stack', 'Certifications', 'Games']
    useEffect(() => {

        const element = document.querySelector('.animate');

        if (!element) return;
        element.classList.remove("page");
        void document.body.offsetWidth; // Force reflow
        element.classList.add("page");
    }, [location]);

    const getRoute = (item: string) => {
        switch (item.toLowerCase()) {
            case 'project':
                return '/projects';
            case 'experience':
                return '/experience';
            case 'stack':
                return '/stack';
            case 'certifications':
                return '/certifications';
            
            case 'games':
                return '/games';
            default:
                return '/';
        }
    };

    return (
        <div className='lg:flex bg-neutral-900 min-h-screen text-gray-200'>

            {/* Desktop Sidebar */}
            <div className='h-screen w-50 bg-neutral-900 border-r border-gray-500 hidden lg:flex flex-col shrink-0 px-6 py-5'>
                <div className=' '>
                    
                    <Link to='/' className='text-white text-2xl font-bitcount'>{'</>Mrc'}</Link>
                    
                    {
                        nav.map((items, index) => {
                            const Icon = items.icon;
                            return (
                                <NavLink
                                    key={index}
                                    to={getRoute(items.label)}
                                    className={({ isActive }) =>
                                        `font-saira flex my-5 text-[15px] transition duration-300 hover:text-white ${isActive ? 'text-white font-semibold' : 'text-gray-400'
                                        }`
                                    }
                                >
                                    <div className='flex items-center'>
                                        <Icon size={15} />
                                        <p className='ml-2 '>{items.label}</p>
                                    </div>
                                    
                                </NavLink>
                            )
                        })
                    }
                </div>
                
                <div className='h-15 flex items-center border-t border-gray-500'>
                    <div className='flex flex-row items-center '>
                       <MessageSquareText size={15} /> <h1 className=' font-saira flex text-[13px] ml-2 transition duration-300 hover:text-white' > community chat</h1>
                    </div>
                </div>
                <div className='h-15 flex items-center border-t border-gray-500'>
                    <div>
                        <h1 className='font-saira flex my-5 text-[15px] transition duration-300 hover:text-white' ></h1>
                    </div>
                </div>
            </div>

            {/* Mobile Overlay Sidebar */}
            <div className={isOpen ? 'h-screen w-full bg-neutral-900 border-r border-gray-500 fixed lg:hidden z-50 flex flex-col' : 'h-screen w-full bg-neutral-800 border-r border-gray-500 fixed hidden lg:hidden z-50 flex flex-col '}>
                <div className='h-15 flex items-center border-b border-gray-500 py-3 px-10 shrink-0'>
                    <Link to='/' className='text-white text-2xl font-bitcount'>{'</>Mrc'}</Link>
                    <button
                        className="lg:hidden text-white text-2xl font-bitcount ml-auto cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ⨉
                    </button>
                </div>

                <div className='px-6 py-5'>
                    {
                        nav.map((items, index) => {
                            const Icon = items.icon;

                            return (
                                <NavLink
                                    key={index}
                                    to={getRoute(items.label)}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `font-saira flex my-5 text-[15px] transition duration-300 hover:text-white flex flex-row ${isActive ? 'text-white font-semibold' : 'text-gray-400'
                                        }`
                                    }
                                >
                                    <div className='flex items-center'>
                                        <Icon size={15} />
                                        <p className='ml-2 '>{items.label}</p>
                                    </div>
                                    
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className='h-15 flex items-center border-t border-gray-500 px-6 py-5 mx-6'>
                    <div className='flex flex-row items-center '>
                       <MessageSquareText size={15} /> <h1 className=' font-saira flex text-[13px] ml-2 transition duration-300 hover:text-white' > community chat</h1>
                    </div>
                </div>
                <div className='h-15 flex items-center border-t border-gray-500 py-3 px-5 shrink-0 mx-6'>
                </div>
            </div>

            {/* Mobile Top Header */}
            <div className='h-15 w-full bg-neutral-900 border-b border-gray-500 px-10 flex justify-between items-center lg:hidden shrink-0'>
                <Link to="/" className='text-white text-2xl font-bitcount'>{'</>Mrc'}</Link>

                <button
                    className="lg:hidden text-white text-2xl font-bitcount cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Main Scrollable Area */}
            <main className='bg-neutral-900 h-screen w-full overflow-y-auto relative bg-grid-pattern'>
                {/* Subtle ambient glows for visual depth */}
                <div className='absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0' />
                <div className='absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-neutral-500/5 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none z-0' />

                <div className='relative z-10 w-full min-h-full animate'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
