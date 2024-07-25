import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

const Home = () => {
    const { search, setSearch, fetchDataFromSearch ,fav } = useContext(GlobalContext)

    const { data: recipeData, isLoading, isError, error } = useQuery({
        queryKey: ['recipes', search],
        queryFn: () => fetchDataFromSearch(search),
        enabled: !!search
    })

    return (
        <div className='w-full h-screen p-5 flex flex-col items-center'>
            <h1 className='text-5xl mt-10 font-bold text-red-800'>Food Recipes</h1>
            {!recipeData && (
                <h1 className='text-3xl flex justify-center text-center w-full mt-10 font-bold text-red-800'>Nothing To Show ,Please Search Something </h1>
            )

            }
            <div className="container mx-auto mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
                    {
                        isLoading && <h1 className='text-5xl mt-10 font-bold text-red-800'>Loading..</h1>
                    }
                    {
                        recipeData && recipeData.length > 0 && recipeData.map((recipe) => (
                            <div key={recipe?.id} className='bg-red-800 p-5 rounded-3xl flex flex-col items-center justify-center'>
                                <img src={recipe?.image_url} className='rounded-3xl w-64 h-56' alt={recipe?.title} />
                                <h2 className="text-white mt-5 mb-5 text-2xl">{recipe?.title}</h2>
                                <p className="text-gray-400 text-base font-bold">{recipe?.publisher}</p>
                                <Link to={`/recipe-item/${recipe?.id}`} className="text-black bg-gray-400 px-5 py-2 mt-5 rounded-lg font-semibold text-lg">View Recipe</Link>
                            </div>
                        ))
                    }
                    {
                        isError && <h1 className='text-3xl text-center mt-10 font-bold text-red-800'>Error: {error.message}</h1>
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
