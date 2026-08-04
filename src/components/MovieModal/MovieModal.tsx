import css from "../MovieModal/MovieModal.module.css";

import type { Movie } from "../../types/movie";

interface MovieModalProps {
  onClose: () => void;
  movie: Movie;
}

export default function MovieModal({ onClose, movie }: MovieModalProps) {
  return (
    <div className={css.backdrop} role="dialog" aria-modal="true">
      <div className={css.modal}>
        <button
          className={css.closeButton}
          aria-label="Close modal"
          onClick={() => onClose()}
        >
          &times;
        </button>
        <img
          src={`${import.meta.env.VITE_TMDB_IMGPATH}${movie.backdrop_path}`}
          alt={movie.title}
          className={css.image}
        />
        <div className={css.content}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average}
          </p>
        </div>
      </div>
    </div>
  );
}
