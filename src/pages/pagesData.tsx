import HomePage from "./home";
import LoginPage from "./login";
import NotFoundPage from "./notfound";
import RegisterPage from "./register";
import VideoDetailPage from "./videoDetail";

export interface routerType {
  title: string;
  path: string;
  element: JSX.Element;
}

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
