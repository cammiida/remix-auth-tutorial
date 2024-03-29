import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Auth Tutorial" },
    { name: "description", content: "Learn Remix and OAuth 2.0!" },
  ];
};

export default function Index() {
  const user = null;

  return (
    <div>
      <h1>Remix Auth Tutorial 👋</h1>
      {user ? (
        <button type="submit">Logout</button>
      ) : (
        <button type="submit">Login with Google</button>
      )}
    </div>
  );
}
