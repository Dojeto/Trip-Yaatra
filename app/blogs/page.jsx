import Link from 'next/link'
import React from 'react'

const Blogs = () => {
    return (
        <div className="pt-[125px]">
            <div className="w-full h-[660px] relative">
                <img src="/assets/blog1.jpg" alt="" className="w-full h-full object-cover" />
            </div>

            <div className=" mt-[40px]   flex flex-col justify-center items-center ">
                     
                <div className=" grid grid-cols-3 gap-x-8 mt-18 gap-y-8">

                    <div className="max-w-[350px] bg-white  border-b-2 border-black  ">
                        <Link href="#" className='w-fit'>
                            <img className="rounded-t-lg w-full" src="/assets/blog1.jpg" alt="" />
                        </Link>
                        <div className="p-5">
                            <div >
                                <h2 className='mb-2 text-[13px] '>Your Place, Oct 24, 2021</h2>
                            </div>
                            <div >
                                <h5 className="mb-2 text-[20px] font-bold tracking-tight text-gray-900 dark:text-black">Noteworthy technology acquisitions 2021</h5>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkbl rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out  ">
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
