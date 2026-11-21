
import React, { useContext } from "react"
import Sidebar from "./components/Sidebar"
import Player from './components/Player'
import Display from "./components/Display"
import { PlayerContext } from "./context/PlayerContext"

const App = () => {
  const { audioRef, track, isFullscreen } = useContext(PlayerContext)

  return (
    <div className="h-screen bg-black flex flex-col overflow-hidden">

        <div className="flex-1 min-h-0 flex gap-2 p-2">
            {!isFullscreen && <Sidebar />}
            <Display />
        </div>

        <Player />

        <audio
            ref={audioRef}
            src={track.file}
            preload="auto"
        ></audio>

    </div>
)
}

export default App
