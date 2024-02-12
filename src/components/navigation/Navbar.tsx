import { FC, ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Navbar: FC = () => {
	return (
		<main className="max-w-screen-xl mx-auto">
			<nav className="w-full mx-auto p-2 mb-2">
				<ul className="flex gap-4 items-center justify-center">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/Applications">Applications</NavLink>
					<NavLink to="/Rejected">Rejected</NavLink>
				</ul>
			</nav>
			<Outlet />
		</main>
	);
};

const NavLink: FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
	const { pathname } = useLocation();
	return (
		<li
			className={`${
				pathname === to ? "bg-gray-600/20" : ""
			} rounded-md px-2 py-1 text-center`}
		>
			<Link to={to}>{children}</Link>
		</li>
	);
};
