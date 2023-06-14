import { NavigatorScreenParams } from "@react-navigation/native";

export type HomeTabParamList = {
	"/home/overview": undefined;
	"/home/favorite": undefined;
	"/home/chat": undefined;
	"/home/user": undefined;
};

export type PetRoute = `/pets/${number}`;

export type StackParamList = {
	"/main": undefined;
	"/login": undefined;
	"/register": undefined;
	"/home": NavigatorScreenParams<HomeTabParamList>;
	"/category": { id: number };
	"/pets": undefined;
	"/pets/detail": { id: number };
	"/search": undefined;
	"/service/adoption": undefined;
	"/adoption/detail": { id: number };
	"/service/sell": undefined;
	"/sell/detail": { id: number };
	"/service/event": undefined;
	"/event/detail": { id: number };
	"/chat/user": { id: number };
};

export type PathStackParamList = keyof StackParamList;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends StackParamList { }
	}
}
