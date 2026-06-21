import { useEffect, useState } from "react";
import {
	getMovieDetailWithTrailer,
	type MovieDetailWithTrailer,
} from "../../service/movieDetail";

export const useMovieDetail = (id: number) => {
	const [movieDetail, setMovieDetail] = useState<MovieDetailWithTrailer>(
		{} as MovieDetailWithTrailer,
	);

	const getDetail = async () => {
		try {
			const response = await getMovieDetailWithTrailer(id);
			if (response) {
				setMovieDetail(response);
			}
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getDetail();
	}, []);
	return { movieDetail };
};
