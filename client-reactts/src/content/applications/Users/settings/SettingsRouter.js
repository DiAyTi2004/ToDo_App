import { Loader } from 'src/router';
import { lazy } from 'react';

const SettingsPage = Loader(
    lazy(() => import('./SettingsIndex'))
);

const SettingsRouter = [
    {
        path: "settings",
        element: <SettingsPage />
    },
];

export default SettingsRouter;