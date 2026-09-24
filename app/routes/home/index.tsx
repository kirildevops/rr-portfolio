import type { Route } from "./+types/index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Welcome" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <section>
    <h1>hello</h1>
  </section>;
}
