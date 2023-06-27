import { StyleSheet, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { PetData } from "../../../../type";
import PetOverviewItem from "../molecules/PetOverviewItem";
import { shallow } from "zustand/shallow";
import useHttpStore, {
	petsSelector,
} from "../../../../share/stores/useHttpStore";

type PetsListSectionProps = {
	id: number;
};

export default function PetsListSection({ id }: PetsListSectionProps) {
	const http = useHttpStore(petsSelector, shallow);

	const [pets, setPets] = useState<PetData[]>([]);
	useEffect(() => {
		http
			.getPetsByCategory(id)
			.then((pets) => {
				setPets(pets);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<View style={styles.root}>
			<FlatList
				data={pets}
				nestedScrollEnabled
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={styles.list}
				renderItem={({ item }) => <PetOverviewItem {...item} />}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	list: {
		gap: 12,
		paddingVertical: 20,
		paddingHorizontal: 16,
	},
	root: {
		backgroundColor: "white",
	},
});
