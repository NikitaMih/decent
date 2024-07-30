import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountiesPage, CountryPage } from 'src/pages';

const Navigation = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <CountiesPage />,
    },
    {
      path: '/:country',
      element: <CountryPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
