import { useEffect, useState } from "react";
import { getPopularMovies, type Movie } from "../../service/Movies";

export const usePopular = (page: number = 1) => {
	const [popularMovie, setPopularMovie] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getPopularMovie = async () => {
		setLoading(true);
		try {
			const response = await getPopularMovies(page);
			if (response) {
				setPopularMovie(response.results);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getPopularMovie();
	}, [page]);

	return { popularMovie, loading };
};
