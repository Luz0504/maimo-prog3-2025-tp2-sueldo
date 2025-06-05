'use client'

import Image from "next/image"
import {useState, useEffect} from "react"

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieContainer = ({id}) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      <Image
        src={IMG_BASE_URL + data.poster_path}
        alt={data.title}
        width={500}
        height={750}
        className="rounded-lg shadow-lg mb-6"
      />

      <p><strong>Popularidad:</strong> {data.popularity}</p>
      <p><strong>Fecha de estreno:</strong> {data.release_date}</p>
      <p><strong>Duración:</strong> {data.runtime} minutos</p>
      <p><strong>Promedio de votos:</strong> {data.vote_average}</p>

      {data.genres && data.genres.length > 0 && (
        <p><strong>Géneros:</strong> {data.genres.map(g => g.name).join(', ')}</p>
      )}

      <p className="mt-4"><strong>Descripción:</strong> {data.overview}</p>
    </div>
);

};

export default MovieContainer