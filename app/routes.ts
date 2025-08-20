import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  ...prefix("services", [
    index("./routes/services.tsx"),
    route(":id", "./routes/service.tsx"),
  ]),
] satisfies RouteConfig;
