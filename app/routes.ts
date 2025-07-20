import { type RouteConfig, index, route } from "@react-router/dev/routes";

const routes =  [
  index("./src/components/home.tsx"),
  route("/api/users", "src/services/api.users.ts"),
] satisfies RouteConfig;


export default routes; 