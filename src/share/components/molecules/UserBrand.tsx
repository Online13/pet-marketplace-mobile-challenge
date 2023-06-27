import { StyleSheet, View, Text } from "react-native";
import { Font } from "../../../style";
import AnimatedBox from "../atoms/action/AnimatedBox";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

export default function UserBrand() {
	const navigation = useNavigation();
	const handlePressVisitUser = useCallback(() => {
		navigation.navigate("/chat/user", { id: 1 });
	}, [navigation]);

	return (
		<AnimatedBox style={styles.root} onPress={handlePressVisitUser}>
			<View style={styles.image}></View>
			<View style={styles.about}>
				<Text style={[styles.title, Font.Inter[600]]}>John Doe</Text>
				<Text style={[styles.marketplace, Font.Inter[500]]}>
					@shopmarket
				</Text>
			</View>
		</AnimatedBox>
	);
}

const styles = StyleSheet.create({
	root: {
		width: "100%",
		height: 80,
		padding: 12,
		backgroundColor: "white",
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "silver",
		borderRadius: 20,
		marginBottom: 50,
	},
	image: {
		aspectRatio: 1,
		borderRadius: 100,
		backgroundColor: "gray",
	},
	about: {
		padding: 12,
		justifyContent: "center",
	},
	title: {
		fontSize: 16,
	},
	marketplace: {
		fontSize: 14,
	},
});
