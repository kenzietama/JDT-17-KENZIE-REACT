import { useEffect, useState } from "react";
import { searchMovies, type Movie } from "../../service/Movies";

export const useSearch = (
	query: string,
	page: number = 1,
	includeAdult: boolean = false,
	primaryReleaseYear?: string
) => {
	const [searchResults, setSearchResults] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getSearchResults = async () => {
		if (!query.trim()) {
			setSearchResults([]);
			return;
		}
		setLoading(true);
		try {
			const response = await searchMovies(query, page, includeAdult, primaryReleaseYear);
			if (response) {
				setSearchResults(response.results || []);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getSearchResults();
	}, [query, page, includeAdult, primaryReleaseYear]);

	return { searchResults, loading };
};
