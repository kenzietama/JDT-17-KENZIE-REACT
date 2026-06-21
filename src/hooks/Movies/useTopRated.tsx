import { useEffect, useState } from "react";
import { getTopRatedMovies, type Movie } from "../../service/Movies";

export const useTopRated = (page: number = 1) => {
	const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getTopRatedMovie = async () => {
		setLoading(true);
		try {
			const response = await getTopRatedMovies(page);
			if (response) {
				setTopRatedMovies(response.results);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getTopRatedMovie();
	}, [page]);

	return { topRatedMovies, loading };
};
