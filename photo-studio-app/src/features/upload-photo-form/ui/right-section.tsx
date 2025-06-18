import { useState } from "react";
import { useGenerateImage } from "../model/mutations/use-generate-image";
import Switch from "../../../shared/ui/switch";

type Props = {
	preview: string | null;
};

export const RightSection = ({ preview }: Props) => {
	const [prompt, setPrompt] = useState("");
	const [style, setStyle] = useState("");
	const [isUpscaleEnabled, setIsUpscaleEnabled] = useState(true);
	const [resultImage, setResultImage] = useState<string | null>(null);
	const [checkingResult, setCheckingResult] = useState(false);
	const { mutate: generateImage, isPending } = useGenerateImage({
		setResultImage,
		setCheckingResult,
	});

	const handleGenerate = () => {
		if (!preview) {
			alert("Сначала загрузи фото.");
			return;
		}
		if (!style) {
			alert("Выбери стиль.");
			return;
		}

		generateImage({
			person: preview,
			style,
			upscale: isUpscaleEnabled ? "x2" : "no",
			aspectRatio: "9:16",
			prompt,
		});
	};

	return (
		<div style={{ flex: 1, marginLeft: "auto", marginRight: "auto" }}>
			<h1
				style={{
					fontSize: "2.25rem",
					fontWeight: 800,
					textAlign: "center",
					marginBottom: "10px",
				}}
			>
				Создавай портреты в любом стиле
			</h1>
			<p
				style={{
					fontSize: "1.25rem",
					color: "#ACACAC",
					textAlign: "center",
					marginBottom: "30px",
				}}
			>
				Загрузи фото, выбери стиль и получи результат.
			</p>
			<textarea
				id="prompt"
				value={prompt}
				placeholder="Текстовый запрос: оставьте пустым, чтобы использовать готовые стили"
				onChange={(e) => setPrompt(e.target.value)}
				style={{
					width: "100%",
					height: "100px",
					borderRadius: "20px",
					border: "none",
					padding: "20px",
					resize: "none",
					fontSize: "1rem",
					color: "black",
					outline: "none",
					zIndex: 10,
					backgroundColor: "white",
				}}
			/>
			<select
				id="style-select"
				value={style}
				onChange={(e) => setStyle(e.target.value)}
				style={{
					width: "100%",
					padding: "20px",
					border: "none",
					borderRadius: "20px",
					fontWeight: 400,
					fontSize: "30px",
					color: "black",
					backgroundImage:
						"linear-gradient(to right, #A033FF, #FF963A)",
					marginTop: "15px",
				}}
			>
				<option value="">Выбери стиль</option>
				<option value="anime">Аниме</option>
				<option value="realistic">Реализм</option>
				<option value="cyberpunk">Киберпанк</option>
			</select>
			{resultImage && (
				<img
					src={resultImage}
					alt="Result"
					style={{
						width: "100%",
						marginTop: "20px",
						borderRadius: "20px",
					}}
				/>
			)}
			<button
				onClick={handleGenerate}
				disabled={checkingResult || isPending}
				style={{
					width: "100%",
					padding: "20px",
					marginTop: "15px",
					border: "none",
					borderRadius: "20px",
					fontWeight: 400,
					fontSize: "30px",
					color: "white",
					backgroundImage:
						"linear-gradient(to right, #FF3355, #FF963A)",
					cursor: "pointer",
					opacity: checkingResult || isPending ? 0.5 : 1,
				}}
			>
				{checkingResult
					? "Генерация запущена, ожидайте"
					: isPending
					? "Генерация..."
					: "Создать образ — 1 р."}
			</button>
			<div
				style={{
					marginTop: "20px",
					marginBottom: "10px",
					display: "flex",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<Switch
					checked={isUpscaleEnabled}
					onChange={setIsUpscaleEnabled}
				/>
				<label htmlFor="upscale-toggle" style={{ fontSize: "18px" }}>
					Upscale
				</label>
			</div>
			<div className="usage">
				<h2
					style={{
						fontSize: "24px",
						fontWeight: "bold",
						marginBottom: "12px",
					}}
				>
					Используй результат как хочешь:
				</h2>
				<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
					{[
						"Аватарка для Telegram, Discord, Steam",
						"Фото для Instagram или TikTok",
						"Образ для игры, стрима или ролевухи",
						"Подарок близким",
						"Образ для иллюстрации",
					].map((text, index) => (
						<li
							key={index}
							style={{
								fontSize: "20px",
								fontWeight: 500,
								marginBottom: "8px",
							}}
						>
							• {text}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
