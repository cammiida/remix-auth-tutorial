import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { formStrategy } from "./form-strategy.server";
import { googleStrategy } from "./google-strategy.server";

export type User = {
  username: string;
  email: string;
};

export let authenticator = new Authenticator<User>(sessionStorage);

authenticator.use(formStrategy, "user-pass");
authenticator.use(googleStrategy);
