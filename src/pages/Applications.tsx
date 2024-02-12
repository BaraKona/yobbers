import { useAutoAnimate } from "@formkit/auto-animate/react";
import { JobCard } from "../components/jobs/JobCard";
import { appliedJobs, applyForJob } from "../signals/JobSignal";
export const Applications = () => {
	const [parent] = useAutoAnimate();
	return (
		<div>
			<ul className="flex flex-wrap gap-2" ref={parent}>
				{appliedJobs.value.length === 0 ? (
					<p>You have not applied for any jobs yet..</p>
				) : (
					appliedJobs.value.map((job) => (
						<JobCard key={job.id} job={job} onClick={() => applyForJob(job)} />
					))
				)}
			</ul>
		</div>
	);
};
