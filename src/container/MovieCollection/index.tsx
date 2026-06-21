import React, { useState } from "react";
import { type Movie } from "@/service/Movies";
import MoviesComponent from "@/components/movies";

const MoviesCollection = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	return <div></div>;
};

export default MoviesCollection;
