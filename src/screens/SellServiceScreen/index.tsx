import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import { THEME } from "../../data";
import ButtonIcon from "../../share/components/atoms/ButtonIcon";
import { Entypo } from "@expo/vector-icons";
import { Font, globalStyle, utilitiesStyle } from "../../style";
import { FontAwesome5 } from "@expo/vector-icons";
import Section from "../../share/components/atoms/Section";
import GoBackAppbar from "../../share/components/molecules/GoBackAppbar";
import ImageInput from "../../share/components/atoms/ImageInput";
// type NewType = RouteProp<StackParamList, "/adoption/detail">;

export default function SellServiceScreen() {
	// const route = useRoute<NewType>();
	// const navigation = useNavigation();
	const categories = [
		{ id: 1, value: "food" },
		{ id: 2, value: "nutrition" },
	];

	return (
		<View style={styles.root}>
			<GoBackAppbar>
				<ButtonIcon onPress={() => {}} style={styles.backBtn}>
					<Entypo name="share" size={20} color="black" />
				</ButtonIcon>
			</GoBackAppbar>
			<ScrollView style={styles.about}>
				<View style={styles.title_container}>
					<TextInput
						style={[globalStyle.titleInput, Font.Inter[500]]}
						placeholder="Title"
					/>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={[styles.date, Font.Inter[500]]}>
							{new Date().toDateString()}
						</Text>
					</View>
				</View>
				<ImageInput />
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
							<TextInput
								multiline
								numberOfLines={12}
								verticalAlign="top"
								textAlignVertical="top"
								style={[styles.textarea, Font.Inter[500]]}
								placeholder="about the pet"
							/>
						</View>
					</Section>
				</View>
				<View
					style={[styles.action, utilitiesStyle.sameRowAlignSpaceBetween]}
				>
					<View
						style={[styles.actionButtonSpaces, utilitiesStyle.center]}
					></View>
				</View>
			</ScrollView>
			<View style={[styles.action, utilitiesStyle.sameRowAlignSpaceBetween]}>
				<View style={[styles.actionButton, utilitiesStyle.center]}>
					<Text style={[styles.textAction, Font.Inter[500]]}>
						Create product
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
		paddingTop: 0,
		paddingHorizontal: 20,
	},
	action: {
		position: "absolute",
		bottom: 0,
		left: 0,
		gap: 12,
		width: "100%",
		paddingVertical: 12,
		paddingHorizontal: 20,
	},
	actionContent: {
		flex: 1,
		borderRadius: 12,
	},
	actionButton: {
		flex: 1,
		height: 45,
		borderRadius: 12,
		backgroundColor: THEME.accent,
	},
	actionButtonSpaces: {
		flex: 1,
		height: 45,
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
	bg: {
		paddingVertical: 12,
		paddingHorizontal: 24,
		width: "100%",
		height: 340,
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
		height: 200,
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
	textarea: {
		padding: 16,
		borderWidth: 1,
		borderColor: "#00000032",
	},
});
