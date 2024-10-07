import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/Errorpage";
import Rootlayout from "./layout/Rootlayout";
import Home from "./pages/home";
import MovieCategory from "./pages/MovieCategory";
import Search from "./pages/Search";
import Login from "./pages/login/Login";
import Signup from "./pages/login/Signup";
import Nowplaying from "./pages/category/Nowplaying";
import Popular from "./pages/category/Popular";
import Toprated from "./pages/category/Toprated";
import Upcoming from "./pages/category/Upcoming";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "moviecategory",
        children: [
          {
            index: true,
            element: <MovieCategory />,
          },
          {
            path: "nowplaying",
            element: <Nowplaying />,
          },
          {
            path: "popular",
            element: <Popular />,
          },
          {
            path: "toprated",
            element: <Toprated />,
          },
          {
            path: "upcoming",
            element: <Upcoming />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
