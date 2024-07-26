import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { useQuery } from '@tanstack/react-query'

const Details = () => {
    const { fetchRecipeDetails, handleAddToFav, fav } = useContext(GlobalContext)
    const { id } = useParams()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['recipeDetails', id],
        queryFn: () => fetchRecipeDetails(id),
        enabled: !!id
    })

    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error: {error.message}</p>

    return (
        <div className='p-5 w-full h-screen flex flex-col items-center'>
            <h1 className='text-5xl mb-5 font-bold text-red-800'>Recipe Details</h1>
            <div className='w-full gap-10 p-5 flex justify-center items-center'>
                <div>
                    <img className='w-full min-h-screen object-cover' src={data?.image_url} alt={data?.name} />
                </div>
                <div className='text-red-800'>
                    <ol>
                        <li className='text-xl font-bold'>Publisher: {data?.publisher}</li>
                        <li className='text-lg font-semibold mb-10'>Cooking Time: {data?.cooking_time}</li>
                        <button
                            onClick={() => handleAddToFav(data)}
                            className='px-10 py-1 mt-5 mb-5 bg-red-800 text-white rounded-md'
                        >
                            {fav && fav.some(item => item.id === data?.id) ? "Remove From Fav" : "Add to Fav"}
                        </button>
                        {data?.ingredients && data?.ingredients.map((ingredient, index) => (
                            <ul key={index} className='text-sm'>
                                <li>Description: {ingredient?.description}</li>
                                <li>Quantity: {ingredient?.quantity}</li>
                                <li>Unit: {ingredient?.unit || "as per you"}</li>
                                <hr />
                            </ul>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Details
