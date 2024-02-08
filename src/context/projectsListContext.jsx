import React, { createContext, useContext, useState } from "react";

const ProjectListContext = createContext(null);

export function ProjectListProvider({ children }) {
	const [open, setOpen] = useState(false);

	const obj = {
		myState: open,
		setMyState: setOpen,
	};

	return (
		<ProjectListContext.Provider value={obj}>
			{children}
		</ProjectListContext.Provider>
	);
}

export const useConsumeProjectListContext = () => {
	const ctx = useContext(ProjectListContext);

	if (!ctx) throw new Error("You've forgot to set ProjectListProvider");

	return ctx;
};
