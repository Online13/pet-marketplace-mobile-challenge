import { ImageSourcePropType } from "react-native/types";

export type LoginDataType = {
	success: boolean;
	message?: string;
	token: string;
};

export type PetCategory =
	| "dog"
	| "cat"
	| "rabbit"
	| "hamster"
	| "fish"
	| "parakeet";

export type CategoryData = {
	id: number;
	title: string;
	route: PetCategory;
	image: ImageSourcePropType;
};

export type PetData = {
	id: number;
	idCategory: number;
	image: ImageSourcePropType;
	title: string;
	date: Date;
	idOwner: number;
};

export type MessageData = {
	id: number;
	owner: boolean;
	content: string;
	date: Date;
};

export type MarketplaceData = {
	id: number;
	name: string;
	location: string;
};

export type AdoptionActivityData = {
	id: number;
	type: "adoption";
	title: string;
	market: MarketplaceData;
	date: Date;
	image: ImageSourcePropType;
};

export type ProductActivityData = {
	id: number;
	type: "product";
	title: string;
	market: MarketplaceData;
	date: Date;
	price: number;
	unit: string;
	image: ImageSourcePropType;
};

export type EventActivityData = {
	id: number;
	date: Date;
	type: "event";
	title: string;
	location: string;
	description: string;
	organizator: string;
	image: ImageSourcePropType;
};

export type ActivityData =
	| AdoptionActivityData
	| ProductActivityData
	| EventActivityData;

export type PetFood = {
	id: number;
	name: string;
	image: ImageSourcePropType;
};
