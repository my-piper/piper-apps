export const Header = () => {
	return (
		<div className="pt-5 mx-auto flex items-center justify-between w-[calc(100%-80px)]">
			<img src="Logo.svg" alt="Piper Logo" className="h-8" />
			<div className="flex items-center gap-2.5 text-white font-bold text-base">
				$250.00
				<img src="profile-icon.png" alt="Профиль" className="w-6 h-6 object-contain" />
			</div>
		</div>
	);
};
