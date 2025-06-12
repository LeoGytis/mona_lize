import {useState} from 'react';
import {imageRequests, ImageResponse} from '../service/galleryRequests';

export const ImageUploader = () => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [uploading, setUploading] = useState(false);
	const [uploadedImage, setUploadedImage] = useState<ImageResponse | null>(
		null
	);
	const [error, setError] = useState<string | null>(null);

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setSelectedFile(file);
			setError(null);
		}
	};

	const handleUpload = async () => {
		if (!selectedFile) {
			setError('Please select a file first');
			return;
		}

		try {
			setUploading(true);
			setError(null);
			const response = await imageRequests.uploadImage(selectedFile);
			setUploadedImage(response);
			setSelectedFile(null);
		} catch (err) {
			setError('Failed to upload image. Please try again.');
			console.error('Upload error:', err);
		} finally {
			setUploading(false);
		}
	};

	return (
		<div className="p-4">
			<div className="mb-4">
				<input
					type="file"
					accept="image/*"
					onChange={handleFileSelect}
					className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
				/>
			</div>

			<button
				onClick={handleUpload}
				disabled={!selectedFile || uploading}
				className={`px-4 py-2 rounded-md text-white font-medium
                    ${
						!selectedFile || uploading
							? 'bg-gray-400 cursor-not-allowed'
							: 'bg-blue-600 hover:bg-blue-700'
					}`}
			>
				{uploading ? 'Uploading...' : 'Upload Image'}
			</button>

			{error && <p className="mt-2 text-red-600">{error}</p>}

			{uploadedImage && (
				<div className="mt-4">
					<p className="text-green-600">
						Image uploaded successfully!
					</p>
					<p className="text-sm text-gray-600">
						Filename: {uploadedImage.filename}
					</p>
				</div>
			)}
		</div>
	);
};
