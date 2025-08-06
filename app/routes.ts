import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("page2", "routes/page2.tsx"),
    route("page3", "routes/page3.tsx"),
] satisfies RouteConfig;
