import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const loader = async ({ request }: LoaderArgs) => {
  const user = await authenticator.isAuthenticated(request);

  if (!user) {
    throw redirect("/login");
  }
  return json({ user });
};

const Dashboard = () => {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      {user.photo && (
        <img style={{ borderRadius: "50%" }} alt="profile" src={user.photo} />
      )}
      <h1>Welcome to your personal dashboard, {user.username}!</h1>
    </div>
  );
};

export default Dashboard;
