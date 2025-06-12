'use client'

import { useState, useEffect } from "react"
import axios from "axios";

const Banner = () => {
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    const getFeaturedMovie = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=2e8b6ebf19bdbf38ad4196faf045fb74');
        const movies = response.data.results;
        setFeaturedMovie(movies[4]);
      } catch (error) {
        console.error("Error cargando la película destacada:", error);
      }
    };
    getFeaturedMovie();
  }, []);

  if (!featuredMovie) return <p>Cargando película destacada...</p>;

  return (
    <section
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${featuredMovie.backdrop_path})`
      }}
      className="w-full h-[500px] bg-cover bg-no-repeat bg-center text-white"
    >
      <div className="bg-black opacity-70 h-full flex flex-col justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">{featuredMovie.title}</h1>
        <p className="max-w-2xl">{featuredMovie.overview}</p>
      </div>
    </section>
  );
};

export default Banner;