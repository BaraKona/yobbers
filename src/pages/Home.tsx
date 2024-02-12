import { FC } from "react";
import { JobCard } from "../components/jobs/JobCard";
import { useJobContext } from "../providers/JobProvider";

export const Home: FC = () => {
	const { jobList } = useJobContext();
	return (
		<main>
			<ul className="flex flex-wrap gap-2">
				{jobList.value.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</ul>
		</main>
	);
};
