import { GitHubCalendar } from "react-github-calendar";
import { useState } from "react";

export default function Home() {
    type socialaccount = {
        id: number;
        social: string;
        link: string;
    }
    const socialAccount: socialaccount[] = [{ id: 1, social: 'github ↗', link: 'https://github.com/mrc-rdn' },
    { id: 2, social: 'linkedin ↗', link: 'https://www.linkedin.com/in/john-marco-ardina-71b166371/' },
    { id: 3, social: 'instagram ↗', link: 'https://www.instagram.com/mrc_rdna/' }]

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
        <div className='flex flex-col items-center w-full pt-30 overflow-scroll'>
            <div className='px-10 w-11/12 lg:w-200 flex flex-col lg:flex-row items-center'>
                <img src="/images/Mrc.png" alt="" className='sm:h-70 sm:w-70 ' />
                <div className='text-gray-400 w-full mt-10 lg:mt-0'>
                    <h1 className='text-gray-100 font-bitcount text-3xl px-10'>John Marco Ardina</h1>
                    <p className=" font-display font-saira text-lg  text-[15px] px-10 py-3">
                        I am a Full Stack Developer dedicated to helping teams build reliable and
                        effective solutions with passion and excellence.
                    </p>
                    <p className="font-display font-saira text-lg  text-[15px] px-10 py-3">
                        Transforming creative ideas, code, and concepts into engaging digital experiences
                        that inspire, solve problems, and create lasting impact.
                    </p>
                    <div className="px-10 py-3 w-full flex justify-between">
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

            <div className={isOpen ? ("w-full h-screen bg-white/50 absolute inset-0 flex items-center justify-center") : ('hidden')} >
                <div className="w-100 h-55 rounded-xl bg-neutral-800 text-gray-200 p-7">
                    <button className="text-[13px] absolute ml-85 top-68"
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
