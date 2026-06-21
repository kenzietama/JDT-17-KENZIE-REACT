import React from "react";
import { usePopular } from "../../hooks/Movies/usePopular";
import MoviesComponent from "../../components/movies";
import type { Movie } from "@/service/Movies";
import { Flex, Grid, Heading, Box } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import NowPlaying from "../../components/movies/nowplaying";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const Movies = () => {
	const { popularMovie } = usePopular();

	return (
		<Flex direction="column" align="center" gap="4">
			{/* Now Playing Component */}
			<NowPlaying />

			{/* Popular Movies */}
			<Grid columns="3" align="center" width="100%" mt="6">
				<Box></Box>
				<Heading as="h1" mt="6" align="center">
					Now Playing List
				</Heading>
				<Flex justify="end">
					<Button className="mr-5">
						<ArrowRightIcon />
					</Button>
				</Flex>
			</Grid>

			<Carousel
				opts={{
					align: "start",
				}}
				className="w-full max-w-4xl mx-auto"
			>
				<CarouselContent>
					{popularMovie.map((item: Movie, index) => (
						<CarouselItem
							key={index}
							className="basis-1/2 lg:basis-1/3"
						>
							<div className="p-1">
								<MoviesComponent movie={item} width={500} />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious variant="default" />
				<CarouselNext variant="default" />
			</Carousel>
		</Flex>
	);
};

export default Movies;
