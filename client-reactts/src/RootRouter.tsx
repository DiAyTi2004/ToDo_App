import CountryRouter, { CountryPage } from "./views/Management/Country/CountryRouter";
import ComponentsRouters from "src/content/pages/Components/ComponentsRouter";

import ManagementRouter from 'src/views/Management/ManagementRouter';
import { Status404Page } from './content/pages/Status/Status404/Status404Router';
import BaseLayoutRouter from './layouts/BaseLayout/BaseLayoutRouter';
import DashboardsRouter from './content/dashboards/DashboardsRouter';
import OverviewRouter, { Overview } from "./content/overview/OverviewRouter";


const routes = [
    {
        path: '',
        element: <Overview />
    },
    ...ComponentsRouters,
    ...BaseLayoutRouter,
    ...DashboardsRouter,
    ...ManagementRouter,
        {
        path: '*',
        element: <Status404Page />
    },
];

export default routes;
