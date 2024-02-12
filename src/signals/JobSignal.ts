import { signal } from "@preact/signals-react";
import { Job } from "../../types/_types";
import { jobs } from "../utils/joblistings";

export const jobList = signal<Job[]>(
	localStorage.getItem("jobs")
		? JSON.parse(localStorage.getItem("jobs") || "[]")
		: jobs
);
export const appliedJobs = signal<Job[]>(
	localStorage.getItem("appliedJobs")
		? JSON.parse(localStorage.getItem("appliedJobs") || "[]")
		: []
);
export const rejectedJobs = signal<Job[]>(
	localStorage.getItem("rejectedJobs")
		? JSON.parse(localStorage.getItem("rejectedJobs") || "[]")
		: []
);

export function applyForJob(job: Job) {
	jobList.value = jobList.value.filter((j) => j.id !== job.id);

	appliedJobs.value = [...appliedJobs.value, job];

	updateLocalStorage();
}

const updateLocalStorage = () => {
	localStorage.setItem("jobs", JSON.stringify(jobList.value));
	localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs.value));
	localStorage.setItem("rejectedJobs", JSON.stringify(rejectedJobs.value));
};
