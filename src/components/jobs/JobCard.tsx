import { Job } from "../../../types/_types";
import { FC } from "react";

import { JobIconRenderer } from "./JobIconRenderer";

export const JobCard: FC<{
	job: Job;
	onClick: () => void;
}> = ({ job, onClick }) => {
	return (
		<section
			key={job.id}
			className="flex gap-2 p-8 rounded-md basis-[26.2rem] border border-gray-500/30 text-gray-400"
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
							className={`px-3 py-1 flex items-center justify-center capitalize text-xs rounded-md text-gray-100 ${
								index === 1 ? "bg-purple-200/20" : "bg-orange-200/20"
							}`}
						>
							{type}
						</div>
					))}
					<p className="px-3 py-1 bg-green-200/20 capitalize text-xs rounded-md text-gray-100">
						{job.location}
					</p>
				</div>
				<p className="text-sm line-clamp-2">{job.description}</p>
				<hr className="my-4 border-gray-400/30" />
				<div className="flex justify-between items-center py-2">
					<p className="font-semibold text-xl">
						{job.hourlySalary}
						<span className="text-gray-500"> / hr</span>
					</p>
					<p className="text-sm">posted {job.date}</p>
				</div>
				<button
					className="flex ml-auto px-3 py-1 bg-gray-700/40 text-sm text-white rounded-md hover:bg-gray-400/20 transition-all ease-in-out duration-300"
					onClick={onClick}
				>
					Apply
				</button>
			</div>
		</section>
	);
};
