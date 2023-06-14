import { PropsWithChildren, createContext, useContext } from "react";
import { Service } from "./service";

const service = new Service();
const HttpServiceContext = createContext<Service>(service);

export function useHttpService() {
	return useContext(HttpServiceContext);
}

export default function HttpServiceProvider({ children }: PropsWithChildren) {
	return (
		<HttpServiceContext.Provider value={service}>
			{children}
		</HttpServiceContext.Provider>
	);
}
