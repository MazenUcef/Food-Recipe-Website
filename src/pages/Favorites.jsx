import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Favorites = () => {
    const {fav , handleAddToFav , handleDelete} = useContext(GlobalContext)
    console.log(fav);
    return (
        <div className='w-full h-screen p-5 flex flex-col items-center'>
            <h1 className='text-5xl mt-10 font-bold text-red-800'>Favorites</h1>
            <p className='mt-5'>{fav && (<span className='pr-1 text-red-800 font-bold'>{fav.length}</span>)}Items Added to Favorites</p>
            {fav && fav.length > 0 && fav.map((item)=>(
                <div key={item.id} className='border-b-2 flex flex-col justify-center items-center border-gray-400 p-5 mt-5'>
                    <img src={item.image_url} className='h-48 w-56 rounded-md'/>
                    <h2 className='text-xl font-bold'>{item.title}</h2>
                    <p>{item.description}</p>
                    <button onClick={()=>handleDelete(item.id)}>Remove from Favorites</button>
                </div>
            ))

            }
        </div>
    )
}

export default Favorites