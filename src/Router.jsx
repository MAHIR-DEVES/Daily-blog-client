// router.js
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Page/Home/Home';
import Blog from './Page/Blog/Blog';
import AddBlog from './Page/Add-blog/AddBlog';
import Contact from './Page/Contact/Contact';
import BlogDetails from './Page/Blog/BlogDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/blog',
        Component: Blog,
      },
      {
        path: '/blog-details/:id',
        Component: BlogDetails,
      },
      {
        path: '/add-blog',
        Component: AddBlog,
      },
      {
        path: '/contact',
        Component: Contact,
      },
    ],
  },
]);

export default router;
