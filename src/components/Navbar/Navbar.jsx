import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

const Navbar = () => {
    const { search,fav , setSearch } = useContext(GlobalContext)
    console.log(search);
    return (
        <div className='py-5 px-5 bg-red-800 flex items-center justify-between'>
            <div>
                <h1 className='text-gray-300 text-3xl font-semibold'>
                    Foodie App
                </h1>
            </div>
            <div>
                <input
                    className='h-10 rounded-md w-[30rem] p-3'
                    placeholder='meals input...'
                    name='search'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className='flex gap-5 text-gray-300 font-bold'>
                <Link to={'/'}>Home</Link>
                <Link to={'/favorites'}>Favorites({fav && <span>{fav.length}</span>})</Link>
            </div>
        </div>
    )
}

export default Navbar