import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text } from "react-native";
import AnimatedCategoryBox from "./AnimatedCategoryBox";
import { THEME } from "../../../../data";

export default function CategoryItemSeeMore() {
	const navigation = useNavigation();

	const handleNavigate = () => {
		navigation.navigate("/pets");
	};

	return (
		<AnimatedCategoryBox onPress={handleNavigate}>
			<View style={styles.root}>
				<Text>see more</Text>
			</View>
		</AnimatedCategoryBox>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: THEME.background,
	},
});
