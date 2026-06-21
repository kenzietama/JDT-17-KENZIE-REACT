export interface MovieDetail {
	id: number;
	original_title: string;
	overview: string;
	poster_path: string;
	backdrop_path: string;
	genres: { id: number; name: string }[];
	release_date: string;
}

export interface MovieTrailer {
	site: string;
	type: string;
	key: string;
}

export interface MovieDetailWithTrailer extends MovieDetail {
	trailerKey: string | null;
}
