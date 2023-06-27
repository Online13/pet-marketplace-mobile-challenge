import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Font, globalStyle } from "../../../style";
import { THEME } from "../../../data";
import FieldInput from "../../../share/components/atoms/form/FieldInput";
import Section from "../../../share/components/atoms/presentation/Section";
import ImageInput from "../../../share/components/atoms/form/ImageInput";

export default function FormSection() {
	return (
		<ScrollView contentContainerStyle={styles.scroller} style={styles.root}>
			<View style={styles.title_container}>
				<TextInput style={globalStyle.titleInput} placeholder="Title" />
				<View style={styles.metadata}>
					<FontAwesome5 name="calendar" size={16} color="gray" />
					<Text style={styles.date}>{new Date().toDateString()}</Text>
				</View>
			</View>
			<View style={styles.form}>
				<ImageInput />
				<Section title="Description">
					<TextInput
						multiline
						numberOfLines={5}
						verticalAlign="top"
						textAlignVertical="top"
						style={[styles.textarea, Font.Inter[500]]}
						placeholder="about the pet"
					/>
				</Section>
				<Section title="Information">
					<View style={styles.tabView}>
						<FieldInput
							title="age"
							placeholder="12"
							keyboardType="number-pad"
						/>
						<FieldInput
							title="breed"
							keyboardType="default"
							placeholder="unknown"
						/>
						<FieldInput
							title="gender"
							keyboardType="default"
							placeholder="???"
						/>
						<FieldInput
							title="vaccination status"
							keyboardType="number-pad"
							placeholder="???"
						/>
						<FieldInput
							title="weight"
							keyboardType="number-pad"
							placeholder="???"
						/>
						<FieldInput
							title="size"
							keyboardType="default"
							placeholder="???"
						/>
					</View>
				</Section>
			</View>
			<View style={styles.space}>
				<View style={styles.spaceContent}></View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	space: {
		width: "100%",
		paddingHorizontal: 12,
		paddingTop: 20,
		paddingBottom: 12,
	},
	spaceContent: {
		height: 45,
	},
	root: {
		flex: 1,
	},
	scroller: {
		paddingHorizontal: 12,
	},
	form: {
		paddingHorizontal: 12,
	},
	headerTitle: {
		paddingHorizontal: 20,
		paddingVertical: 18,
	},
	bg: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		width: "100%",
		height: 340,
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
		paddingHorizontal: 6,
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
	backBtn: {
		backgroundColor: THEME.white,
	},
	title_container: {
		paddingBottom: 22,
		paddingHorizontal: 12,
		gap: 6,
	},
	subtitle: {
		color: "gray",
	},
	tab: {
		paddingVertical: 12,
		paddingHorizontal: 26,
	},
	tabView: {
		width: "100%",
	},
	reviewContent: {
		padding: 12,
		paddingHorizontal: 20,
	},
	reviewMark: {},
	marks: {
		fontSize: 70,
	},
	date: {
		fontSize: 14,
		fontWeight: "500",
		color: "gray",
	},
	metadata: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	textarea: {
		height: 100,
		padding: 16,
		borderWidth: 1,
		borderColor: "#00000032",
	},
});
