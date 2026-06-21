import { useState } from "react";
import { usePopular } from "../../hooks/Movies/usePopular";
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

const Popular = () => {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const { popularMovie, loading } = usePopular(currentPage);

	return (
		<Flex direction="column" align="center" gap="6" width="100%" p="4">
			<Heading as="h1" size="6">
				Popular Movies
			</Heading>

			{loading ? (
				<Box className="text-center py-8">Loading...</Box>
			) : (
				<Grid
					columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}
					gap="4"
					width="100%"
				>
					{popularMovie.map((item: Movie) => (
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

export default Popular;
