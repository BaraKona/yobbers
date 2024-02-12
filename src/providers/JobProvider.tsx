import { createContext, useContext, ReactNode } from "react";
import { Signal, signal } from "@preact/signals-react";
import { Job } from "../../types/_types";
import { jobs } from "../utils/joblistings";

type SignalType = {
	jobList: Signal<Job[]>;
};

const defaultSignalValues: SignalType = {
	jobList: signal(jobs),
};

const JobContext = createContext<SignalType>(defaultSignalValues);

export function useJobContext() {
	return useContext(JobContext);
}

export function JobProvider({ children }: { children: ReactNode }) {
	const jobList = signal<Job[]>(jobs);

	return (
		<JobContext.Provider
			value={{
				jobList,
			}}
		>
			{children}
		</JobContext.Provider>
	);
}
