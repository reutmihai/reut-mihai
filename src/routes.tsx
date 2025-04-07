import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { Homepage } from './pages/Homepage';
import ProjectsPage from './pages/ProjectsPage';

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
      ],
    },
  ],
  {
    basename: '/reut-mihai', 
  }
);

export default router;
