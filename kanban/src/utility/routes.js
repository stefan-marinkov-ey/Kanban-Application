import Login from "../pages/Login/Login";
import Board from "../pages/Board/Board";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import {
  boardRoute,
  loginRoute,
  notFoundRoute,
} from "./constantsWithRoutesAndMethods";

const routes = [
  {
    path: loginRoute,
    component: Login,
    isPrivate: false,
  },
  {
    path: boardRoute,
    component: Board,
    isPrivate: true,
  },
  {
    path: notFoundRoute,
    component: PageNotFound,
    isPrivate: true,
  },
];

export default routes;
