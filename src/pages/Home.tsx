import { FC } from "react";
import { jobs } from "../utils/joblistings";
import { JobCard } from "../components/jobs/JobCard";

export const Home: FC = () => {
	return (
		<main>
			<ul className="flex flex-wrap gap-2">
				{jobs.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</ul>
		</main>
	);
};
