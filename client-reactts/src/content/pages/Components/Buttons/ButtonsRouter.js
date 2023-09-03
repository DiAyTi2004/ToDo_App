import { Loader } from "src/common/CommonFunctions";
import { lazy } from 'react';

export const ButtonsPage = Loader(
    lazy(() => import('src/content/pages/Components/Buttons/ButtonsIndex'))
);

const ButtonsRouter = [
    {
        path: "Buttons",
        element: <ButtonsPage/>,
    },
];

export default ButtonsRouter;