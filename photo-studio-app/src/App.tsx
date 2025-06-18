import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { UploadPhotoForm } from "./features/upload-photo-form";

function App() {
	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundImage:
					"url('https://cdn.jsdelivr.net/gh/my-piper/piper-apps@main/photo-studio-app/public/bg.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				color: "white",
				position: "relative",
			}}
		>
			{" "}
			<Header />
			<UploadPhotoForm />
			<Footer />
		</div>
	);
}

export default App;
