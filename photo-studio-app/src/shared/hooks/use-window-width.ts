import { useEffect, useState } from "react";

export const useWindowWidth = () => {
	const [width, setWidth] = useState(
		typeof window !== "undefined" ? window.innerWidth : 0
	);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);

		window.addEventListener("resize", handleResize);

		// Установим начальное значение
		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return { width };
};
