import { createContext, useContext } from "react";
import CountryStore from './views/Management/Country/CountryStore';

export const store = {
    //management store
    countryStore: new CountryStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
