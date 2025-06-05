import ky from "ky";

export const api = ky.create({
	prefixUrl: "https://app.piper.my/api/",
	headers: {
		"api-token":
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJrYXRzaWV2MTk5NyIsImlhdCI6MTc0OTA0NzEwN30.oDG3qq-__W8ohQ4_HZn13QDOTdISq_UcA1wmKu0R6HE",
	},
});
