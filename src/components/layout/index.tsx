import Header from "../header";
import { Outlet } from "react-router";
import Footer from "../footer";

const Layout = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
