import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("page2", "routes/page2.tsx"),
] satisfies RouteConfig;
