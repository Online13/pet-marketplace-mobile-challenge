import { createStackNavigator } from "@react-navigation/stack";
import TabScreen from "./TabScreen";
import { StackParamList } from "./type";
import PetsListScreen from "../screens/PetsListScreen";
import PetsCategoryScreen from "../screens/PetsCategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import PetDetailScreen from "../screens/PetDetailScreen";
import AdoptionServiceScreen from "../screens/AdoptionServiceScreen";
import SellServiceScreen from "../screens/SellServiceScreen";
import EventServiceScreen from "../screens/EventServiceScreen";
import AdoptionDetailScreen from "../screens/AdoptionDetailScreen";
import SellDetailScreen from "../screens/SellDetailScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import LoginScreen from "../screens/LoginScreen";
import MainScreen from "../screens/MainScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ChatUserScreen from "../screens/ChatUserScreen";

const Stack = createStackNavigator<StackParamList>();

export default function StackScreen() {
	return (
		<Stack.Navigator initialRouteName="/main">
			<Stack.Screen
				name="/main"
				component={MainScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="/login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="/register"
				component={RegisterScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="/home"
				component={TabScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="/category"
				options={{
					headerShown: false,
				}}
				component={PetsListScreen}
			/>
			<Stack.Screen
				name="/adoption/detail"
				options={{
					headerShown: false,
				}}
				component={AdoptionDetailScreen}
			/>
			<Stack.Screen
				name="/event/detail"
				options={{
					headerShown: false,
				}}
				component={EventDetailScreen}
			/>
			<Stack.Screen
				name="/sell/detail"
				options={{
					headerShown: false,
				}}
				component={SellDetailScreen}
			/>
			<Stack.Screen
				name="/pets"
				options={{
					headerShown: false,
				}}
				component={PetsCategoryScreen}
			/>
			<Stack.Screen
				name="/pets/detail"
				options={{
					headerShown: false,
				}}
				component={PetDetailScreen}
			/>
			<Stack.Screen
				name="/search"
				options={{
					headerShown: false,
				}}
				component={SearchScreen}
			/>
			<Stack.Screen
				name="/service/adoption"
				options={{
					headerShown: false,
				}}
				component={AdoptionServiceScreen}
			/>
			<Stack.Screen
				name="/service/sell"
				options={{
					headerShown: false,
				}}
				component={SellServiceScreen}
			/>
			<Stack.Screen
				name="/service/event"
				options={{
					headerShown: false,
				}}
				component={EventServiceScreen}
			/>
			<Stack.Screen
				name="/chat/user"
				options={{
					headerShown: false,
				}}
				component={ChatUserScreen}
			/>
		</Stack.Navigator>
	);
}
