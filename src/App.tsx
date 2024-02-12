import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { JobProvider } from "./providers/JobProvider";
function App() {
	return (
		<JobProvider>
			<RouterProvider router={router} />
		</JobProvider>
	);
}

export default App;
