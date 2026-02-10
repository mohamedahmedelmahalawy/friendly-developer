import { useEffect } from "react";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  // const now = new Date().toISOString();
  // if (typeof window === "undefined") {
  //   console.log("Server Render At: ", now);
  // } else {
  //   console.log("Client Hydration At: ", now);
  // }
  useEffect(() => {
    console.log(window.scrollX);
  }, []);
  return <>My App</>;
}
