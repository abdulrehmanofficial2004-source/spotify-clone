
import React from "react";
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/album/${id}`)}
            className="min-w-[135px] sm:min-w-[160px] md:min-w-[180px] py-2 px-2 sm:px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
        >
            <img className="w-full rounded" src={image} alt="" />
            <p className="text-slate-200 text-xs sm:text-sm mt-2 line-clamp-2">{desc}</p>
            <p className="font-bold mt-2 mb-1 text-sm sm:text-base truncate">{name}</p>
        </div>
    )
}

export default AlbumItem
