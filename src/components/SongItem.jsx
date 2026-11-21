
import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {

    const { playWithId } = useContext(PlayerContext);

    return (
        <div
            onClick={() => playWithId(id)}
            className="w-[135px] sm:w-[160px] md:w-[180px] shrink-0 p-2 rounded cursor-pointer hover:bg-[#ffffff26]"
        >
            <img
                className="w-full aspect-square object-cover rounded"
                src={image}
                alt={name}
            />

            <p className="font-bold mt-2 mb-1 text-sm sm:text-base truncate">
                {name}
            </p>

            <p className="text-slate-200 text-xs sm:text-sm line-clamp-2">
                {desc}
            </p>
        </div>
    );
};

export default SongItem;
