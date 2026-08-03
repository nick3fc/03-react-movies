import css from "./MovieGrid.module.css";

import type { Movie } from "../../types/movie";

interface MovieGridProps {
  onSelect: () => void;
  movies: Movie[];
}

export default function MovieGrid({ onSelect, movies }: MovieGridProps) {
  console.log("grid received ", movies);
  //   console.log(`${import.meta.env.VITE_TMDB_IMGPATH}${movies[0].poster_path}`);

  return (
    <ul className={css.grid}>
      {/* Набір елементів списку з фільмами */}
      {movies.map((movie: Movie) => (
        <li key={movie.id}>
          <div id={`card-${movie.id}`} className={css.card}>
            <img
              className={css.image}
              src={`${import.meta.env.VITE_TMDB_IMGPATH}${movie.poster_path}`}
              alt={`movie ${movie.title}`}
              loading="lazy"
            />
            <h2 className={css.title}>{movie.title}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
}
