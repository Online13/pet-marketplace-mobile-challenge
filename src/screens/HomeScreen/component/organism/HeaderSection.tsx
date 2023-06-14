import { StyleSheet, View } from "react-native";
import { THEME } from "../../../../data";
import { FontAwesome } from "@expo/vector-icons";
import AnimatedBox from "../../../../share/components/atoms/AnimatedBox";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import Logo from "../../../../share/components/atoms/Logo";

export default function HeaderSection() {
	const navigation = useNavigation();
	const handlePress = useCallback(
		() => navigation.navigate("/search"),
		[navigation]
	);

	return (
		<View style={styles.root}>
			<Logo />
			<AnimatedBox onPress={handlePress} style={styles.searchBtn}>
				<FontAwesome name="search" size={24} color="black" />
			</AnimatedBox>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		backgroundColor: THEME.white,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	searchBtn: {
		borderWidth: 0,
	},
	headerTitleLow: {
		color: "gray",
	},
});
