import pagesData, { routerType } from "./pagesData";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const pageRoutes = pagesData.map(({ title, path, element }: routerType) => (
    <Route key={title} path={path} element={element} />
  ));

  return <Routes>{pageRoutes}</Routes>;
};

export default AppRouter;
