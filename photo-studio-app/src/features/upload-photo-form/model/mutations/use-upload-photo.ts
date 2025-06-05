import { useMutation } from "@tanstack/react-query";
import { api } from "../../../../shared/api";

export const useUploadPhoto = () => {
	return useMutation({
		mutationFn: async (body: FormData) => {
			const response = await api
				.post<{ url: string }>("artefacts", {
					body,
				})
				.json();

			return response;
		},
		onError: (error) => {
			console.error("Ошибка загрузки:", error);
			alert("Ошибка загрузки изображения");
		},
	});
};
