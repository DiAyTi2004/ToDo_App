import { Loader } from 'src/common/CommonFunctions'
import { lazy } from 'react'

export const AccordionsPage = Loader(
    lazy(() => import('src/content/pages/Components/Accordions/AccordionsIndex'))
);
export const AvatarsPage = Loader(
    lazy(() => import('src/content/pages/Components/Avatars/AvatarsIndex'))
);
export const BadgesPage = Loader(
    lazy(() => import('src/content/pages/Components/Badges/BadgesIndex'))
);
export const ButtonsPage = Loader(
    lazy(() => import('src/content/pages/Components/Buttons/ButtonsIndex'))
);
export const CardsPage = Loader(
    lazy(() => import('src/content/pages/Components/Cards/CardsIndex'))
);
export const FormsPage = Loader(
    lazy(() => import('src/content/pages/Components/Forms/FormsIndex'))
);
export const ModalsPage = Loader(
    lazy(() => import('src/content/pages/Components/Modals/ModalsIndex'))
);
export const TabsPage = Loader(
    lazy(() => import('src/content/pages/Components/Tabs/TabsIndex'))
);
export const TooltipsPage = Loader(
    lazy(() => import('src/content/pages/Components/Tooltips/TooltipsIndex'))
);
const ComponentsRouters = [
    {
        path: "pages/accordions",
        element: <AccordionsPage />
    },
    {
        path: "pages/Avatars",
        element: <AvatarsPage/>,
    },
    {
        path: "pages/Badges",
        element: <BadgesPage/>,
    },
    {
        path: "pages/Buttons",
        element: <ButtonsPage/>,
    },
    {
        path: "pages/cards",
        element: <CardsPage />
    },
    {
        path: "pages/Forms",
        element: <FormsPage />
    },
    {
        path: "pages/Modals",
        element: <ModalsPage />
    },
    {
        path: "pages/Tabs",
        element: <TabsPage />
    },
    {
        path: "pages/Tooltips",
        element: <tooltipsPage />
    },
];

export default ComponentsRouters