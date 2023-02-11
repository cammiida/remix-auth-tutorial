import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { formStrategy } from "./form-strategy.server";

export type User = {
  username: string;
  email: string;
};

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export let authenticator = new Authenticator<User>(sessionStorage);

// Tell the Authenticator to use the form strategy
authenticator.use(
  formStrategy,
  // each strategy has a name and can be changed to use another one
  // same strategy multiple times, especially useful for the OAuth2 strategy.
  "user-pass"
);
