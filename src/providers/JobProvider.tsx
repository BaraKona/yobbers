import { createContext, useContext, ReactNode } from "react";
import { Signal, signal } from "@preact/signals-react";
import { Job } from "../../types/_types";
import { jobs } from "../utils/joblistings";

type SignalType = {
	jobList: Signal<Job[]>;
	appliedJobs: Signal<Job[]>;
	rejectedJobs: Signal<Job[]>;
	applyForJob: (job: Job) => void;
};

const defaultSignalValues: SignalType = {
	jobList: signal(jobs),
	appliedJobs: signal([]),
	rejectedJobs: signal([]),
	applyForJob: () => {},
};

const JobContext = createContext<SignalType>(defaultSignalValues);

export function useJobContext() {
	return useContext(JobContext);
}

export function JobProvider({ children }: { children: ReactNode }) {
	const jobList = signal<Job[]>(jobs);
	const appliedJobs = signal<Job[]>([]);
	const rejectedJobs = signal<Job[]>([]);

	function applyForJob(job: Job) {
		jobList.value = jobList.value.filter((j) => j.id !== job.id);
		appliedJobs.value = [...appliedJobs.value, job];
	}

	return (
		<JobContext.Provider
			value={{
				jobList,
				appliedJobs,
				rejectedJobs,
				applyForJob,
			}}
		>
			{children}
		</JobContext.Provider>
	);
}
