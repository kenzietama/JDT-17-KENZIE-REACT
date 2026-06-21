import API from "../api";
import type { MovieDetail, MovieTrailer } from "./type";

export const getMovieDetail = async (id: number) => {
	try {
		const response = await API.get(`movie/${id}`);

		return response.data as MovieDetail;
	} catch (error) {
		console.error(error);
	}
};

export const getMovieTrailer = async (id: number) => {
	try {
		const response = await API.get(`movie/${id}/videos`);

		return response.data.results as MovieTrailer[];
	} catch (error) {
		console.error(error);
	}
};

export const getMovieDetailWithTrailer = async (id: number) => {
	try {
		const [detailResponse, trailerResponse] = await Promise.all([
			API.get(`movie/${id}`),
			API.get(`movie/${id}/videos`),
		]);

		const detailData = detailResponse?.data;
		const results = trailerResponse?.data?.results || [];

		if (!detailData) throw new Error("Failed to fetch movie detail");

		const trailer = results.find(
			(item: any) => item.site === "YouTube" && item.type === "Trailer",
		);
		const fallback = results.find(
			(item: any) => item.site === "YouTube",
		);

		return {
			...detailData,
			trailerKey: trailer ? trailer.key : fallback ? fallback.key : null,
		};
	} catch (error) {
		console.error(error);
	}
};
