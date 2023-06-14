import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { ProductActivityData } from "../../../../type";
import { FontAwesome5 } from "@expo/vector-icons";
import { THEME } from "../../../../data";
import MaskBackground from "../../../../share/components/atoms/MaskBackground";
import { useCallback } from "react";
import { Font, utilitiesStyle } from "../../../../style";
import { useNavigation } from "@react-navigation/native";

type ProductOverviewItemProps = ProductActivityData;

export default function ProductOverviewItem({
	id,
	title,
	image,
	date,
	price,
	unit,
}: ProductOverviewItemProps) {
	const navigation = useNavigation();
	const handlePress = useCallback(() => {
		navigation.navigate("/sell/detail", { id });
	}, [id, navigation]);

	return (
		<TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
			<View style={styles.root}>
				<View style={styles.image}>
					<View style={styles.about}>
						<View>
							<Text style={[styles.subtitle, Font.Inter[500]]}>
								Product
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
				<View
					style={[
						utilitiesStyle.sameRowAlignCenter,
						styles.about_metadata,
					]}
				>
					<View style={styles.metadata}>
						<FontAwesome5 name="calendar" size={16} color="gray" />
						<Text style={styles.date}>{date.toDateString()}</Text>
					</View>
					<View>
						<Text style={[styles.price, Font.Inter[500]]}>
							{price} {unit}
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
		justifyContent: "space-between",
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
	price: {
		fontSize: 20,
		fontWeight: "800",
	},
	subtitle: {
		fontSize: 16,
		color: "silver",
		fontWeight: "700",
	},
	title: {
		fontSize: 20,
		color: "white",
	},
	date: {
		fontSize: 14,
		fontWeight: "500",
		color: "gray",
	},
});
