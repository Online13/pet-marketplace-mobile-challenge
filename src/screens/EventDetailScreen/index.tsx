import { StyleSheet, View, Text, Image } from "react-native";
import HeaderSection from "./components/HeaderSection";
import { Font } from "../../style";
import { FontAwesome5 } from "@expo/vector-icons";
import Section from "../../share/components/atoms/presentation/Section";
import { THEME } from "../../data";
import Button from "../../share/components/atoms/action/Button";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export default function EventDetailScreen() {
	const navigation = useNavigation();
	const handlePressParticipate = useCallback(() => {
		navigation.navigate("/home", { screen: "/home/overview" });
	}, []);

	return (
		<View style={styles.root}>
			<HeaderSection />
			<View style={styles.main}>
				<View style={styles.metadata}>
					<FontAwesome5 name="calendar" size={16} color="gray" />
					<Text style={styles.date}>{new Date().toDateString()}</Text>
				</View>
				<Text style={[styles.title, Font.Inter[600]]}>
					Rescue Dogs Event
				</Text>
				<View style={styles.image}>
					<Image
						source={require("./../../../assets/images/news/markus-winkler-PcKhVNNyEio-unsplash.jpg")}
						style={{ width: "100%", height: "100%" }}
						resizeMode="cover"
					/>
				</View>
				<Section title="Description">
					<Text style={[styles.description, Font.Inter[500]]}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Facere odit, ea incidunt itaque voluptates, nulla non deleniti
						recusandae, culpa illum ullam cum exercitationem. Dicta
						labore, ab consequuntur numquam voluptas quos! Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Facere odit, ea
						incidunt itaque voluptates, nulla non deleniti recusandae,
						culpa illum ullam cum exercitationem. Dicta labore, ab
						consequuntur numquam voluptas quos!
					</Text>
				</Section>
			</View>
			<View style={[styles.action, styles.floatingAction]}>
				<Button title="Participate" onPress={handlePressParticipate} />
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
	title: {
		fontSize: 25,
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
	image: {
		width: "100%",
		height: 200,
		borderRadius: 12,
		overflow: "hidden",
		marginVertical: 20,
	},
	description: {
		fontSize: 14,
		lineHeight: 24,
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
});
