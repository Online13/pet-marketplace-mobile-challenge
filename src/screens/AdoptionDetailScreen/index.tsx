import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { THEME } from "../../data";
import ButtonIcon from "../../share/components/atoms/action/ButtonIcon";
import { Entypo } from "@expo/vector-icons";
import { Font, utilitiesStyle } from "../../style";
import { FontAwesome5 } from "@expo/vector-icons";
import FieldView from "../../share/components/atoms/form/FieldView";
import GoBackAppbar from "../../share/components/molecules/GoBackAppbar";
import Section from "../../share/components/atoms/presentation/Section";
import Button from "../../share/components/atoms/action/Button";
import { useCallback } from "react";
import UserBrand from "../../share/components/molecules/UserBrand";

export default function AdoptionDetailScreen() {
	const navigation = useNavigation();
	const handlePressAdopt = useCallback(() => {
		navigation.navigate("/home", { screen: "/home/chat" });
	}, [navigation]);

	return (
		<View style={styles.root}>
			<GoBackAppbar>
				<ButtonIcon onPress={() => {}} style={styles.backBtn}>
					<Entypo name="share" size={20} color="black" />
				</ButtonIcon>
			</GoBackAppbar>
			<ScrollView style={styles.about}>
				<View style={styles.title_container}>
					<Text style={styles.title}>Cute Kittens avalaible</Text>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={styles.date}>{new Date().toDateString()}</Text>
					</View>
				</View>
				<View style={styles.image_container}>
					<View></View>
					<Image
						resizeMode="cover"
						style={styles.image}
						source={require("./../../../assets/images/news/bharathi-kannan-rfL-thiRzDs-unsplash.jpg")}
					/>
				</View>
				<View>
					<Section title="description">
						<Text style={[Font.Inter[500], styles.description]}>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Perspiciatis ad recusandae at sapiente dicta eligendi ea
							sit, temporibus quaerat nulla. In accusamus molestias
							dolores fugiat, fugit dolorum cum saepe assumenda.
						</Text>
					</Section>
					<Section title="Information">
						<View style={styles.tabView}>
							<FieldView title="age" value="12" />
							<FieldView title="breed" value="unknown" />
							<FieldView title="gender" value="???" />
							<FieldView title="vaccination status" value="???" />
							<FieldView title="weight" value="???" />
							<FieldView title="size" value="???" />
						</View>
					</Section>
					<Section title="Reviews">
						<View style={styles.reviewContent}>
							<View style={styles.reviewMark}>
								<Text style={styles.marks}>4.5</Text>
							</View>
							<View></View>
						</View>
					</Section>
					<Section title="Contact">
						<View style={styles.contact}>
							<Text style={[Font.Inter[500]]}>Discuss with </Text>
							<Text style={(Font.Inter[700], { color: THEME.accent })}>
								John Doe
							</Text>
							<Text style={[Font.Inter[500]]}>
								{" "}
								to have more information
							</Text>
						</View>
						<UserBrand />
					</Section>
				</View>
				<View style={styles.action}>
					<View style={[styles.button, utilitiesStyle.center]}></View>
				</View>
			</ScrollView>
			<View style={[styles.action, styles.floatingAction]}>
				<Button title="Adopt" onPress={handlePressAdopt} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	metadata: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	date: {
		fontSize: 14,
		fontWeight: "500",
		color: "gray",
	},
	about: {
		flex: 1,
		padding: 12,
		paddingHorizontal: 20,
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
		elevation: 2,
		width: "100%",
		borderRadius: 12,
		overflow: "hidden",
		position: "relative",
		backgroundColor: "silver",
	},
	image: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	backBtn: {
		backgroundColor: THEME.white,
	},
	title_container: {
		paddingBottom: 18,
		gap: 6,
	},
	subtitle: {
		color: "gray",
	},
	title: {
		fontSize: 22,
		fontWeight: "500",
	},
	tabs: {
		gap: 7,
		marginTop: 12,
		marginBottom: 20,
	},
	tab: {
		paddingVertical: 12,
		paddingHorizontal: 26,
	},
	tabText: {
		fontSize: 16,
		fontWeight: "600",
		textTransform: "uppercase",
	},
	tabView: {
		width: "100%",
	},
	reviewContent: {
		height: 140,
		padding: 12,
		paddingHorizontal: 20,
	},
	reviewMark: {},
	marks: {
		fontSize: 70,
	},
	description: {
		lineHeight: 20,
	},
	contact: {
		flexDirection: "row",
		paddingVertical: 20,
	},
});
