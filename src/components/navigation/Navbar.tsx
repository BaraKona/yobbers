import { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar: FC = () => {
	return (
		<main className="max-w-screen-lg mx-auto ">
			<nav className="w-full mx-auto">
				<ul className="flex gap-4">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/Applications">Applications</NavLink>
				</ul>
			</nav>
			<Outlet />
		</main>
	);
};

const NavLink: FC<{ to: string; children: ReactNode }> = ({ to, children }) => {
	return (
		<li>
			<Link to={to}>{children}</Link>
		</li>
	);
};
