import { StyleSheet, ScrollView } from "react-native";
import { THEME } from "../../data";
import HeaderSection from "./components/organisms/HeaderSection";
import { StackParamList } from "../../route/type";
import { RouteProp, useRoute } from "@react-navigation/native";
import PetsListSection from "./components/organisms/PetsListSection";
type NewType = RouteProp<StackParamList, "/category">;

export default function PetsListScreen() {
	const route = useRoute<NewType>();

	return (
		<ScrollView contentContainerStyle={styles.root}>
			<HeaderSection id={route.params.id} />
			<PetsListSection id={route.params.id} />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: THEME.background,
	},
});
