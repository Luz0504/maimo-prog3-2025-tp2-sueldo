import Image from "next/image"
import Link from "next/link";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({id, title, poster_path}) => {
  
  return (
    <div>
      <h2>{title}</h2>
      <Image
        src={IMG_BASE_URL + poster_path}
        width={900}
        height={900}
        alt={title}
      />
      <Link href={`/movie/${id}`}>
            Ver Más
      </Link>
    </div>
  )
}

export default MovieCard