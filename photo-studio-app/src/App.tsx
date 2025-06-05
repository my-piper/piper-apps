import { Footer } from "./widgets/footer";
import { Header } from "./widgets/header";
import { UploadPhotoForm } from "./features/upload-photo-form";
import { PUBLIC_URL } from "./shared/consts";

function App() {
	return (
		<div
			className={`min-h-screen bg-[url('${PUBLIC_URL}/bg.jpg')] bg-cover bg-center bg-no-repeat text-white relative`}
		>
			<Header />
			<UploadPhotoForm />
			<Footer />
		</div>
	);
}

export default App;
