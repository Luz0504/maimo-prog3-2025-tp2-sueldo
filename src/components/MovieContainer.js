'use client'

import Image from "next/image"
import {useState, useEffect} from "react"
import { useAppContext } from "@/app/contexts/AppContext";
import AgregarFav from "@/components/AgregarFav";
import QuitarFav from "@/components/QuitarFav";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieContainer = ({id}) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { favorites, handleAddToFavorites, handleRemove } = useAppContext();
  const isFavorite = favorites.some(fav => fav.id == id);

  useEffect (() => {

    const getData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2e8b6ebf19bdbf38ad4196faf045fb74`;
        const responseId = await fetch(url);
        const responseDataId = await responseId.json();
        setData(responseDataId);
        setLoading(false);
      } catch (error){
        console.log('Mi error fue', error);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, [id])

  if (loading) return <p>Cargando película...</p>;
  if (error || !data) return <p>Hubo un error cargando los datos.</p>;

  return (
    <div
    style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
        }}
        className={`w-full h-[100vh] bg-cover bg-no-repeat bg-center`}
    >
      
      <Image
        src={IMG_BASE_URL + data.poster_path}
        alt={data.title}
        width={800}
        height={450}
        className="rounded-b-[200] float-right w-[29%] pl-0 pr-6 pt-5 shadow-black-x1/90"
      />

      <div className="bg-gradient-to-r from-black to-black-80% float-left h-[100vh] w-[70%] pt-5 pl-15 pb-[9.55%] pr-[10%] text-amber-50">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      
      <div className="flex gap-10 my-8">
        <div><h2>Fecha de estreno</h2><p> {data.release_date}</p></div>
        <div><h2>Duración</h2><p> {data.runtime} minutos</p></div>
      </div>
      <div className="flex gap-22 mb-8">
        <div><h2>Popularidad</h2><p> {data.popularity}</p></div>
        <div><h2>Promedio de votos</h2><p>{data.vote_average}⭐</p></div>
      </div>
      <div className="flex">
      {data.genres && data.genres.length > 0 && (
        <h2>Géneros: <span>{data.genres.map(g => g.name).join(' ')}</span></h2>
      )}
      </div>
      <div className="mb-8">
        <h2 className="mt-4">Descripción:</h2> <p>{data.overview}</p>
      </div>
      <div className="flex w-60">
        {isFavorite ? (
          <QuitarFav onClick={() => handleRemove(data.id)} />
        ) : (
          <AgregarFav onClick={() => handleAddToFavorites(data.title, data.poster_path, data.id)} />
        )}
      </div>
      </div>
      
    </div>
);

};

export default MovieContainer