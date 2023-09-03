import Status404 from "./content/pages/Status/Status404/Status404Index";
import CountryRouter, { CountryPage } from "./views/Management/Country/CountryRouter";

const routes = [
    {
        path: '/',
        element: <CountryPage />
    },
    ...CountryRouter,
    {
        path: '*',
        element: <Status404 />
    },
];

export default routes;
