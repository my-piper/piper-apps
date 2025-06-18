import { useState } from "react";
import { LeftSection } from "./left-section";
import { RightSection } from "./right-section";

export const UploadPhotoForm = () => {
	const [preview, setPreview] = useState<string | null>(null);

	return (
		<div
			style={{
				width: "1300px",
				marginTop: "72px", // mt-18 ≈ 4 * 18px
				marginBottom: "56px", // mb-14 ≈ 4 * 14px
				maxWidth: "95%",
				display: "flex",
				flexDirection: window.innerWidth >= 1024 ? "row" : "column",
				gap: "60px",
				marginLeft: "auto",
				marginRight: "auto",
				alignItems: "flex-start",
			}}
		>
			<LeftSection preview={preview} setPreview={setPreview} />
			<RightSection preview={preview} />
		</div>
	);
};
