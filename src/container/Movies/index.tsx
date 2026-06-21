import { NavLink, Outlet } from "react-router";
import { Flex } from "@radix-ui/themes";
import NowPlaying from "../../components/movies/nowplaying";

const Movies = () => {
	return (
		<Flex direction="column" align="center" gap="4" width="100%">
			{/* Now Playing marquee strip */}
			<NowPlaying />

			{/* Sub-navigation */}
			<Flex gap="3" mt="4">
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

			{/* Active child route renders here */}
			<Outlet />
		</Flex>
	);
};

export default Movies;
