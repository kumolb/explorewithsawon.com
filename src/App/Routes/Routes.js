import { createBrowserRouter } from "react-router-dom";
import Home from "../Containers/Home/Home";
import Single from "../Containers/Single/Single";
import ListAll from "../Containers/ListAll/ListAll";
import App from "../../App";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: '/users',
            element: <ListAll />,
          },
          {
            path: '/users/:id',
            element: (
            //   <ProtectedRoute>
                <Single />
            //   </ProtectedRoute>
            ),
          }
        //   {
        //     path: '/edit-book',
        //     element: (
        //       <ProtectedRoute>
        //         <EditBook />
        //       </ProtectedRoute>
        //     ),
        //   },
        //   {
        //     path: '/wishlist',
        //     element: (
        //       <ProtectedRoute>
        //         <Wishlist />
        //       </ProtectedRoute>
        //     ),
        //   },
        //   {
        //     path: '/readinglist',
        //     element: (
        //       <ProtectedRoute>
        //         <ReadingList />
        //       </ProtectedRoute>
        //     ),
        //   },
        ],
      },

    //   {
    //     path: '/signup',
    //     element: <Signup />,
    //   },
    //   {
    //     path: '/signin',
    //     element: <Signin />,
    //   },
]);

export default Routes;