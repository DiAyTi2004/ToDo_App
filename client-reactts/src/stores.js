import { createContext, useContext } from "react";
import AuthStore from "./views/Auth/AuthStore";
import CountryStore from './views/Management/Country/CountryStore';
import EthnicsStore from "./views/Management/Ethnics/EthnicsStore";

export const store = {
    authStore: new AuthStore(),
    //management store
    countryStore: new CountryStore(),
    ethnicsStore: new EthnicsStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
