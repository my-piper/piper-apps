interface SwitchProps {
	checked: boolean;
	onChange: (checked: boolean) => void;
}

const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<label className="inline-flex items-center cursor-pointer">
			<input
				type="checkbox"
				className="sr-only"
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
			/>
			<div
				className={`relative w-12 h-6 rounded-full shadow-inner transition-all duration-300 ease-in-out ${
					checked ? "bg-green-600" : "bg-white"
				}`}
			>
				<div
					className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
						checked ? "translate-x-6 bg-white" : "translate-x-0 bg-green-600"
					}`}
				></div>
			</div>
		</label>
	);
};

export default Switch;
