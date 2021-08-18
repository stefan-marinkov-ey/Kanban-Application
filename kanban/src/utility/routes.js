import Login from "../pages/Login/Login";
import Board from "../pages/Board/Board";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

const routes = [
  {
    path: "/login",
    component: Login,
    isPrivate: false,
  },
  {
    path: "/kanban",
    component: Board,
    isPrivate: true,
  },
  {
    path: "/*",
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
