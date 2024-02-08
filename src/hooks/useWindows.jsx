import { useEffect } from "react";

export const useWindow = (handleAction) => {
	useEffect(() => {
		window.addEventListener("click", handleAction);
		return () => window.removeEventListener("click", handleAction);
	}, [handleAction]);
};
