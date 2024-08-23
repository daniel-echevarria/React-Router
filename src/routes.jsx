import App from "./App";
import SuperHero from "./SuperHero";

const routes = [
  { path: "/", element: <App /> },
  { path: "super-hero", element: <SuperHero /> },
  { path: "super-hero/:name", element: <SuperHero /> },
];

export default routes;
