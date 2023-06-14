import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { ImageSourcePropType } from 'react-native/types';

type UseImagePickerReturnType = [ImageSourcePropType | null, () => void]

export default function useImagePicker(): UseImagePickerReturnType {
	const [image, setImage] = useState<ImageSourcePropType | null>(null);
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0]);
		}
	};

	return [image, pickImage];
}