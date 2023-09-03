import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout/SidebarLayoutIndex';
import BaseLayout from 'src/layouts/BaseLayout/BaseLayoutIndex';

import SuspenseLoader from 'src/components/SuspenseLoader/SuspenseLoaderIndex';
import CountryRouter from './views/Management/Country/CountryRouter';

export const Loader = (Component: any) => (props: any) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} /> 
  </Suspense>
);

// Pages

const Overview = Loader(lazy(() => import('src/content/overview/OverviewIndex')));

// Dashboards

const Crypto = Loader(lazy(() => import('src/content/dashboards/Crypto/CryptoIndex')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger/MessengerIndex'))
);

const Transactions = Loader(
  lazy(() => import('src/content/applications/Transactions/TransactionsIndex'))
);
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile/ProfileIndex'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings/SettingsIndex'))
);

// Components

const Buttons = Loader(
  lazy(() => import('src/content/pages/Components/Buttons/ButtonsIndex'))
);
const Modals = Loader(
  lazy(() => import('src/content/pages/Components/Modals/ModalsIndex'))
);
const Accordions = Loader(
  lazy(() => import('src/content/pages/Components/Accordions/AccordionsIndex'))
);
const Tabs = Loader(lazy(() => import('src/content/pages/Components/Tabs/TabsIndex')));
const Badges = Loader(
  lazy(() => import('src/content/pages/Components/Badges/BadgesIndex'))
);
const Tooltips = Loader(
  lazy(() => import('src/content/pages/Components/Tooltips/TooltipsIndex'))
);
const Avatars = Loader(
  lazy(() => import('src/content/pages/Components/Avatars/AvatarsIndex'))
);
const Cards = Loader(lazy(() => import('src/content/pages/Components/Cards/CardsIndex')));
const Forms = Loader(lazy(() => import('src/content/pages/Components/Forms/FormsIndex')));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404/Status404Index'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500/Status500Index'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon/ComingSoonIndex'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance/MaintenanceIndex'))
);

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'overview',
        element: <Navigate to="/" replace />
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          },
          {
            path: 'maintenance',
            element: <StatusMaintenance />
          },
          {
            path: 'coming-soon',
            element: <StatusComingSoon />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="crypto" replace />
      },
      {
        path: 'crypto',
        element: <Crypto />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="transactions" replace />
      },
      ...CountryRouter,
      {
        path: 'transactions',
        element: <Transactions />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: <UserProfile />
          },
          {
            path: 'settings',
            element: <UserSettings />
          }
        ]
      }
    ]
  },
  {
    path: '/components',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="buttons" replace />
      },
      {
        path: 'buttons',
        element: <Buttons />
      },
      {
        path: 'modals',
        element: <Modals />
      },
      {
        path: 'accordions',
        element: <Accordions />
      },
      {
        path: 'tabs',
        element: <Tabs />
      },
      {
        path: 'badges',
        element: <Badges />
      },
      {
        path: 'tooltips',
        element: <Tooltips />
      },
      {
        path: 'avatars',
        element: <Avatars />
      },
      {
        path: 'cards',
        element: <Cards />
      },
      {
        path: 'forms',
        element: <Forms />
      }
    ]
  },

];

export default routes;
