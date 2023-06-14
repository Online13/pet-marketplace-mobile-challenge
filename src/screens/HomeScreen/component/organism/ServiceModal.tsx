import { StyleSheet, View, Modal, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ServiceItemButton from "../molecule/ServiceItemButton";

type ServiceModalProps = {
	show: boolean;
	close: () => void;
};

export default function ServiceModal({ show, close }: ServiceModalProps) {
	const handleCloseModal = () => {
		close();
	};

	return (
		<Modal animationType="fade" visible={show} transparent={true}>
			<View style={styles.root}>
				<View style={styles.modal}>
					<ServiceItemButton
						onPress={close}
						path="/service/adoption"
						text="Have a pet to adopt"
						icon={
							<MaterialIcons
								name="child-friendly"
								size={50}
								color="gray"
							/>
						}
					/>
					<ServiceItemButton
						onPress={close}
						path="/service/sell"
						text="Have a pet supplies"
						icon={<Entypo name="shopping-cart" size={50} color="gray" />}
					/>
					<ServiceItemButton
						onPress={close}
						path="/service/event"
						text="Have an event to share"
						icon={<MaterialIcons name="event" size={50} color="gray" />}
					/>
				</View>
				<Pressable onPress={handleCloseModal} style={styles.close}>
					<View></View>
				</Pressable>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		width: "100%",
		height: "100%",
		zIndex: 50,
		backgroundColor: "#000000cf",
		justifyContent: "center",
		alignItems: "center",
		position: "relative",
	},
	modal: {
		gap: 12,
		zIndex: 70,
		position: "relative",
	},
	close: {
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 60,
		flex: 1,
		width: "100%",
		height: "100%",
	},
});
