import { useMovieDetail } from "@/hooks/Movies/useDetail";
import { useLocation } from "react-router";
import { Badge } from "@radix-ui/themes";

const MovieDetail = () => {
	const location = useLocation();
	const movieId = location.state;

	const { movieDetail } = useMovieDetail(movieId);
	const loading = !movieDetail.id;

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen text-white">
				Loading...
			</div>
		);
	}

	return (
		<>
			{/* backdrop */}
			<div
				className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: movieDetail.backdrop_path
						? `url(https://image.tmdb.org/t/p/original${movieDetail.backdrop_path})`
						: "none",
				}}
			>
				<div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
			</div>

			{/* wrapper aja */}
			<div className="flex flex-col gap-8 justify-center min-h-[calc(100vh-120px)] p-8 text-white max-w-4xl mx-auto mt-10">
				{/* detail */}
				<div>
					<h1 className="text-4xl font-bold">
						{movieDetail.original_title} ({" "}
						{new Date(movieDetail.release_date).getFullYear()} )
					</h1>
					<div className="flex flex-col md:flex-row gap-6 mt-6">
						<img
							src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
							alt={movieDetail.original_title}
							className="w-64 rounded-lg shadow-2xl h-auto object-cover self-start"
						/>
						<div className="flex flex-col gap-4">
							<div className="flex flex-row gap-2">
								{movieDetail.genres.map((genre) => (
									<Badge key={genre.id} variant="soft">
										{genre.name}
									</Badge>
								))}
							</div>
							<p className="text-gray-300 leading-relaxed text-lg">
								{movieDetail.overview}
							</p>
						</div>
					</div>
				</div>

				{/* iframe */}
				<div className="w-full flex flex-col items-center border-t border-white/10 pt-6">
					<h2 className="text-2xl font-semibold mb-4 self-start">
						Official Trailer
					</h2>
					{movieDetail.trailerKey ? (
						<div className="w-full max-w-3xl aspect-video">
							<iframe
								className="w-full h-full rounded-lg border-0 shadow-2xl"
								src={`https://www.youtube.com/embed/${movieDetail.trailerKey}`}
								title={`${movieDetail.original_title} Trailer`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							/>
						</div>
					) : (
						<p className="text-muted-foreground self-start">
							No trailer available
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default MovieDetail;
