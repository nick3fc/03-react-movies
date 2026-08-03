// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
// import MovieModal from "../MovieModal/MovieModal";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { getMoviesList } from "..//../services/movieService";

import type { Movie } from "../../types/movie";

import { useEffect, useState } from "react";

import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loader, setLoader] = useState(false);
  const [httpError, setHttpError] = useState(false);

  const handleSearch = (searchString: string) => {
    setMovies([]);
    setQuery(searchString);
    setLoader(true);
    setHttpError(false);
    console.log("app received ", searchString);
  };
  const handleSelect = () => {};
  // const handleClose = () => {};

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      try {
        const movies = await getMoviesList(query);

        setMovies(movies);

        if (movies.length === 0) {
          toast("No movies found for your request.", {
            style: {
              background: "#f3900e",
              color: "#000000",
            },
          });
        }
      } catch (error) {
        console.error(error);
        setHttpError(true);
        toast("No connection to server.", {
          style: {
            background: "#ff0000",
            color: "#000000",
          },
        });
      } finally {
        setLoader(false);
      }
    };

    fetchMovies();
  }, [query]);

  return (
    <>
      {/* main components */}
      <SearchBar onSubmit={handleSearch} />
      {loader ? (
        <Loader />
      ) : httpError ? (
        <ErrorMessage />
      ) : (
        movies.length > 0 && (
          <MovieGrid onSelect={handleSelect} movies={movies} />
        )
      )}
      {/* {createPortal(
        <MovieModal onClose={handleClose} movie={movie[0]} />,
        document.body,
      )} */}
      {/* additional components */}
      <Toaster
        position="top-center"
        //   reverseOrder={false}
        //   gutter={8}
        containerClassName=""
        containerStyle={{}}
        toasterId="default"
        toastOptions={{
          // Define default options
          className: "",
          duration: 3000,
          removeDelay: 1000,
          // style: {
          //   background: "#f96205",
          //   color: "#000000",
          // },
        }}
      />
    </>
  );
}
