import Link from 'next/link'
import React from 'react'

const Blogs = () => {
    return (
        <div className="pt-[125px]">
            <div className="w-[100%] h-[650px] relative">
                <img src="/assets/blogs.jpg" alt="" className="w-full h-full" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                    Let’s Take a look as to what the coolest travel community says
                </h1>
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold mt-[70px]">
                    about the upcoming travel trends!
                </h1>
            </div>

            <div className=" mt-[50px]  px-36 flex flex-col justify-center items-center ">
                <div>
                    <h2 className=" m-3 font-bold text-center text-darkbl text-4xl">
                        Our Blogs
                    </h2>
                    
                </div>
                <div className=" bg-highlight w-[120px] h-[3px] mt-1 mb-11"></div>
                <div className=" grid grid-cols-3 gap-x-3 mt-18 gap-y-5">
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <Link href="#" className='w-fit'>
                            <img className="rounded-t-lg w-full" src="/assets/AboutUs/aboutus1.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <Link href="#" className='w-fit'>
                            <img className="rounded-t-lg w-full" src="/assets/AboutUs/aboutus1.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <Link href="#" className='w-fit'>
                            <img className="rounded-t-lg w-full" src="/assets/AboutUs/aboutus1.png" alt="" />
                        </Link>
                        <div className="p-5">
                            <Link href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                   
                   
                </div>
            </div>

        </div>
    )
}

export default Blogs
