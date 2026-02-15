import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/HomeLayout.tsx", [index("routes/home/index.tsx")]),
  layout("./routes/layouts/MainLayout.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    route("projects", "./routes/projects/index.tsx"),
    route(
      "projects/:id",
      "./routes/projects/project-details/ProjectDetailsPage.tsx",
    ),
    route("blog", "./routes/blog/index.tsx"),
    route("blog/:slug", "./routes/blog/blog-details/BlogDetails.tsx"),
    route("*", "./routes/errors/not-found/NotFound.tsx"),
  ]),
] satisfies RouteConfig;
