import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "React Router Portfolio" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <>
    <h1>hello</h1>
  </>;
}
