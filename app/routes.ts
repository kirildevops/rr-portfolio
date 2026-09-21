import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home/index.tsx"), route('about', './routes/about/index.tsx')] satisfies RouteConfig;
