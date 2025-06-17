import { useState } from "react";
import { LeftSection } from "./left-section";
import { RightSection } from "./right-section";

export const UploadPhotoForm = () => {
	const [preview, setPreview] = useState<string | null>(null);

	return (
		<div className="w-[1300px] mt-18 mb-14 max-w-[95%] flex flex-col lg:flex-row gap-[60px] mx-auto items-start">
			<LeftSection preview={preview} setPreview={setPreview} />
			<RightSection preview={preview} />
		</div>
	);
};
