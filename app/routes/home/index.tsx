import { useEffect } from "react";
import type { Route } from "./+types/index";
import Hero from "~/components/hero/Hero";
import AboutPreview from "~/components/about-preview/AboutPreview";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <AboutPreview />
    </>
  );
}
