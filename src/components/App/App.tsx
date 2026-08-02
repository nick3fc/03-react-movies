// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

// import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("null");

  const handleSearch = (searchString: string) => {
    setQuery(searchString);
    return query;
  };

  
  return <SearchBar onSubmit={handleSearch} />;
}
