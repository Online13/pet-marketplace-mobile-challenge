import { StyleSheet, View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PetFood } from "../../../../type";
import useHttpStore, {
	petsSelector,
} from "../../../../share/stores/useHttpStore";
import { shallow } from "zustand/shallow";
import PetFoodStorieItem from "../molecule/PetFoodStorieItem";

export default function StoriesSection() {
	const http = useHttpStore(petsSelector, shallow);
	const [petFoodList, setPetFoodList] = useState<PetFood[]>([]);
	useEffect(() => {
		http
			.getPetFoodStories()
			.then((petFoods) => {
				setPetFoodList(petFoods);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<View style={styles.root}>
			<FlatList
				horizontal
				data={petFoodList}
				style={styles.petFoodList}
				contentContainerStyle={styles.petFoodListContent}
				keyExtractor={({ id }) => `pet-food-${id}`}
				renderItem={({ item }) => {
					return <PetFoodStorieItem {...item} />;
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		height: 90,
		backgroundColor: "white",
	},
	petFoodList: {
		paddingHorizontal: 6,
	},
	petFoodListContent: {
		gap: 4,
	},
});
