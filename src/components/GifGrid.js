import React from 'react'
import { useFechtGifs } from '../hooks/useFetchGifs'
import { GiftGridItems } from './GiftGridItems';


export const GifGrid = ({category}) => {

    const {data:images, loading} = useFechtGifs(category);

   return (
        <>
            <h3 className="animate__animated animate__fadeIn" >{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading</p>}
                
            <div className="card-grid">
            {
                images.map(  img => (
                    <GiftGridItems 
                        key={img.id}
                        {...img}
                    />
                ))
            }
            </div>
        </>          
    )
}

