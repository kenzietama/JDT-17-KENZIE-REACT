import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import { Flex } from "@radix-ui/themes";
import NowPlaying from "../../components/movies/nowplaying";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../../components/ui/popover";
import { Switch } from "../../components/ui/switch";
import { Input } from "../../components/input";

const Movies = () => {
	const [open, setOpen] = useState(false);
	const [queryInput, setQueryInput] = useState("");
	const [includeAdultInput, setIncludeAdultInput] = useState(false);
	const [yearInput, setYearInput] = useState("");

	return (
		<Flex direction="column" align="center" gap="4" width="100%">
			{/* Now Playing marquee strip */}
			<NowPlaying />

			{/* Sub-navigation & Search Popover */}
			<Flex
				justify="between"
				align="center"
				width="100%"
				mt="4"
				className="px-4"
			>
				<Flex gap="3">
					<NavLink
						to="/movie-page/now-playing"
						className={({ isActive }) =>
							`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
								isActive
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background text-muted-foreground border-border hover:bg-muted"
							}`
						}
					>
						Now Playing
					</NavLink>
					<NavLink
						to="/movie-page/popular"
						className={({ isActive }) =>
							`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
								isActive
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background text-muted-foreground border-border hover:bg-muted"
							}`
						}
					>
						Popular
					</NavLink>
					<NavLink
						to="/movie-page/top-rated"
						className={({ isActive }) =>
							`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
								isActive
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background text-muted-foreground border-border hover:bg-muted"
							}`
						}
					>
						Top Rated
					</NavLink>
					<NavLink
						to="/movie-page/upcoming"
						className={({ isActive }) =>
							`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
								isActive
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background text-muted-foreground border-border hover:bg-muted"
							}`
						}
					>
						Upcoming
					</NavLink>
				</Flex>

				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<button className="px-4 py-2 rounded-md text-sm font-medium border border-border bg-background text-muted-foreground hover:bg-muted transition-all cursor-pointer">
							Search Movies
						</button>
					</PopoverTrigger>
					<PopoverContent align="end" className="w-80 p-4">
						<div className="flex flex-col gap-4">
							<div className="flex items-center justify-between gap-4">
								<label
									htmlFor="search-query"
									className="text-sm font-medium"
								>
									Query
								</label>
								<Input
									id="search-query"
									fieldSize="sm"
									className="w-40"
									value={queryInput}
									onChange={(e) =>
										setQueryInput(e.target.value)
									}
								/>
							</div>
							<div className="flex items-center justify-between gap-4">
								<label
									htmlFor="search-adult"
									className="text-sm font-medium"
								>
									Include Adult
								</label>
								<Switch
									id="search-adult"
									checked={includeAdultInput}
									onCheckedChange={setIncludeAdultInput}
								/>
							</div>
							<div className="flex items-center justify-between gap-4">
								<label
									htmlFor="search-year"
									className="text-sm font-medium"
								>
									Release Year
								</label>
								<Input
									id="search-year"
									fieldSize="sm"
									className="w-40"
									value={yearInput}
									onChange={(e) =>
										setYearInput(e.target.value)
									}
								/>
							</div>
							<div className="flex justify-end pt-2">
								<NavLink
									to={`/movie-page/search?query=${encodeURIComponent(queryInput)}&adult=${includeAdultInput}&year=${encodeURIComponent(yearInput)}`}
									onClick={() => setOpen(false)}
									className="px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
								>
									Search
								</NavLink>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</Flex>

			{/* child */}
			<Outlet />
		</Flex>
	);
};

export default Movies;
