import React from "react";
import type { Movie } from "../../service/Movies";
import { Label } from "../label";
import { useNavigate } from "react-router";
import { Box, Container, Flex, Heading, Text } from "@radix-ui/themes";

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
		// <div className="w-full flex items-center cursor-pointer" onClick={handleClick}>
		//   <div className="flex flex-col">
		//     <img
		//       src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
		//       alt=""
		//       width={50}
		//       height={50}
		//     />
		//     <div className="flex">
		//       <Label>{movie.original_title}</Label>
		//     </div>
		//   </div>
		// </div>
		<Flex
			direction="column"
			align="center"
			mx="auto"
			gap="2"
			onClick={handleClick}
			className="cursor-pointer"
		>
			<img
				src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
				alt={movie.original_title}
				width={width || 250}
				className="border-4 aspect-2/3"
			/>
			<Text className="truncate block w-full">
				{movie.original_title}
			</Text>
		</Flex>
	);
};

export default MoviesComponent;
