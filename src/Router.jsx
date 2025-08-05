// router.js
import { createBrowserRouter } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Page/Home/Home';
import Blog from './Page/Blog/Blog';
import AddBlog from './Page/Add-blog/AddBlog';
import Contact from './Page/Contact/Contact';
import BlogDetails from './Page/Blog/BlogDetails';
import SignUp from './Page/SignUp/SignUp';
import SignIn from './Page/Sign-in/SignIn';

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
      {
        path: '/sign-up',
        Component: SignUp,
      },
      {
        path: '/sign-in',
        Component: SignIn,
      },
    ],
  },
]);

export default router;
