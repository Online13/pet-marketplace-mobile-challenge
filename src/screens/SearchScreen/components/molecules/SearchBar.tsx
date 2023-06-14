import { StyleSheet, View, TextInput } from "react-native";
import { THEME } from "../../../../data";
import { FontAwesome } from "@expo/vector-icons";
import { utilitiesStyle } from "../../../../style";
import AnimatedBox from "../../../../share/components/atoms/AnimatedBox";
import ButtonIcon from "../../../../share/components/atoms/ButtonIcon";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SearchBar() {
	const navigation = useNavigation();
	const handleGoBack = () => {
		navigation.goBack();
	};
	const handleSearch = () => {};

	return (
		<View style={[utilitiesStyle.sameRowAlignCenter, styles.root]}>
			<View style={[utilitiesStyle.sameRowAlignCenter, styles.actions]}>
				<ButtonIcon onPress={handleGoBack} style={styles.backBtn}>
					<AntDesign name="arrowleft" size={24} color="black" />
				</ButtonIcon>
			</View>
			<TextInput placeholder="search..." style={styles.textInput} />
			<View style={[utilitiesStyle.sameRowAlignCenter, styles.actions]}>
				<AnimatedBox onPress={handleSearch} style={styles.searchBox}>
					<FontAwesome name="search" size={24} color="black" />
				</AnimatedBox>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.white,
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
