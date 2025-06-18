import { PIPER_PUBLIC_URL } from "../shared/consts";

export const Header = () => {
	return (
		<div
			style={{
				paddingTop: "20px", // pt-5
				marginLeft: "auto",
				marginRight: "auto",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "calc(100% - 80px)",
			}}
		>
			<img
				src={`${PIPER_PUBLIC_URL}/Logo.svg`}
				alt="Piper Logo"
				style={{ height: "32px" }} // h-8
			/>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "10px", // gap-2.5
					color: "white",
					fontWeight: "bold",
					fontSize: "16px",
				}}
			>
				$250.00
				<img
					src={`${PIPER_PUBLIC_URL}/profile-icon.png`}
					alt="Профиль"
					style={{
						width: "24px",
						height: "24px",
						objectFit: "contain",
					}}
				/>
			</div>
		</div>
	);
};
