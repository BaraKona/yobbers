import { RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import { Home } from "./pages/Home";

const mainRoutes: RouteObject[] = [
	{
		path: "*",
		loader: () => redirect("/"),
	},
	{
		path: "/",
		element: <Home />,
	},
];

export const router = createBrowserRouter([
	{
		path: "/",
		children: mainRoutes,
	},
	{
		path: "*", // catch all routes
		loader: () => redirect("/"),
	},
]);
