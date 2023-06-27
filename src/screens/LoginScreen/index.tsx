import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Pressable,
	Alert,
} from "react-native";
import Logo from "../../share/components/atoms/presentation/Logo";
import { Font, utilitiesStyle } from "../../style";
import Button from "../../share/components/atoms/action/Button";
import { THEME } from "../../data";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import useTokenStore from "../../share/stores/useTokenStore";
import { shallow } from "zustand/shallow";
import useHttpStore, { authSelector } from "../../share/stores/useHttpStore";

export default function LoginScreen() {
	const navigation = useNavigation();
	const http = useHttpStore(authSelector, shallow);
	const saveToken = useTokenStore((s) => s.setToken);

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const login = () => {
		http.login(username, password).then((result) => {
			if (result.success) {
				saveToken(result.token);
				navigation.navigate("/home", { screen: "/home/overview" });
			} else {
				Alert.alert("Error !", result.message);
			}
		});
	};
	const goToRegister = () => {
		navigation.navigate("/register");
	};

	return (
		<View style={[styles.root, utilitiesStyle.center]}>
			<View style={styles.logo}>
				<Logo />
			</View>
			<View style={[utilitiesStyle.center, styles.rootForm]}>
				<View style={[styles.form]}>
					<View style={styles.title}>
						<Text style={[styles.h1, Font.Inter[800]]}>Login</Text>
						<Text style={[styles.h2, Font.Inter[800]]}>
							<Text style={{ color: "#6f6f6f" }}>as</Text>{" "}
							<Text style={{ color: THEME.accent }}>Provider</Text>
						</Text>
					</View>
					<View style={styles.formGroup}>
						<Text style={[styles.label, Font.Inter[700]]}>username</Text>
						<TextInput
							value={username}
							onChangeText={setUserName}
							placeholder="username"
							style={[styles.input]}
						/>
					</View>
					<View style={styles.formGroup}>
						<Text style={[styles.label, Font.Inter[700]]}>password</Text>
						<TextInput
							value={password}
							onChangeText={setPassword}
							placeholder="password"
							secureTextEntry
							style={[styles.input]}
						/>
					</View>
					<Button title="Login" onPress={login} />
				</View>
				<View style={styles.bottomAction}>
					<Text style={[Font.Inter[500]]}>Don't have an account ?</Text>
					<Pressable onPress={goToRegister}>
						<Text style={[styles.link, Font.Inter[800]]}>Register</Text>
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		backgroundColor: "white",
	},
	logo: {
		width: "100%",
		height: 50,
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	title: {
		paddingBottom: 30,
	},
	h1: {
		fontSize: 30,
	},
	h2: {
		fontSize: 24,
	},
	base: {
		fontSize: 16,
	},
	rootForm: {
		flex: 1,
		width: "100%",
	},
	form: {
		width: "100%",
		maxWidth: 340,
		gap: 18,
	},
	formGroup: {},
	label: {
		paddingBottom: 4,
		textTransform: "capitalize",
	},
	input: {
		paddingVertical: 6,
		paddingHorizontal: 12,
		borderWidth: 1,
		borderColor: "silver",
	},
	bottomAction: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		padding: 20,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		gap: 4,
	},
	link: {
		color: THEME.accent,
	},
});
