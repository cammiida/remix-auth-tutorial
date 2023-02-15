import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export async function action({ request }: ActionArgs) {
  return await authenticator.authenticate("user-pass", request, {
    successRedirect: "/dashboard",
  });
}

export async function loader({ request }: LoaderArgs) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/dashboard",
  });
}

const Login = () => {
  return (
    <>
      <Form method="post">
        <input type="email" name="email" required />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          required
        />
        <button>Sign in with username and password</button>
      </Form>
      <Form action="/auth/google" method="post">
        <button>Login with Google</button>
      </Form>
    </>
  );
};

export default Login;
