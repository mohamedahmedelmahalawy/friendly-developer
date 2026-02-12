import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Page" },
    { name: "description", content: "custom website developement" },
  ];
}

function contactPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Contact Me
      </h2>
    </>
  );
}

export default contactPage;
