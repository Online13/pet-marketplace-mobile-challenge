import { StyleSheet, View, Text, TextInput } from "react-native";
import HeaderSection from "./components/HeaderSection";
import { Font, globalStyle, utilitiesStyle } from "../../style";
import { FontAwesome5 } from "@expo/vector-icons";
import Section from "../../share/components/atoms/presentation/Section";
import { THEME } from "../../data";
import ImageInput from "../../share/components/atoms/form/ImageInput";

export default function EventServiceScreen() {
	return (
		<View style={styles.root}>
			<HeaderSection />
			<View style={styles.main}>
				<View style={styles.titleForm}>
					<TextInput
						style={[globalStyle.titleInput, Font.Inter[600]]}
						placeholder="Title"
					/>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={styles.date}>{new Date().toDateString()}</Text>
					</View>
				</View>
				<ImageInput />
				<Section title="Description">
					<TextInput
						multiline
						numberOfLines={15}
						verticalAlign="top"
						textAlignVertical="top"
						style={[styles.textarea, Font.Inter[500]]}
						placeholder="about the pet"
					/>
				</Section>
			</View>
			<View style={[styles.action, styles.floatingAction]}>
				<View
					style={[
						styles.button,
						styles.buttonPrimary,
						utilitiesStyle.center,
					]}
				>
					<Text style={[styles.textButton, Font.Inter[500]]}>
						Create the event
					</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	main: {
		paddingHorizontal: 22,
	},
	titleForm: {
		paddingBottom: 20,
	},
	metadata: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	date: {
		fontSize: 22,
		fontWeight: "500",
		color: "gray",
	},
	textarea: {
		padding: 12,
		fontSize: 14,
		lineHeight: 24,
		borderWidth: 1,
		borderColor: "silver",
	},
	action: {
		width: "100%",
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	floatingAction: {
		position: "absolute",
		bottom: 0,
		left: 0,
	},
	button: {
		width: "100%",
		height: 45,
		borderRadius: 12,
	},
	buttonPrimary: {
		backgroundColor: THEME.accent,
	},
	textButton: {
		fontSize: 16,
		color: THEME.accent_inverse,
	},
	image_container: {
		height: 200,
		width: "100%",
		borderRadius: 12,
		overflow: "hidden",
		position: "relative",
		marginTop: 12,
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
	containerPlaceholderImage: {
		width: "100%",
		height: "100%",
	},
	placeholderImage: {
		width: "100%",
		height: "100%",
		gap: 5,
	},
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
});
