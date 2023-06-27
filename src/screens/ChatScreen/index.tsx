import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { THEME } from "../../data";
import { Font, utilitiesStyle } from "../../style";
import { FontAwesome } from "@expo/vector-icons";
import AnimatedBox from "../../share/components/atoms/action/AnimatedBox";
import { useCallback } from "react";
import HeaderSection from "./components/HeaderSection";
import { useNavigation } from "@react-navigation/native";

export default function ChatScreen() {
	const navigation = useNavigation();
	const handleSearch = useCallback(() => {}, []);
	const handlePress = useCallback(
		(index: number) => {
			return () => {
				navigation.navigate("/chat/user", { id: index });
			};
		},
		[navigation]
	);

	return (
		<View style={styles.root}>
			<HeaderSection />
			<View style={{ paddingHorizontal: 20 }}>
				<View
					style={[
						styles.searchBar,
						utilitiesStyle.sameRowAlignSpaceBetween,
					]}
				>
					<TextInput placeholder="search..." style={styles.textInput} />
					<View
						style={[utilitiesStyle.sameRowAlignCenter, styles.actions]}
					>
						<AnimatedBox onPress={handleSearch} style={styles.searchBox}>
							<FontAwesome name="search" size={18} color="black" />
						</AnimatedBox>
					</View>
				</View>
			</View>
			<View style={styles.list}>
				<FlatList
					style={{ paddingHorizontal: 20 }}
					contentContainerStyle={{ gap: 6 }}
					data={Array.from({ length: 20 })}
					renderItem={({ index }) => {
						return (
							<AnimatedBox
								style={styles.cardParent}
								contentStyle={styles.card}
								onPress={handlePress(index)}
							>
								<View style={styles.image}>
									<View style={styles.fakeImage} />
								</View>
								<View style={styles.content}>
									<Text style={[styles.userName, Font.Inter[800]]}>
										John Doe
									</Text>
									<Text style={[styles.lastMessage, Font.Inter[500]]}>
										lorem ipsum dolor sit amet consekitur...
									</Text>
								</View>
							</AnimatedBox>
						);
					}}
					keyExtractor={(_, i) => `k=${i}`}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.white,
	},
	textInput: {
		flex: 1,
		fontSize: 18,
	},
	searchBar: {
		height: 48,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: "silver",

		width: "100%",
		backgroundColor: THEME.white,
		padding: 12,
	},
	searchBox: {
		aspectRatio: 1,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	actions: {},
	list: {
		paddingVertical: 20,
		backgroundColor: THEME.white,
	},
	cardParent: {
		width: "100%",
		height: 70,
	},
	card: {
		backgroundColor: "white",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	image: {
		height: "100%",
		aspectRatio: 1,
		padding: 6,
	},
	fakeImage: {
		flex: 1,
		borderRadius: 100,
		backgroundColor: "silver",
	},
	content: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	userName: {
		color: THEME.text,
	},
	lastMessage: {
		color: "gray",
	},
});
