import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/services/authenticator.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix Auth Tutorial" },
    { name: "description", content: "Learn Remix and OAuth 2.0!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await authenticator.isAuthenticated(request);

  return json({ user });
}

export default function Index() {
  const { user } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Remix Auth Tutorial 👋</h1>
      {!user && (
        <Form method="post" action="/auth/google">
          <button type="submit">Login with Google</button>
        </Form>
      )}
      <Authenticated />
    </div>
  );
}

function Authenticated() {
  const { user } = useLoaderData<typeof loader>();

  if (!user) {
    return <></>;
  }

  return (
    <>
      <Form method="post" action="/logout">
        <button type="submit">Logout</button>
      </Form>
      <p>Hello, {user.username}! 👋</p>
      <img src={user.profileImageUrl} alt={user.username} />
    </>
  );
}
