import { StyleSheet, View, Text, Image } from "react-native";
import { PetFood } from "../../../../type";

type PetFoodStorieItemProps = PetFood;

export default function PetFoodStorieItem({
	id,
	image,
	name,
}: PetFoodStorieItemProps) {
	return (
		<View style={styles.root}>
			<Image source={image} style={styles.image} />
			<Text>{name}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		aspectRatio: 1,
		height: "80%",
		borderRadius: 50,
		backgroundColor: "blue",
	},
});
