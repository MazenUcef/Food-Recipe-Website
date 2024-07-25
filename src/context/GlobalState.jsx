// context/GlobalState.js
import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [search, setSearch] = useState('');
    const [fav, setFav] = useState([]);
    // const [recipeData, setRecipeData] = useState([]);
    const handleDelete = (id)=>{
        const copyFavs = [...fav]
        const index = copyFavs.findIndex(item => item.id === id)
        if (index!== -1) {
            copyFavs.splice(index, 1)
        }
        setFav(copyFavs)

    }

    const handleAddToFav = (currItem) => {
        const copyFavs = [...fav]
        const index = copyFavs.findIndex(item => item.id === currItem.id)
        if (index === -1) {
            copyFavs.push(currItem)
        } else {
            copyFavs.splice(currItem)
        }
        setFav(copyFavs)
    }


    const fetchRecipeDetails = async (id) => {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await res.json();
            console.log(data);
            return data?.data?.recipe
        } catch (error) {
            throw new Error(error.message)
        }
    }




console.log(fav);

    const fetchDataFromSearch = async (param) => {
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${param}`)
            const data = await res.json();
            // setRecipeData(data?.data?.recipes);
            return data?.data?.recipes
        } catch (error) {
            throw new Error(error.message);

        }
    }
    // fetchDataFromSearch(search)
    return (
        <GlobalContext.Provider value={{handleDelete,fav, handleAddToFav, search, setSearch, fetchDataFromSearch, fetchRecipeDetails }}>
            {children}
        </GlobalContext.Provider>
    );
};
