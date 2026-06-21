import { useEffect, useState } from "react";
import { getUpcomingMovies, type Movie } from "../../service/Movies";

export const useUpcoming = (page: number = 1) => {
	const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const getUpcomingMovie = async () => {
		setLoading(true);
		try {
			const response = await getUpcomingMovies(page);
			if (response) {
				setUpcomingMovies(response.results);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getUpcomingMovie();
	}, [page]);

	return { upcomingMovies, loading };
};
