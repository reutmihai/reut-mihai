import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Homepage } from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';
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
          path: 'projects',
          element: <ProjectsPage />,
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
