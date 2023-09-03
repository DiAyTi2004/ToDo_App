//layout
import ManagementRouter from 'src/views/Management/ManagementRouter';
import { Status404Page } from './content/pages/Status/Status404/Status404Router';
import BaseLayoutRouter from './layouts/BaseLayout/BaseLayoutRouter';
import DashboardsRouter from './content/dashboards/DashboardsRouter';

const routes = [
    ...BaseLayoutRouter,
    ...DashboardsRouter,
    ...ManagementRouter,
    {
        path: '*',
        element: <Status404Page />
    },
];

export default routes;
