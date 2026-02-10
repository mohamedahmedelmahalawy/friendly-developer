import { useEffect } from "react";
import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero
        name="Mohamed"
        text="I build Friendly Web experiences and help others with their businesses"
      />
    </>
  );
}
