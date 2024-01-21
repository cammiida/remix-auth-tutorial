import { json, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";

export async function loader() {
  const user = null;

  if (!user) {
    throw redirect("/");
  }

  return json({ user });
}

export default function Dashboard() {
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Dashboard</h1>
    </div>
  );
}
