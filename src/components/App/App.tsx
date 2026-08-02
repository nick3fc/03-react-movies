// import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";

// import { useState } from "react";

export default function App() {
  return <SearchBar onSubmit={handleSearch} />;
}
