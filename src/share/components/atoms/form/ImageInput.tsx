import { StyleSheet, View, Text, Image } from "react-native";
import { useImagePicker } from "../../../hooks";
import AnimatedBox from "./../action/AnimatedBox";
import { Font, utilitiesStyle } from "../../../../style";
import { Feather } from "@expo/vector-icons";

export default function () {
	const [image, pickImage] = useImagePicker();
	return (
		<View style={styles.image_container}>
			<View style={styles.bgImage}>
				{image ? (
					<Image
						source={image}
						resizeMode="cover"
						style={styles.imageUploaded}
					/>
				) : (
					<AnimatedBox
						onPress={pickImage}
						style={styles.containerPlaceholderImage}
						contentStyle={[
							utilitiesStyle.center,
							styles.placeholderImage,
						]}
					>
						<Feather name="camera" size={44} color="black" />
						<Text style={[Font.Inter[500]]}>upload</Text>
					</AnimatedBox>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bgImage: {
		width: "100%",
		height: "100%",
		borderRadius: 12,
		overflow: "hidden",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "black",
	},
	containerPlaceholderImage: {
		width: "100%",
		height: "100%",
	},
	placeholderImage: {
		width: "100%",
		height: "100%",
		gap: 5,
	},
	image_container: {
		height: 200,
		width: "100%",
		borderRadius: 12,
		overflow: "hidden",
		position: "relative",
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	imageUploaded: {
		width: "100%",
		height: "100%",
	},
});
