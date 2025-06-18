'use client';

import {useState, useEffect, useContext, createContext} from 'react';

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    
    useEffect (() => {
        console.log("Favoritos", favorites)
    }, [favorites])

    const handleAddToFavorites = (title, image, id) => {
        
        const dupli = favorites.some(fav => fav.id == id);

        if(!dupli) {
            setFavorites([...favorites, { title, image, id }]);
        }

    }

    const handleRemove = (id) => {
        const updatedFavorites = favorites.filter(fav => fav.id !== id);
            setFavorites(updatedFavorites);
    }

    const favoritesQty = () => favorites.length

    return (
        <AppContext.Provider
            value = {{
                favorites,
                handleAddToFavorites, 
                handleRemove,
                favoritesQty,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(!context) {
        throw new Error ('useAppContext must be used within an AppContextProvider');
    }
    return context;
}

export default AppContext;