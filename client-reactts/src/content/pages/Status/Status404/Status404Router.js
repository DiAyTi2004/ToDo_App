import { Loader } from "src/common/CommonFunctions";
import { lazy } from 'react';
import { Navigate } from "react-router";

export const Status404Page = Loader(lazy(() => import('./Status404Index')));

const Status404Router = [
    {
        path: "",
        element: <Navigate to="" replace />
    },
    {
        path: '404',
        element: <Status404Page />,
      },
];

export default Status404Router;