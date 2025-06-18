'use client'

import { useAppContext } from "@/app/contexts/AppContext"
import MovieCard from "@/components/MovieCard"

const FavoritesContainer = () => {

    const {favorites} = useAppContext()

    return (
    <div className="mx-20 grid grid-cols-6 gap-5 p-3 text-1xl">
      {favorites.map((fav) => (
        <div key={fav.id} >
          <MovieCard
           id={fav.id}
           title={fav.title}
           poster_path={fav.image}
           alt={fav.title}
          />
        </div>
      ))}
    </div>
    )
  }

export default FavoritesContainer