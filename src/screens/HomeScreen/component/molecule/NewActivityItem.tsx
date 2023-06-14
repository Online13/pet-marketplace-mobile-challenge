import {
	ActivityData,
	AdoptionActivityData,
	EventActivityData,
	ProductActivityData,
} from "../../../../type";
import AdoptionOverviewItem from "./AdoptionOverviewItem";
import EventOverviewItem from "./EventOverviewItem";
import ProductOverviewItem from "./ProductOverviewItem";

type NewActivityItemProps = ActivityData;

export default function NewActivityItem(activity: NewActivityItemProps) {
	switch (activity.type) {
		case "adoption":
			return (
				<AdoptionOverviewItem {...(activity as AdoptionActivityData)} />
			);
		case "product":
			return <ProductOverviewItem {...(activity as ProductActivityData)} />;
		default:
			return <EventOverviewItem {...(activity as EventActivityData)} />;
	}
}
