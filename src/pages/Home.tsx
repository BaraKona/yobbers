import { FC } from "react";
import { JobCard } from "../components/jobs/JobCard";
import { applyForJob, jobList } from "../signals/JobSignal";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const Home: FC = () => {
	// const { jobList, applyForJob } = useJobContext();
	console.log(jobList.value.length);
	const [parent] = useAutoAnimate();
	return (
		<main>
			<ul className="flex flex-wrap gap-2" ref={parent}>
				{jobList.value.length === 0 ? (
					<p>No jobs available</p>
				) : (
					jobList.value.map((job) => (
						<JobCard
							key={job.id}
							job={job}
							onClick={() => applyForJob(job)}
							status="none"
						/>
					))
				)}
			</ul>
		</main>
	);
};
