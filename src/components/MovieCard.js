'use client'

import Image from "next/image"
import Link from "next/link";
import { useAppContext } from "@/app/contexts/AppContext";
import AgregarFav from "@/components/AgregarFav";
import QuitarFav from "@/components/QuitarFav";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({id, title, poster_path}) => {
  
  const { favorites, handleAddToFavorites, handleRemove } = useAppContext();
  const isFavorite = favorites.some(fav => fav.id == id);

  return (
    <div className="bg-white border-5 border-white rounded-sm flex flex-col justify-center overflow-hidden hover:scale-110 duration-100 ease-in">
      <Link href={`/movie/${id}`}>
        <Image
        src={IMG_BASE_URL + poster_path}
        width={800}
        height={800}
        alt={title}
        className="hover:pseudo-class hover:opacity-65"
      />
      </Link>
      <div
        className="h-11.5 bg-center bg-cover flex items-center justify-center align-middle m-2"
        style={{ backgroundImage: "url('/assets/titulo.png')"}}
      >
        <h4 className="text-black text-center rounded truncate px-5">
          {title}
        </h4>
      </div>
        {isFavorite ? (
          <QuitarFav onClick={() => handleRemove(id)} />
        ) : (
          <AgregarFav onClick={() => handleAddToFavorites(title, poster_path, id)} />
        )}
    </div>
  )
}

export default MovieCard