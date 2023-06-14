import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Text, Image } from "react-native";
import { CategoryData } from "../../../../type";
import AnimatedCategoryBox from "./AnimatedCategoryBox";
import { THEME } from "../../../../data";
import { globalStyle } from "../../../../style";

type CategoryItemProps = CategoryData;

export default function CategoryItem(data: CategoryItemProps) {
	const navigation = useNavigation();

	const handleNavigate = () => {
		navigation.navigate("/category", { id: data.id });
	};

	return (
		<AnimatedCategoryBox onPress={handleNavigate}>
			<Image source={data.image} style={styles.image} resizeMode="cover" />
			<View style={styles.content}>
				<Text style={[styles.text, globalStyle.text("r-500")]}>
					{data.title}
				</Text>
			</View>
		</AnimatedCategoryBox>
	);
}

const styles = StyleSheet.create({
	content: {
		width: "100%",
		height: "100%",
		padding: 12,
		backgroundColor: "#00000060",
	},
	text: {
		fontSize: 18,
		color: THEME.white,
	},
	image: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
	},
});
