import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function contactPage() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
    </section>
  );
}

export default contactPage;
