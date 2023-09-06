import { createContext, useContext } from "react";
import AuthStore from "./views/Auth/AuthStore";
import CountryStore from './views/Management/Country/CountryStore';

export const store = {
    authStore: new AuthStore(),
    //management store
    countryStore: new CountryStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
