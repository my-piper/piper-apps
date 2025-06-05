import { useMutation } from "@tanstack/react-query";
import type { GenerateImagePayload } from "../../../../types";
import { api } from "../../../../shared/api";

type GenerateImageProps = {
	setResultImage: (url: string | null) => void;
	setCheckingResult: (isChecking: boolean) => void;
};

export const useGenerateImage = ({ setResultImage, setCheckingResult }: GenerateImageProps) => {
	return useMutation({
		mutationFn: async (payload: GenerateImagePayload) => {
			const launchRes = await api
				.post("foto-studio-v1/launch", {
					json: { inputs: payload },
				})
				.json<{ _id: string }>();

			return launchRes;
		},
		onSuccess: async (data) => {
			const checkStatus = async (): Promise<void> => {
				const res = await api.get(`launches/${data._id}/state`).json<{
					errors: string[];
					outputs?: { image: string };
					launchedAt: string;
				}>();

				console.log({ res });

				if (res.outputs?.image) {
					setResultImage(res.outputs.image);
				} else if (res.errors.length > 0) {
					alert("Генерация не удалась.");
				} else {
					setTimeout(checkStatus, 3000);
				}
			};

			setCheckingResult(true);

			await checkStatus().finally(() => setCheckingResult(false));
		},
		onError: (error) => {
			console.error("Ошибка генерации:", error);
			alert("Ошибка генерации");
		},
	});
};
