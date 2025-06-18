import { useRef, type Dispatch, type SetStateAction } from "react";
import { useUploadPhoto } from "../model/mutations/use-upload-photo";
import { PIPER_PUBLIC_URL } from "../../../shared/consts";

type Props = {
	preview: string | null;
	setPreview: Dispatch<SetStateAction<string | null>>;
};

export const LeftSection = ({ preview, setPreview }: Props) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { mutate: uploadPhoto, isPending } = useUploadPhoto();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file || !file.type.startsWith("image/")) {
			alert("Загрузи изображение (JPG, PNG)");
			return;
		}

		const body = new FormData();
		body.append("file", file);

		uploadPhoto(body, {
			onSuccess: (response) => {
				console.log("Изображение успешно обработано:", response);
				setPreview(response.url);
			},
			onError: (error) => {
				alert("Ошибка загрузки изображения");
				console.error("Ошибка загрузки изображения:", error);
			},
		});
	};

	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "12px",
				maxWidth: "400px", // lg:w-[400px]
			}}
		>
			<div
				style={{
					width: "100%",
					maxWidth: "685px",
					aspectRatio: "2 / 3",
					borderRadius: "20px",
					position: "relative",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					alignItems: "center",
					overflow: "hidden",
					backgroundColor: "white",
				}}
			>
				{isPending ? (
					<p
						style={{
							textAlign: "center",
							fontSize: "1.875rem", // text-3xl
							color: "#9333ea", // text-purple-600
							marginBottom: "230px",
							lineHeight: "1.375",
						}}
					>
						Идет загрузка изображения...
					</p>
				) : preview ? (
					<img
						src={preview}
						alt="Preview"
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							objectFit: "cover",
							zIndex: 10,
						}}
					/>
				) : (
					<video
						autoPlay
						muted
						loop
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							objectFit: "cover",
						}}
					>
						<source
							src={`${PIPER_PUBLIC_URL}/example.mp4`}
							type="video/mp4"
						/>
					</video>
				)}

				<label
					htmlFor="upload-photo"
					style={{
						zIndex: 20,
						marginBottom: "10px",
						padding: "12px 120px",
						backgroundImage:
							"linear-gradient(to right, #A033FF, #FF963A)",
						borderRadius: "20px",
						color: "white",
						fontWeight: 500,
						fontSize: "1.25rem",
						cursor: "pointer",
					}}
				>
					Загрузи лицо
				</label>

				<input
					type="file"
					id="upload-photo"
					accept="image/*"
					style={{ display: "none" }}
					ref={fileInputRef}
					onChange={handleFileChange}
				/>
			</div>

			<div
				style={{
					textAlign: "center",
					fontSize: "18px",
					color: "#ccc",
					lineHeight: "1.375",
				}}
			>
				<span className="count">3/3 осталось сегодня</span>
				<br />
				<span className="locked">
					🔒{" "}
					<a
						href="#"
						style={{
							color: "#7f5af0",
							fontWeight: "bold",
							textDecoration: "none",
						}}
					>
						Получить больше генераций
					</a>
				</span>
			</div>
		</div>
	);
};
