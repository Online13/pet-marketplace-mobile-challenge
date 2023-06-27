import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AdoptionActivityData } from "../../../../type";
import { THEME } from "../../../../data";
import { useCallback } from "react";
import MaskBackground from "../../../../share/components/atoms/presentation/MaskBackground";
import { useNavigation } from "@react-navigation/native";
import { Font, globalStyle } from "../../../../style";

type AdoptionOverviewItemProps = AdoptionActivityData;

export default function AdoptionOverviewItem({
	id,
	title,
	image,
	date,
}: AdoptionOverviewItemProps) {
	const navigation = useNavigation();
	const handlePress = useCallback(() => {
		navigation.navigate("/adoption/detail", { id });
	}, [id, navigation]);

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
			<View style={styles.root}>
				<View style={styles.image}>
					<View style={styles.about}>
						<View>
							<Text style={[styles.subtitle, Font.Inter[700]]}>
								Adoption
							</Text>
							<Text style={[styles.title, Font.Inter[500]]}>
								{title}
							</Text>
						</View>
					</View>
					<Image
						source={image}
						style={{ width: "100%", height: "100%" }}
						resizeMode="cover"
					/>
					<MaskBackground />
				</View>
				<View style={styles.about_metadata}>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={[styles.date, Font.Inter[500]]}>
							{date.toDateString()}
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	root: {
		elevation: 1,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "silver",
		overflow: "hidden",
		backgroundColor: THEME.white,
	},
	legend_text: {
		fontSize: 16,
		color: THEME.background,
	},
	image: {
		width: "100%",
		height: 200,
		position: "relative",
		zIndex: 10,
		overflow: "hidden",
		backgroundColor: "silver",
	},
	about_metadata: {
		paddingVertical: 12,
		paddingHorizontal: 18,
	},
	about: {
		position: "absolute",
		zIndex: 30,
		top: 20,
		left: 20,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	action: {
		flex: 1,
		padding: 12,
	},
	metadata: {
		flexDirection: "row",
		gap: 8,
		alignItems: "center",
	},
	date: {
		fontSize: 14,
		color: "gray",
	},
	subtitle: {
		fontSize: 16,
		color: "silver",
	},
	title: {
		fontSize: 20,
		color: "white",
	},
});
