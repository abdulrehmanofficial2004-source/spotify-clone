
import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome.jsx'
import DisplayAlbum from './DisplayAlbum.jsx'
import { albumsData } from '../assets/assets.js'

const Display = () => {

    const displayRef = useRef();
    const location = useLocation();

    const isAlbum = location.pathname.includes("album");

    const albumId = isAlbum
        ? location.pathname.split("/").pop()
        : null;

    const bgColor = isAlbum
        ? albumsData[Number(albumId)]?.bgColor
        : null;

    useEffect(() => {
        if (displayRef.current) {
            if (isAlbum && bgColor) {
                displayRef.current.style.background =
                    `linear-gradient(${bgColor}, #121212)`;
            } else {
                displayRef.current.style.background = "#121212";
            }
        }
    }, [isAlbum, bgColor]);

    return (
        <div
        ref={displayRef}
        className="flex-1 min-w-0 min-h-0 m-0 lg:m-2 px-3 sm:px-5 lg:px-6 pt-3 sm:pt-4 rounded bg-[#121212] text-white overflow-y-auto overflow-x-hidden"
    >
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display
