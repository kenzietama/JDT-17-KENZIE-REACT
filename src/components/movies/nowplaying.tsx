import { useEffect, useState } from "react";
import { ACCESS_TOKEN, BASE_URL } from "../../constant";
import MoviesComponent from "./index";
import { Flex, Box, Heading, Grid } from "@radix-ui/themes";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router";

const NowPlaying = () => {
	const [nowPlayingList, setNowPlayingList] = useState([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [currentPage, setCurrentPage] = useState<number>(1);

	const getNowPlayingList = (page: number) => {
		setLoading(true);
		fetch(BASE_URL + `movie/now_playing?page=${page}&language=en-US`, {
			method: "get",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${ACCESS_TOKEN}`,
			},
		})
			.then((res) => res.json())
			.then((response) => {
				setNowPlayingList(response.results || []);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	// const navigate = useNavigate('/movie-page/top-rated', state: { getNowPlayingList(1) });

	useEffect(() => {
		getNowPlayingList(currentPage);
	}, [currentPage]);

	return (
		<Flex direction="column" align="center" gap="4" width="100%">
			<Grid columns="3" align="center" width="100%" mt="6">
				<Box></Box>
				<Heading as="h1" align="center">
					Now Playing List
				</Heading>
				<Flex justify="end">
					<Button className="mr-5">
						<ArrowRightIcon />
					</Button>
				</Flex>
			</Grid>

			<Box className="relative w-full overflow-hidden py-4">
				{loading ? (
					<Box className="text-center py-4">Loading...</Box>
				) : (
					<Flex gap="6" className="w-max animate-marquee">
						{nowPlayingList.map((item, index) => (
							<Box
								key={`playing-1-${index}`}
								className="w-32 shrink-0"
							>
								<MoviesComponent movie={item} />
							</Box>
						))}
						{nowPlayingList.map((item, index) => (
							<Box
								key={`playing-2-${index}`}
								className="w-32 shrink-0"
							>
								<MoviesComponent movie={item} />
							</Box>
						))}
					</Flex>
				)}
			</Box>
		</Flex>
	);
};

export default NowPlaying;
