import { StyleSheet, View, ActivityIndicator } from "react-native";
import { THEME } from "../../data";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useTokenStore from "../../share/stores/useTokenStore";

export default function MainScreen() {
	const token = useTokenStore((s) => s.token);
	const navigation = useNavigation();
	useEffect(() => {
		if (token === null) {
			return navigation.navigate("/login");
		}

		console.log("Session found !");
		navigation.navigate("/home", { screen: "/home/overview" });
	}, []);

	return (
		<View style={styles.root}>
			<ActivityIndicator size={50} color={THEME.accent} />
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
});
