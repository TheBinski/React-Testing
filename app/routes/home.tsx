import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Tab Title" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
   <div className="Home-Content">
    <h1 className="home-content-text">This is where the Home page content goes!</h1>
   </div>
  );
}
