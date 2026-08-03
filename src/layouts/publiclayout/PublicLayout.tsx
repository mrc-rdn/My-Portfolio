
import { Outlet, NavLink, Link } from 'react-router-dom'
import { useState } from "react";

export default function PublicLayout() {
    const nav: string[] = ['Project', 'Experience', 'Stack', 'Certifications', 'Games']
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <div className='h-screen w-50 bg-neutral-800 border-r border-gray-500 hidden lg:flex flex-col shrink-0'>
                <div className='px-8 py-5 mb-auto'>
                    <Link to="/" className='text-white text-2xl font-bitcount mb-7'>Mrco</Link>
                    {
                        nav.map((items, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={getRoute(items)}
                                    className={({ isActive }) =>
                                        `font-saira flex my-5 text-[15px] transition duration-300 hover:text-white ${isActive ? 'text-white font-semibold' : 'text-gray-400'
                                        }`
                                    }
                                >
                                    {items}
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className='h-15 flex items-center border-t border-gray-500 py-3 px-5'>
                </div>
            </div>

            {/* Mobile Overlay Sidebar */}
            <div className={isOpen ? 'h-screen w-full bg-neutral-800 border-r border-gray-500 fixed lg:hidden z-50 flex flex-col' : 'h-screen w-full bg-neutral-800 border-r border-gray-500 fixed hidden lg:hidden z-50 flex flex-col '}>
                <div className='h-15 flex items-center border-b border-gray-500 py-3 px-10 shrink-0'>
                    <h2 className='text-white text-2xl font-bitcount'>{'</>Mrc'}</h2>
                    <button
                        className="lg:hidden text-white text-2xl font-bitcount ml-auto cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        ⨉
                    </button>
                </div>

                <div className='px-8 py-5 mb-auto'>
                    {
                        nav.map((items, index) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={getRoute(items)}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `font-saira flex my-5 text-[15px] transition duration-300 hover:text-white ${isActive ? 'text-white font-semibold' : 'text-gray-400'
                                        }`
                                    }
                                >
                                    {items}
                                </NavLink>
                            )
                        })
                    }
                </div>
                <div className='h-15 flex items-center border-t border-gray-500 py-3 px-5 shrink-0'>
                </div>
            </div>

            {/* Mobile Top Header */}
            <div className='h-15 w-full bg-neutral-800 border-b border-gray-500 px-10 flex justify-between items-center lg:hidden shrink-0'>
                <h2 className='text-white text-2xl font-bitcount'>{'</>Mrc'}</h2>
                <button
                    className="lg:hidden text-white text-2xl font-bitcount cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Main Scrollable Area */}
            <main className='bg-neutral-800 h-screen w-full overflow-y-auto relative bg-grid-pattern'>
                {/* Subtle ambient glows for visual depth */}
                <div className='absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none z-0' />
                <div className='absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-neutral-500/5 rounded-full blur-[120px] sm:blur-[140px] pointer-events-none z-0' />

                <div className='relative z-10 w-full min-h-full'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
