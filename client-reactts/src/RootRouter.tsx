// <<<<<<< HEAD
import Status404 from "./content/pages/Status/Status404/Status404Index";
import CountryRouter, { CountryPage } from "./views/Management/Country/CountryRouter";
import ComponentsRouters from "./content/pages/Components/ComponentsRouter";

import ManagementRouter from 'src/views/Management/ManagementRouter';
import { Status404Page } from './content/pages/Status/Status404/Status404Router';
import BaseLayoutRouter from './layouts/BaseLayout/BaseLayoutRouter';
import DashboardsRouter from './content/dashboards/DashboardsRouter';

// =======
//layout

const routes = [
    {
        path: '/',
        element: <CountryPage />
    },
    ...CountryRouter,
    ...ComponentsRouters,
    ...BaseLayoutRouter,
    ...DashboardsRouter,
    ...ManagementRouter,
    // >>>>>>> 4602457c9b757c867308b00a655b90276ff7c833
    {
        path: '*',
        element: <Status404Page />
    },
];

export default routes;
