
import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];

    const { playWithId } = useContext(PlayerContext);

    return (
        <div className="min-w-0">

            <Navbar />

            <div className="mt-6 sm:mt-10 flex gap-5 sm:gap-8 flex-col md:flex-row md:items-end">

                <img className="w-36 sm:w-48 rounded" src={albumData.image} alt="" />

                <div className="flex flex-col min-w-0">
                    <p>Playlist</p>

                    <h2 className="text-3xl sm:text-5xl font-bold mb-3 md:text-7xl">
                        {albumData.name}
                    </h2>

                    <h4 className="text-sm sm:text-base">{albumData.desc}</h4>

                    <p className="mt-2 text-xs sm:text-sm">
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="" />
                        <b className="mx-2">Spotify</b>
                        • 1,432,290 likes
                        • <b className="mr-2">55 songs,</b>
                        about 2 hr 40 min
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-[1fr_auto] sm:grid-cols-4 mt-8 sm:mt-10 mb-4 px-2 sm:pl-10 text-xs sm:text-sm text-gray-400">
                <p><b className="mr-4">#</b>Title</p>
                <p className="hidden sm:block">Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className="m-auto w-4" src={assets.clock_icon} alt="" />
            </div>

            <hr className="border-[#ffffff20]" />

            {
                songsData.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => playWithId(item.id)}
                        className="grid grid-cols-[1fr_auto] sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
                    >
                        <p className="text-white min-w-0 truncate">
                            <b className="mr-2 sm:mr-4 text-[#a7a7a7]">{index + 1}</b>
                            <img className="inline-block w-8 sm:w-10 mr-2 sm:mr-5" src={item.image} alt="" />
                            {item.name}
                        </p>
                    </div>
                ))
            }

        </div>
    )
}

export default DisplayAlbum
