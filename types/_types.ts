export type Job = {
	id: number;
	title: string;
	location: string;
	company: string;
	hourlySalary: string;
	date: string;
	description: string;
	types: string[];
	status: "applied" | "rejected" | "none";
};

export type JobType = {
	id: number;
	name: string;
	value: string;
	checked: boolean;
};
