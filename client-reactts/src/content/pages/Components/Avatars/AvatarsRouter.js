import { Loader } from "src/common/CommonFunctions";
import { lazy } from 'react';

export const AvatarsPage = Loader(
    lazy(() => import('src/content/pages/Components/Avatars/AvatarsIndex'))
);

const AvatarsRouter = [
    {
        path: "pages/Avatars",
        element: <AvatarsPage/>,
    },
];

export default AvatarsRouter;