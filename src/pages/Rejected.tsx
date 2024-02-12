import { useAutoAnimate } from "@formkit/auto-animate/react";
import { JobCard } from "../components/jobs/JobCard";
import { rejectedJobs, applyForJob } from "../signals/JobSignal";

export const Rejected = () => {
	const [parent] = useAutoAnimate();
	return (
		<div>
			<ul className="flex flex-wrap gap-2" ref={parent}>
				{rejectedJobs.value.length === 0 ? (
					<p>You have not applied for any jobs yet..</p>
				) : (
					rejectedJobs.value.map((job) => (
						<JobCard
							key={job.title}
							job={job}
							onClick={() => applyForJob(job)}
							status="rejected"
						/>
					))
				)}
			</ul>
		</div>
	);
};
