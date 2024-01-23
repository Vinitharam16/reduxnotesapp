import Archive from "./Pages/Archive";
import Bin from "./Pages/Bin";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Notes from "./Pages/Notes";
import Search from "./Pages/Search";
import SignUp from "./Pages/SignUp";
import Tasks from "./Pages/Tasks";

export const AutheticationRoutes = [
  {
    id: 1,
    name: "Login",
    component: Login,
    path: "/",
  },
  {
    id: 2,
    name: "Signup",
    component: SignUp,
    path: "/signup",
  },
];

export const AuthenticatedRoutes = {
  id: 1,
  name: "Application",
  path: "/app",
  children: [
    {
      id: 11,
      name: "Home",
      className: "bx bx-home",
      component: Home,
      path: "/app/home",
    },
    {
      id: 12,
      name: "Search",
      className: "bx bx-search",
      component: Search,
      path: "/app/search",
    },
    {
      id: 13,
      name: "Notes",
      className: "bx bx-file",
      component: Notes,
      path: "/app/notes",
    },
    {
      id: 14,
      name: "Tasks",
      className: "bx bx-list-check",
      component:Tasks,
      path: "/app/tasks",
    },
    {
      id: 15,
      name: "Archive",
      className: "bx bx-archive-in",
      component:Archive,
      path: "/app/archive",
    },
    {
      id: 16,
      name: "Bin",
      className: "bx bx-trash",
      component: Bin,
      path: "/app/bin",
    },
  ],
};