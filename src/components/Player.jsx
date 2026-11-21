
import React, { useContext } from 'react'
import { assets } from "../assets/assets"
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const {
        track, seekBar, seekBg, playStatus, play, pause,
        time, previous, next, seekSong, volume, setVolume,
        isFullscreen, toggleFullscreen
    } = useContext(PlayerContext)

    return (
        <div className="h-[76px] sm:h-[85px] shrink-0 flex justify-between items-center gap-2 text-white px-2 sm:px-4">

            {/* Song Info */}
            <div className="hidden lg:flex items-center gap-3 w-[25%] min-w-0">
                <img className="w-10 xl:w-12 shrink-0" src={track.image} alt="" />
                <div className="min-w-0">
                    <p className="truncate text-sm">{track.name}</p>
                    <p className="truncate text-xs text-gray-400">{track.desc}</p>
                </div>
            </div>

            {/* Player Controls */}
            <div className="flex flex-col items-center gap-2 flex-1 min-w-0">

                <div className="flex items-center justify-center gap-3 sm:gap-5">
                    <img className="hidden sm:block w-4 cursor-pointer" src={assets.shuffle_icon} alt="" />

                    <img onClick={previous} className="w-3.5 sm:w-4 cursor-pointer" src={assets.prev_icon} alt="" />

                    {playStatus
                        ? <img onClick={pause} className="w-4 sm:w-5 cursor-pointer" src={assets.pause_icon} alt="" />
                        : <img onClick={play} className="w-4 sm:w-5 cursor-pointer" src={assets.play_icon} alt="" />
                    }

                    <img onClick={next} className="w-3.5 sm:w-4 cursor-pointer" src={assets.next_icon} alt="" />

                    <img className="hidden sm:block w-4 cursor-pointer" src={assets.loop_icon} alt="" />
                </div>

                <div className="flex items-center gap-2 sm:gap-4 w-full max-w-[550px]">
                    <p className="text-[10px] sm:text-xs whitespace-nowrap">
                        {time.currentTime.minute}:{String(time.currentTime.second).padStart(2, '0')}
                    </p>

                    <div onClick={seekSong} ref={seekBg} className="flex-1 min-w-0 bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar} className="h-1 border-none w-0 bg-[#1DB954] rounded-full" />
                    </div>

                    <p className="text-[10px] sm:text-xs whitespace-nowrap">
                        {time.totalTime.minute}:{String(time.totalTime.second).padStart(2, '0')}
                    </p>
                </div>
            </div>

            {/* Volume and Extra Controls */}
            <div className="hidden md:flex items-center justify-end gap-2 lg:gap-3 w-[25%] min-w-0">
                <img className="w-4" src={assets.plays_icon} alt="" />
                <img className="w-4" src={assets.mic_icon} alt="" />
                <img className="w-4" src={assets.queue_icon} alt="" />
                <img className="w-4" src={assets.speaker_icon} alt="" />
                <img className="w-4" src={assets.volume_icon} alt="" />

                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-12 lg:w-20 accent-[#1DB954] cursor-pointer"
                />

                <img className="hidden lg:block w-4" src={assets.mini_player_icon} alt="" />

                <img
                    onClick={toggleFullscreen}
                    className="hidden lg:block w-4 hover:scale-110 cursor-pointer"
                    src={assets.zoom_icon}
                    alt="Maximize"
                />
            </div>

        </div>
    )
}

export default Player
