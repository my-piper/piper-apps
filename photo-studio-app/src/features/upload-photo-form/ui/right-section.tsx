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
		<div className="flex-1 mx-auto">
			<h1 className="text-4xl lg:text-5xl xl:text-[64px] font-extrabold text-center mb-2.5">
				Создавай портреты в любом стиле
			</h1>
			<p className="text-xl text-[#ACACAC] text-center mb-[30px]">
				Загрузи фото, выбери стиль и получи результат.
			</p>
			<div className="relative w-full h-[100px] mb-[15px]">
				<textarea
					id="prompt"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					className="w-full h-[100px] rounded-[20px] border-none p-5 resize-none text-base text-black outline-none bg-white z-10"
				/>
				<div
					className={`absolute top-5 left-5 text-base text-black opacity-80 pointer-events-none z-20 ${
						prompt.trim() ? "hidden" : "block"
					}`}
				>
					<span className="top">Текстовый запрос:</span>
					<br />
					<span className="bottom">
						Оставьте пустым, чтобы использовать готовые стили
					</span>
				</div>
			</div>
			<select
				id="style-select"
				value={style}
				onChange={(e) => setStyle(e.target.value)}
				className="w-full p-5 mt-[15px] border-none rounded-[20px] font-normal text-[30px] text-black bg-gradient-to-r from-[#A033FF] to-[#FF963A]"
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
					className="w-full mt-5 rounded-[20px]"
				/>
			)}
			<button
				onClick={handleGenerate}
				disabled={checkingResult || isPending}
				className="w-full p-5 mt-[15px] border-none rounded-[20px] font-normal text-[30px] text-white bg-gradient-to-r from-[#FF3355] to-[#FF963A] disabled:opacity-50 cursor-pointer"
			>
				{checkingResult
					? "Генерация запущена, ожидайте"
					: isPending
					? "Генерация..."
					: "Создать образ — 1 р."}
			</button>
			<div className="mt-5 mb-2.5 flex items-center gap-2.5">
				<Switch
					checked={isUpscaleEnabled}
					onChange={setIsUpscaleEnabled}
				/>
				<label htmlFor="upscale-toggle" className="text-lg">
					Upscale
				</label>
			</div>
			<div className="usage">
				<h2 className="text-2xl font-bold mb-3">
					Используй результат как хочешь:
				</h2>
				<ul className="list-none p-0 m-0">
					<li className="text-xl font-medium mb-2">
						• Аватарка для Telegram, Discord, Steam
					</li>
					<li className="text-xl font-medium mb-2">
						• Фото для Instagram или TikTok
					</li>
					<li className="text-xl font-medium mb-2">
						• Образ для игры, стрима или ролевухи
					</li>
					<li className="text-xl font-medium mb-2">
						• Подарок близким
					</li>
					<li className="text-xl font-medium mb-2">
						• Образ для иллюстрации
					</li>
				</ul>
			</div>
		</div>
	);
};
