import { useSearchParams } from "react-router";
import { useSearch } from "../../hooks/Movies/useSearch";
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

const Search = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("query") || "";
	const adult = searchParams.get("adult") === "true";
	const year = searchParams.get("year") || "";
	const currentPage = parseInt(searchParams.get("page") || "1", 10);

	const { searchResults, loading } = useSearch(
		query,
		currentPage,
		adult,
		year,
	);

	const handlePageChange = (newPage: number) => {
		setSearchParams((prev) => {
			prev.set("page", newPage.toString());
			return prev;
		});
	};

	return (
		<Flex direction="column" align="center" gap="6" width="100%" p="4">
			<Heading as="h1" size="6">
				Search Results {query ? `for "${query}"` : ""}
			</Heading>

			{loading ? (
				<Box className="text-center py-8">Loading...</Box>
			) : !query.trim() ? (
				<Box className="text-center py-8 text-muted-foreground">
					Enter a search keyword to find movies.
				</Box>
			) : searchResults.length === 0 ? (
				<Box className="text-center py-8 text-muted-foreground">
					No movies found matching your search.
				</Box>
			) : (
				<Grid
					columns={{ initial: "2", sm: "3", md: "4", lg: "5" }}
					gap="4"
					width="100%"
				>
					{searchResults.map((item: Movie) => (
						<MoviesComponent movie={item} key={item.id} />
					))}
				</Grid>
			)}

			{query.trim() && searchResults.length > 0 && (
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href="#"
								onClick={(e) => {
									e.preventDefault();
									if (currentPage > 1)
										handlePageChange(currentPage - 1);
								}}
							/>
						</PaginationItem>

						{currentPage > 1 && (
							<PaginationItem>
								<PaginationLink
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handlePageChange(currentPage - 1);
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
									handlePageChange(currentPage + 1);
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
									handlePageChange(currentPage + 2);
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
									handlePageChange(currentPage + 1);
								}}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			)}
		</Flex>
	);
};

export default Search;
