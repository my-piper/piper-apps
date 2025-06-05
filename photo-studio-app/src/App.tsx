import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { UploadPhotoForm } from "./features/upload-photo-form";

function App() {
	return (
		<div className="min-h-screen bg-[url('https://cdn.jsdelivr.net/gh/my-piper/piper-apps@main/photo-studio-app/public/bg.jpg')] bg-cover bg-center bg-no-repeat text-white relative">
			<Header />
			<UploadPhotoForm />
			<Footer />
		</div>
	);
}

export default App;
