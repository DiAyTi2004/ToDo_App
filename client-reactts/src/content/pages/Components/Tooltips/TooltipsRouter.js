import { Loader } from 'src/common/CommonFunctions'
import { lazy } from 'react'

export const TooltipsPage = Loader(
    lazy(() => import('src/content/pages/Components/Tooltips/TooltipsIndex'))
);

const TooltipsRouter = [
    {
        path: "pages/Tooltips",
        element: <tooltipsPage />
    }
]

export default TooltipsRouter