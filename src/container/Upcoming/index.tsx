import { useState } from "react";
import { useUpcoming } from "../../hooks/Movies/useUpcoming";
import MoviesComponent from "../../components/movies";
import type { Movie } from "@/service/Movies";
import { Flex, Heading, Grid, Box } from "@radix-ui/themes";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

const Upcoming = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { upcomingMovies, loading } = useUpcoming(currentPage);

	return (
		<Flex direction="column" align="center" gap="6" width="100%" p="4">
			<Heading as="h1" size="6">
				Upcoming Movies
			</Heading>

			{loading ? (
				<Box className="text-center py-8">Loading...</Box>
			) : (
				<Grid
					columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}
					gap="4"
					width="100%"
				>
					{upcomingMovies.map((item: Movie) => (
						<MoviesComponent movie={item} key={item.id} />
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

export default Upcoming;
