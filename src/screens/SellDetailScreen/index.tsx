import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { THEME } from "../../data";
import ButtonIcon from "../../share/components/atoms/action/ButtonIcon";
import { Entypo } from "@expo/vector-icons";
import { Font, utilitiesStyle } from "../../style";
import { FontAwesome5 } from "@expo/vector-icons";
import Section from "../../share/components/atoms/presentation/Section";
import GoBackAppbar from "../../share/components/molecules/GoBackAppbar";
import UserBrand from "../../share/components/molecules/UserBrand";
import Button from "../../share/components/atoms/action/Button";
import { useCallback } from "react";

export default function SellDetailScreen() {
	const navigation = useNavigation();
	const categories = [
		{ id: 1, value: "food" },
		{ id: 2, value: "nutrition" },
	];
	const handlePressBuy = useCallback(() => {
		navigation.navigate("/home", { screen: "/home/overview" });
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
					<Text style={[styles.title, Font.Inter[600]]}>Cat Food</Text>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={[styles.date, Font.Inter[500]]}>
							{new Date().toDateString()}
						</Text>
					</View>
				</View>
				<View style={styles.image_container}>
					<View></View>
					<Image
						resizeMode="cover"
						style={styles.image}
						source={require("./../../../assets/images/news/kabo-RKDRI_LK9c0-unsplash.jpg")}
					/>
				</View>
				<View>
					<Section title="Category">
						<View style={styles.categories}>
							{categories.map((category) => (
								<View
									key={`category-${category.id}`}
									style={styles.category}
								>
									<Text>{category.value}</Text>
								</View>
							))}
						</View>
					</Section>
					<Section title="Description">
						<View style={styles.tabView}>
							<Text style={[styles.tabDescription, Font.Inter[500]]}>
								Introducing our new cat food: nutritious, delicious, and
								irresistible. Satisfy your feline companion with
								high-quality ingredients, balanced nutrition, and
								delectable flavors. The perfect choice for discerning
								cats who deserve the best.
							</Text>
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
			</ScrollView>
			<View style={[styles.action, utilitiesStyle.sameRowAlignSpaceBetween]}>
				<View style={[styles.actionContent]}>
					<Text style={[styles.textButton, Font.Inter[500]]}>
						Total Price
					</Text>
					<Text
						style={[styles.textButton, styles.textPrice, Font.Inter[800]]}
					>
						$8.00
					</Text>
				</View>
				<View style={styles.btnContainer}>
					<Button title="Buy" onPress={handlePressBuy} />
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
	backBtn: {
		backgroundColor: THEME.white,
	},
	header: {
		width: "100%",
		height: 60,
		padding: 12,
	},
	about: {
		flex: 1,
		padding: 12,
		paddingHorizontal: 20,
	},
	action: {
		gap: 12,
		width: "100%",
		borderWidth: 2,
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderColor: "#00000045",
	},
	actionContent: {
		borderRadius: 12,
	},
	actionButton: {
		flex: 1,
		height: 45,
		borderRadius: 12,
		backgroundColor: THEME.accent,
	},
	textAction: {
		fontSize: 18,
		color: THEME.accent_inverse,
	},
	textButton: {
		fontSize: 16,
		color: THEME.text,
	},
	textPrice: {
		fontSize: 24,
		color: THEME.accent,
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
	title_container: {
		paddingBottom: 12,
		gap: 6,
	},
	subtitle: {
		color: "gray",
	},
	title: {
		fontSize: 22,
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
	tabDescription: {
		fontSize: 14,
		lineHeight: 24,
	},
	tabView: {
		width: "100%",
	},
	reviewContent: {
		height: 150,
		padding: 12,
		paddingHorizontal: 20,
	},
	reviewMark: {},
	marks: {
		fontSize: 70,
	},
	categories: {
		gap: 12,
		flexWrap: "wrap",
		flexDirection: "row",
	},
	category: {
		borderWidth: 1,
		borderRadius: 12,
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderColor: "silver",
	},
	contact: {
		flexDirection: "row",
		paddingVertical: 20,
	},
	btnContainer: {
		maxWidth: 140,
		width: "100%",
	},
});
