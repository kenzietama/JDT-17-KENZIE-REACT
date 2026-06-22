import { NavLink } from "react-router";
import { useToken } from "../../hooks/useToken";
import { Button } from "@/components/ui/button";

const Header = () => {
	const { logout } = useToken();

	const navItems = [
		{ name: "Home", path: "/" },
		{ name: "CV Page", path: "/cv-page" },
		{ name: "Todo", path: "/todo" },
		{ name: "Movies", path: "/movie-page" },
	];

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md support-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-14 items-center justify-between px-4">
				{/* Navigation Links */}
				<nav className="flex items-center gap-6 text-sm font-medium">
					{navItems.map((item) => (
						<NavLink
							key={item.path}
							to={item.path}
							className={({ isActive }) =>
								`transition-colors hover:text-foreground ${
									isActive
										? "text-foreground font-semibold"
										: "text-muted-foreground"
								}`
							}
						>
							{item.name}
						</NavLink>
					))}
				</nav>

				{/* Action Buttons */}
				<div className="flex items-center gap-4">
					<Button onClick={logout} variant="destructive" size="sm">
						Logout
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
