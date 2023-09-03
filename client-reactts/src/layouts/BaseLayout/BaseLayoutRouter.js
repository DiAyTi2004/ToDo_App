import { Loader } from "src/common/CommonFunctions";
import { lazy } from 'react';
import OverviewRouter from "src/content/overview/OverviewRouter";
import StatusRouter from "src/content/pages/Status/StatusRouter";
import BaseLayout from 'src/layouts/BaseLayout/BaseLayoutIndex';

const BaseLayoutRouter = [
    {
        path: "",
        element: <BaseLayout/>,
        children: [
            ...OverviewRouter,
            ...StatusRouter,
        ]
    },
];

export default BaseLayoutRouter;