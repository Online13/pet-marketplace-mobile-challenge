import { StyleSheet, View, Text, ImageBackground } from "react-native";
import HeaderLayout from "../../share/components/atoms/presentation/HeaderLayout";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORY_DATA, THEME } from "../../data";
import ButtonIcon from "../../share/components/atoms/action/ButtonIcon";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MaskBackground from "../../share/components/atoms/presentation/MaskBackground";
import AnimatedBox from "../../share/components/atoms/action/AnimatedBox";
import { useCallback } from "react";

export default function PetsCategoryScreen() {
	const navigation = useNavigation();
	const handleNavigateToPets = useCallback((id: number) => {
		return () => {
			navigation.navigate("/category", { id });
		};
	}, []);

	return (
		<View style={styles.root}>
			<HeaderLayout>
				<View style={styles.head}>
					<ButtonIcon
						onPress={() => navigation.goBack()}
						style={styles.backBtn}
					>
						<AntDesign name="arrowleft" size={20} color="black" />
					</ButtonIcon>
					<Text style={styles.header_title}>Category</Text>
				</View>
			</HeaderLayout>
			<FlatList
				data={CATEGORY_DATA}
				contentContainerStyle={styles.list}
				renderItem={({ item }) => {
					return (
						<View style={styles.pets_card}>
							<AnimatedBox
								onPress={handleNavigateToPets(item.id)}
								style={styles.pets}
							>
								<ImageBackground
									style={styles.img_bg}
									source={item.image}
									resizeMode="cover"
								/>
								<View style={styles.content}>
									<Text style={styles.title}>{item.title}</Text>
								</View>
								<MaskBackground color="#00000082" />
							</AnimatedBox>
						</View>
					);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: THEME.white,
	},
	backBtn: {
		backgroundColor: THEME.white,
	},
	head: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
	},
	header_title: {
		fontSize: 22,
		fontWeight: "500",
	},
	pets: {
		width: "100%",
		height: 150,
		position: "relative",
	},
	pets_card: {
		flex: 1,
		borderRadius: 8,
		overflow: "hidden",
		position: "relative",
	},
	list: {
		padding: 12,
		gap: 12,
	},
	bg: {
		width: "100%",
		height: "100%",
		position: "absolute",
		zIndex: 10,
		top: 0,
		left: 0,
		backgroundColor: "#00000082",
	},
	img_bg: {
		width: "100%",
		height: "100%",
		position: "relative",
		zIndex: 5,
	},
	content: {
		flex: 1,
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 20,
	},
	title: {
		color: THEME.background,
		fontSize: 30,
		padding: 20,
	},
});
