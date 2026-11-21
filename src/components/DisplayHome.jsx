
import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from "./SongItem"

const DisplayHome = () => {
    return (
        <>
            <Navbar />

            {/* Featured Charts */}
            <div className='mb-4'>
                <h1 className='my-4 sm:my-5 font-bold text-xl sm:text-2xl'>
                    Featured Charts
                </h1>

                <div className='flex gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden'>
                    {albumsData.map((item) => (
                        <AlbumItem
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>

            {/* Today's Biggest Hits */}
            <div className='mb-4'>
                <h1 className="my-4 sm:my-5 font-bold text-xl sm:text-2xl">
                    Today's biggest hits
                </h1>

                <div className='flex gap-2 sm:gap-3 overflow-x-auto overflow-y-hidden'>
                    {songsData.map((item) => (
                        <SongItem
                            key={item.id}
                            name={item.name}
                            desc={item.desc}
                            id={item.id}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default DisplayHome
