import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./pages/Errorpage";
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
import Info from "./pages/Info.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "moviecategory",
        children: [
          {
            index: true,
            element: <MovieCategory/>,
          },
          {
            path: "nowplaying",
            element: <Nowplaying/>,
          },
          {
            path: "popular",
            element: <Popular/>,
          },
          {
            path: "toprated",
            element: <Toprated/>,
          },
          {
            path: "upcoming",
            element: <Upcoming/>,
          },
        ],
      },
      {
        path: "movie/:id",
        element: <Info/>
      },
      {
        path: "search",
        element: <Search/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "signup",
        element: <Signup/>,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={BrowserRouter}/>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App;
