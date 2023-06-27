import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../../../../data";
import { useNavigation } from "@react-navigation/native";
import { CategoryData } from "../../../../type";
import PetsListSkeleton from "../molecules/PetsListSkeleton";
import { shallow } from "zustand/shallow";
import useHttpStore, {
	petsSelector,
} from "../../../../share/stores/useHttpStore";

type HeaderSectionProps = {
	id: number;
};

export default function HeaderSection({ id }: HeaderSectionProps) {
	const navigation = useNavigation();
	const http = useHttpStore(petsSelector, shallow);

	const [categoryData, setCategoryData] = useState<CategoryData>();

	useEffect(() => {
		http
			.getCategoryById(id)
			.then((category) => {
				setCategoryData(category);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [id]);

	if (categoryData === undefined) return <PetsListSkeleton />;

	return (
		<View style={styles.header}>
			<ImageBackground
				source={categoryData?.image}
				resizeMode="cover"
				style={styles.images}
			>
				<View style={styles.header_content}>
					<View style={styles.header_content_title}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<AntDesign
								name="arrowleft"
								size={24}
								color={THEME.background}
							/>
						</TouchableOpacity>
						<Text style={styles.header_title}>{categoryData.title}</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 200,
	},
	header_content: {
		flex: 1,
		padding: 20,
		backgroundColor: "#0000006c",
		justifyContent: "flex-end",
	},
	header_content_title: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	header_title: {
		fontSize: 24,
		color: THEME.background,
		fontWeight: "600",
	},
	images: {
		flex: 1,
	},
});
