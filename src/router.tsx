import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "./pages/Home";
import { Applications } from "./pages/Applications";
import { Navbar } from "./components/navigation/Navbar";
import { Rejected } from "./pages/Rejected";

const mainRoutes: RouteObject[] = [
	{
		path: "*",
		loader: () => redirect("/"),
	},
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/Applications",
		element: <Applications />,
	},
	{
		path: "/Rejected",
		element: <Rejected />,
	},
];

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navbar />,
		children: mainRoutes,
	},
	{
		path: "*", // catch all routes
		loader: () => redirect("/"),
	},
]);
