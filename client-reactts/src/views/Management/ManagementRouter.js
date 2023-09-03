import SidebarLayout from 'src/layouts/SidebarLayout/SidebarLayoutIndex';
import CountryRouter from "./Country/CountryRouter";
import TransactionsRouter from 'src/content/applications/Transactions/TransactionRouter';
import UserRouter from 'src/content/applications/Users/UsersRouter';

const ManagementRouter = [
    {
        path: "management",
        element: <SidebarLayout />,
        children: [
            ...TransactionsRouter,
            ...CountryRouter,
            ...UserRouter
        ]
    },
];

export default ManagementRouter;