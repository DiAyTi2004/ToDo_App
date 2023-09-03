import SidebarLayout from "src/layouts/SidebarLayout/SidebarLayoutIndex";
import AccordionRouter from "./content/pages/Components/Accordions/AccordionsRouter";
import AvatarsRouter from "./content/pages/Components/Avatars/AvatarsRouter";
import BadgesRouter from "./content/pages/Components/Badges/BadgesRouter";
import ButtonsRouter from "./content/pages/Components/Buttons/ButtonsRouter";
import CardsRouter from "./content/pages/Components/Cards/CardsRouter";
import FormsRouter from "./content/pages/Components/Forms/FormsRouter";
import ModalsRouter from "./content/pages/Components/Modals/ModalsRouter";
import TabsRouter from "./content/pages/Components/Tabs/TabsRouter";
import TooltipsRouter from "./content/pages/Components/Tooltips/TooltipsRouter";

const ComponentsRouters = [
    {
        path: "components",
        element: <SidebarLayout />,
        children: [
            ...AccordionRouter,
            ...AvatarsRouter,
            ...BadgesRouter,
            ...ButtonsRouter,
            ...CardsRouter,
            ...FormsRouter,
            ...ModalsRouter,
            ...TabsRouter,
            ...TooltipsRouter,
        ]
    },
];

export default ComponentsRouters;