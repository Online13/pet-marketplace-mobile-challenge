import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeTabParamList } from "./type";
import { THEME } from "../data";
import UserScreen from "../screens/UserScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator<HomeTabParamList>();

export default function TabScreen() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 60,
				},
			}}
		>
			<Tab.Screen
				name="/home/overview"
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name="newspaper"
								size={focused ? 30 : 30}
								color={focused ? THEME.text : "silver"}
							/>
						);
					},
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name="/home/chat"
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<MaterialIcons
								name="message"
								size={focused ? 35 : 30}
								color={focused ? THEME.text : "silver"}
							/>
						);
					},
				}}
				component={ChatScreen}
			/>
			<Tab.Screen
				name="/home/user"
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="user"
								size={focused ? 35 : 30}
								color={focused ? THEME.text : "silver"}
							/>
						);
					},
				}}
				component={UserScreen}
			/>
		</Tab.Navigator>
	);
}
