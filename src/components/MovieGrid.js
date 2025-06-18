'use client'

import {useState, useEffect} from "react"
import axios from 'axios';
import movieData from "@/app/data/movies";
import MovieCard from "@/components/MovieCard";
import Loading from "@/components/Loading";

const MovieGrid = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    console.log(movieData);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2e8b6ebf19bdbf38ad4196faf045fb74')
                const responseData  = response.data.results;
                setData(responseData);
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }
        }
        getData();
    }, [])

  return (
    <div className="mx-20 grid grid-cols-6 gap-5 p-3 text-1xl">
        {!loading &&
                
            data.map((result) => (
                <MovieCard
                    title={result.title}
                    poster_path={result.poster_path}
                    key={result.id}
                    id={result.id}
                />
        ))}

        {loading && <Loading />}
        {error && "Hubo un error"}

    </div>
  )
}

export default MovieGrid