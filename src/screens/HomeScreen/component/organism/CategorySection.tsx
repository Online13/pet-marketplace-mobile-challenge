import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CategoryItem from "../molecule/CategoryItem";
import { useEffect, useState } from "react";
import { CategoryData } from "../../../../type";
import { THEME } from "../../../../data";
import { useNavigation } from "@react-navigation/native";
import { Font, globalStyle, utilitiesStyle } from "../../../../style";
import { MaterialIcons } from "@expo/vector-icons";
import useHttpStore, {
	petsSelector,
} from "../../../../share/stores/useHttpStore";
import { shallow } from "zustand/shallow";

export default function CategorySection() {
	const http = useHttpStore(petsSelector, shallow);
	const navigation = useNavigation();
	const [hotPetList, setHotPetList] = useState<CategoryData[]>([]);

	useEffect(() => {
		http.getHotCategories().then((categories) => {
			setHotPetList(categories);
		});
	}, []);

	return (
		<View style={styles.root}>
			<View style={styles.heading}>
				<View style={[globalStyle.subTitle]}>
					<MaterialIcons
						name="local-fire-department"
						size={24}
						color="black"
					/>
					<Text style={[styles.subTitleText, Font.Inter[800]]}>
						Hot pets
					</Text>
				</View>
				<TouchableOpacity
					style={[styles.heading_more, utilitiesStyle.sameRowAlignCenter]}
					onPress={() => navigation.navigate("/pets")}
				>
					<Text style={[styles.link, Font.Inter[500]]}>see all</Text>
					<MaterialIcons
						name="arrow-forward-ios"
						size={16}
						color="black"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.main}>
				{hotPetList.map((item) => {
					return <CategoryItem key={item.id.toString()} {...item} />;
				})}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: THEME.white,
	},
	link: {
		fontSize: 18,
		paddingHorizontal: 6,
		paddingVertical: 1,
		color: THEME.accent,
	},
	main: {
		flex: 1,
		gap: 12,
		height: 200,
		paddingHorizontal: 20,
		flexDirection: "row",
	},
	heading: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	heading_more: {
		gap: 2,
	},
	subTitleText: {
		fontSize: 18,
	},
	list: {
		gap: 10,
		paddingHorizontal: 15,
	},
});
