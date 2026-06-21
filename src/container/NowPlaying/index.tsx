import { useEffect, useState } from "react";
import { ACCESS_TOKEN, BASE_URL } from "../../constant";
import MoviesComponent from "../../components/movies";
import { Flex, Box, Heading, Grid } from "@radix-ui/themes";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const NowPlayingPage = () => {
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

	useEffect(() => {
		getNowPlayingList(currentPage);
	}, [currentPage]);

	return (
		<Flex direction="column" align="center" gap="6" width="100%" p="4">
			<Heading as="h1" size="6">
				Now Playing
			</Heading>

			{loading ? (
				<Box className="text-center py-8">Loading...</Box>
			) : (
				<Grid
					columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}
					gap="4"
					width="100%"
				>
					{nowPlayingList.map((item: any, index: number) => (
						<MoviesComponent
							movie={item}
							key={`nowplaying-${index}`}
						/>
					))}
				</Grid>
			)}

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							href="#"
							onClick={(e) => {
								e.preventDefault();
								if (currentPage > 1)
									setCurrentPage((p) => p - 1);
							}}
						/>
					</PaginationItem>

					{currentPage > 1 && (
						<PaginationItem>
							<PaginationLink
								href="#"
								onClick={(e) => {
									e.preventDefault();
									setCurrentPage(currentPage - 1);
								}}
							>
								{currentPage - 1}
							</PaginationLink>
						</PaginationItem>
					)}

					<PaginationItem>
						<PaginationLink href="#" isActive>
							{currentPage}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setCurrentPage(currentPage + 1);
							}}
						>
							{currentPage + 1}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationLink
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setCurrentPage(currentPage + 2);
							}}
						>
							{currentPage + 2}
						</PaginationLink>
					</PaginationItem>

					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>

					<PaginationItem>
						<PaginationNext
							href="#"
							onClick={(e) => {
								e.preventDefault();
								setCurrentPage((p) => p + 1);
							}}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</Flex>
	);
};

export default NowPlayingPage;
