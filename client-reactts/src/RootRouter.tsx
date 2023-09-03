import Status404 from "./content/pages/Status/Status404/Status404Index";
import CountryRouter, { CountryPage } from "./views/Management/Country/CountryRouter";
import ComponentsRouters from "./content/pages/Components/ComponentsRouter";


const routes = [
    {
        path: '/',
        element: <CountryPage />
    },
    ...CountryRouter,
    ...ComponentsRouters,
    {
        path: '*',
        element: <Status404 />
    },
];

export default routes;
