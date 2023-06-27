import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ChatScreen from "../screens/ChatScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { HomeTabParamList } from "./type";
import { THEME } from "../data";
import UserScreen from "../screens/UserScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SearchScreen from "../screens/SearchScreen";

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
								size={25}
								color={focused ? THEME.text : "silver"}
							/>
						);
					},
				}}
				component={HomeScreen}
			/>
			<Tab.Screen
				name="/home/search"
				options={{
					tabBarShowLabel: false,
					headerShown: false,
					tabBarIcon: ({ focused }) => {
						return (
							<FontAwesome
								name="search"
								size={25}
								color={focused ? THEME.text : "silver"}
							/>
						);
					},
				}}
				component={SearchScreen}
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
								size={25}
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
								size={25}
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
