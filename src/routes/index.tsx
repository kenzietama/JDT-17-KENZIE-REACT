import { createBrowserRouter } from "react-router";
import ProtectedRoute from "./protectedRoutes";
import Login from "@/container/Login";
import Home from "@/container/Homepage";
import CVPage from "@/container/CV";
import Todo from "@/container/Todo";
import Movies from "@/container/Movies";
import MovieDetail from "@/container/MovieDetail";
import NowPlayingPage from "@/container/NowPlaying";
import Popular from "@/container/Popular";
import TopRated from "@/container/TopRated";
import Upcoming from "@/container/Upcoming";
import Layout from "@/components/layout";

export const routes = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            element: <Home />,
            index: true,
          },
          {
            path: "/cv-page",
            element: <CVPage />,
          },
          {
            path: "/todo",
            element: <Todo />,
          },
          {
            path: "/movie-page",
            element: <Movies />,
            children: [
              {
                path: "now-playing",
                element: <NowPlayingPage />,
              },
              {
                path: "popular",
                element: <Popular />,
              },
              {
                path: "top-rated",
                element: <TopRated />,
              },
              {
                path: "upcoming",
                element: <Upcoming />,
              },
            ],
          },
          {
            path: "/movie-detail",
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]);
