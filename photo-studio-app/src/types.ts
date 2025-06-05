export interface GenerateImagePayload {
	person: string;
	style: string;
	upscale: "x2" | "no";
	aspectRatio: string;
	prompt: string;
}
