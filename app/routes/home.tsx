import type { Route } from "./+types/home";
import { Header } from "../header/header";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Tab Title" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="Page">
      <Header />
    </div>
  );
}
