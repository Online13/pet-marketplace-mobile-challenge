import { StyleSheet, View, TextInput } from "react-native";
import { THEME } from "../../../../data";
import { FontAwesome } from "@expo/vector-icons";
import { utilitiesStyle } from "../../../../style";
import AnimatedBox from "../../../../share/components/atoms/action/AnimatedBox";

export default function SearchBar() {
	const handleSearch = () => {};

	return (
		<View style={[utilitiesStyle.sameRowAlignCenter, styles.root]}>
			<View style={styles.searchBar}>
				<View style={[utilitiesStyle.sameRowAlignCenter, styles.actions]}>
					<AnimatedBox onPress={handleSearch} style={styles.searchBox}>
						<FontAwesome name="search" size={24} color="black" />
					</AnimatedBox>
				</View>
				<TextInput placeholder="search..." style={styles.textInput} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		width: "100%",
		height: 60,
		backgroundColor: THEME.white,
		padding: 12,
	},
	searchBar: {
		flex: 1,
		backgroundColor: THEME.accent,
	},
	backBtn: {
		backgroundColor: THEME.white,
		marginHorizontal: 12,
	},
	textInput: {
		flex: 1,
		fontSize: 20,
	},
	searchBox: {
		aspectRatio: 1,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	actions: {},
});
