import { Image, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../data";
import { Font } from "../../style";
import FieldView from "../../share/components/atoms/FieldView";
import Button from "../../share/components/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import { useImagePicker } from "../../share/hooks";
import AnimatedBox from "../../share/components/atoms/AnimatedBox";
import { useHttpService } from "../../share/services/http/provider";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import FieldInput from "../../share/components/atoms/FieldInput";
export default function UserScreen() {
	const navigation = useNavigation();
	const http = useHttpService();
	const [images, pickImage] = useImagePicker();
	const [edit, setEdit] = useState(false);

	const [email, setEmail] = useState("richard.doe@gmail.com");
	const [phoneNumber, setPhoneNumber] = useState("26462328328");
	const [location, setLocation] = useState("Manchester");

	const logout = () => {
		http.auth.logout().then(() => {
			navigation.navigate("/login");
		});
	};

	return (
		<View style={styles.root}>
			<View style={styles.header}></View>
			<View style={styles.main}>
				<View style={[styles.center, styles.photos]}>
					<View style={styles.frames}>
						{images && (
							<Image
								source={images}
								resizeMode="cover"
								style={styles.imageUpload}
							/>
						)}
						<AnimatedBox style={styles.upload_btn} onPress={pickImage}>
							<Entypo name="camera" size={24} color="black" />
						</AnimatedBox>
					</View>
					<View style={styles.user_data}>
						<Text style={[styles.user_name, Font.Inter[700]]}>
							Richard Doe
						</Text>
						<Text style={[styles.user_job, Font.Inter[500]]}>
							Campany / DanState
						</Text>
					</View>
				</View>
				<View style={styles.form}>
					<View style={styles.actions}>
						{edit ? (
							<View style={{ width: 80 }}>
								<Button
									title="save"
									onPress={() => {
										setEdit(false);
									}}
								/>
							</View>
						) : (
							<AnimatedBox
								style={styles.button}
								contentStyle={styles.buttonContent}
								onPress={() => {
									setEdit(true);
								}}
							>
								<View style={styles.innerButton}>
									<AntDesign name="edit" size={20} color="black" />
								</View>
							</AnimatedBox>
						)}
					</View>
					{edit ? (
						<View style={styles.card}>
							<FieldInput
								title="Email"
								value={email}
								onChangeText={setEmail}
								placeholder="richard.doe@gmail.com"
							/>
							<FieldInput
								value={phoneNumber}
								title="Phone number"
								placeholder="+26462328328"
								onChangeText={setPhoneNumber}
							/>
							<FieldInput
								value={location}
								onChangeText={setLocation}
								title="Location"
								placeholder="Manchester"
							/>
							<FieldView title="User type" value="Buyer" />
						</View>
					) : (
						<View style={styles.card}>
							<FieldView title="Email" value={email} />
							<FieldView title="Phone number" value={phoneNumber} />
							<FieldView title="Location" value={location} />
							<FieldView title="User type" value="Buyer" />
						</View>
					)}
				</View>
				<View>
					<Button
						onPress={logout}
						title="Deconnection"
						background={THEME.secondary}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
	header: {
		height: 70,
		paddingHorizontal: 20,
		justifyContent: "center",
	},
	main: {
		flex: 1,
		gap: 39,
		paddingHorizontal: 20,
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	photos: {
		width: "100%",
		height: 200,
		gap: 15,
		position: "relative",
	},
	upload_btn: {
		position: "absolute",
		bottom: -5,
		right: -5,
		width: 40,
		aspectRatio: 1,
		backgroundColor: "pink",
		borderRadius: 20,
		borderWidth: 2,
		borderColor: THEME.background,
		justifyContent: "center",
		alignItems: "center",
	},
	user_name: {
		fontSize: 24,
	},
	frames: {
		aspectRatio: 1,
		height: 140,
		backgroundColor: "silver",
		borderRadius: 100,
		position: "relative",
	},
	user_data: {
		justifyContent: "center",
		alignItems: "center",
		gap: 4,
	},
	user_job: {},
	card: {
		backgroundColor: THEME.white,
		borderRadius: 10,
	},
	field: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 20,
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "#11111121",
	},
	field_title: {
		fontWeight: "bold",
		fontSize: 16,
	},
	field_value: {
		color: "gray",
		fontSize: 16,
	},
	imageUpload: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		borderRadius: 100,
	},
	actions: {
		flexDirection: "row-reverse",
	},
	button: {
		aspectRatio: 1,
		height: 40,
	},
	buttonContent: {
		borderWidth: 1,
		borderColor: "silver",
		paddingHorizontal: 10,
		borderRadius: 12,
		backgroundColor: THEME.white,
	},
	innerButton: {
		flexDirection: "row",
		gap: 12,
	},
	textBtn: {
		fontSize: 16,
	},
	form: {
		gap: 12,
	},
});
