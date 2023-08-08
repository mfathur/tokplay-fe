import { routerType } from "types/router.types";
import HomePage from "./home";
import LoginPage from "./login";
import NotFoundPage from "./notfound";
import RegisterPage from "./register";
import VideoDetailPage from "./videoDetail";

const pagesData: routerType[] = [
  {
    title: "home",
    path: "/",
    element: <HomePage />,
  },
  {
    title: "video-detail",
    path: "/videos/:id",
    element: <VideoDetailPage />,
  },
  {
    title: "login",
    path: "/auth/login",
    element: <LoginPage />,
  },
  { title: "register", path: "/auth/register", element: <RegisterPage /> },
  {
    title: "notfound",
    path: "*",
    element: <NotFoundPage />,
  },
];

export default pagesData;
