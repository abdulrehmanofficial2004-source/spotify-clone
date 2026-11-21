
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-between items-center gap-2 font-semibold">

                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <img onClick={() => navigate(-1)} className="w-7 sm:w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(1)} className="w-7 sm:w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <p className="hidden md:block bg-white text-black text-sm px-4 py-1 rounded-2xl cursor-pointer whitespace-nowrap">
                        Explore Premium
                    </p>

                    <p className="hidden sm:block bg-black py-1 px-3 rounded-2xl text-sm cursor-pointer whitespace-nowrap">
                        Install Apps
                    </p>

                    <p className="bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer shrink-0">
                        A
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-sm sm:text-base">
                <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcasts</p>
            </div>
        </>
    )
}

export default Navbar
