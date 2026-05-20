import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Homepage } from './pages/Homepage';
import WebDevPage from './pages/WebDevPage';
import QaPage from './pages/QaPage';
import { AboutMePage } from './pages/AboutMePage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'web-dev-projects',
          element: <WebDevPage />,
        },
        {
          path: "qa-projects",
          element: <QaPage />,
        },
         {
          path: "about",
          element: <AboutMePage />,
        }
      ],
    },
  ],
  {
    basename: '/', 
  }
);

export default router;
