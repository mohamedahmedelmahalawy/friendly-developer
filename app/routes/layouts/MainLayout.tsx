import { Outlet } from "react-router";
import type { Route } from "../about/+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev" },
    { name: "description", content: "custom website developement" },
  ];
}

function MainLayout() {
  return (
    <>
      <section className="max-w-6xl mx-auto my-8 px-6">
        <Outlet />
      </section>
    </>
  );
}

export default MainLayout;
