import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import { iRoute } from "../interfaces";

const Routes: Array<iRoute> = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: '*',
    component: NotFound
  }
];

export default Routes;