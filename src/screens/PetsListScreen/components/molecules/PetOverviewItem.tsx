import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { utilitiesStyle } from "../../../../style";
import { PetData } from "../../../../type";
import { useNavigation } from "@react-navigation/native";

type PetOverviewItemProps = PetData;

export default function PetOverviewItem(item: PetOverviewItemProps) {
	const navigation = useNavigation();
	const handleSeeOverview = () => {
		navigation.navigate("/adoption/detail", { id: item.id });
	};

	return (
		<TouchableOpacity onPress={handleSeeOverview}>
			<View style={[utilitiesStyle.sameRowAlignCenter, styles.pet_card]}>
				<View style={styles.pet_image_container}>
					<Image
						style={styles.pet_image}
						source={item.image}
						resizeMode="cover"
					/>
				</View>
				<View style={styles.pet_about}>
					<View>
						<Text style={styles.pet_about_title}>{item.title}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	pet_card: {
		gap: 12,
		flex: 1,
		height: 180,
	},
	pet_image_container: {
		width: "40%",
		height: "100%",
		borderRadius: 12,
		overflow: "hidden",
	},
	pet_image: {
		width: "100%",
		height: "100%",
	},
	pet_about: {
		flex: 1,
		width: "100%",
		height: "100%",
	},
	pet_about_title: {
		fontSize: 20,
		fontWeight: "800",
	},
});
