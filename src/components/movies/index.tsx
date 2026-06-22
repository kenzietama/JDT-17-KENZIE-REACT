import type { Movie } from "../../service/Movies";
import { useNavigate } from "react-router";
import { Flex, Text } from "@radix-ui/themes";

interface Props {
	movie: Movie;
	width?: number;
}

const MoviesComponent = ({ movie, width }: Props) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/movie-detail", { state: movie.id });
	};

	return (
		<Flex
			direction="column"
			align="center"
			mx="auto"
			gap="2"
			onClick={handleClick}
			className="cursor-pointer w-full min-w-0"
		>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.original_title}
				width={width || 250}
				className="border-4 aspect-2/3"
			/>
			<Text className="truncate block w-full text-center">
				{movie.original_title}
			</Text>
		</Flex>
	);
};

export default MoviesComponent;
