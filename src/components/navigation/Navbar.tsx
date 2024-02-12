import { FC, ReactNode } from "react";
import { Link, Outlet } from "react-router-dom";

export const Navbar: FC = () => {
	return (
		<main>
			<nav>
				<ul className="flex bg-black">
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
