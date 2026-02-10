import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
function AboutPage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-white mb-2">Hey, I'm Brad</h1>
    </>
  );
}

export default AboutPage;
