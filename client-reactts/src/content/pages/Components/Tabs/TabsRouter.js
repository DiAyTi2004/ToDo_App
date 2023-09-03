import { Loader } from 'src/common/CommonFunctions'
import { lazy } from 'react'

export const TabsPage = Loader(
    lazy(() => import('src/content/pages/Components/Tabs/TabsIndex'))
);

const TabsRouter = [
    {
        path: "Tabs",
        element: <TabsPage />
    }
]

export default TabsRouter