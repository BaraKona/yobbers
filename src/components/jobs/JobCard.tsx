import { Job } from "../../../types/_types";
import { FC } from "react";

import { JobIconRenderer } from "./JobIconRenderer";

export const JobCard: FC<{
	job: Job;
}> = ({ job }) => {
	return (
		<section
			key={job.id}
			className="flex gap-2 p-4 px-6 bg-white rounded-md basis-[30rem] shadow-md"
		>
			<div className="w-full">
				<div className="flex items-center gap-2">
					<JobIconRenderer company={job.company} />
					<span className="flex flex-col">
						<h2 className="text-lg font-semibold">{job.title}</h2>
						<p className="text-gray-500">{job.company}</p>
					</span>
				</div>
				<div className="flex gap-2 py-4">
					{job.types.map((type, index) => (
						<div
							key={type}
							className={`px-3 py-1 flex items-center justify-center capitalize rounded-md ${
								index === 1 ? "bg-purple-200" : "bg-orange-200"
							}`}
						>
							{type}
						</div>
					))}
					<p className="px-3 py-1 bg-green-200 capitalize rounded-md">
						{job.location}
					</p>
				</div>
				<p>{job.description}</p>
				<hr className="my-2" />
				<div className="flex justify-between items-center py-2">
					<p className="font-semibold text-xl">
						{job.hourlySalary}
						<span className="text-gray-500"> / hr</span>
					</p>
					<p className="text-sm">posted {job.date}</p>
				</div>
			</div>
		</section>
	);
};
