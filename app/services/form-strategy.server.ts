import { FormStrategy } from "remix-auth-form";
import type { User } from "./auth.server";

const login = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
): Promise<User> => {
  // could fetch from a database here
  if (email === "test@test.com" && password === "test123")
    return {
      email,
      username: "testuser123",
    };
  throw new Error("Username and/or password not found.");
};

export const formStrategy = new FormStrategy(async ({ form }) => {
  let email = form.get("email");
  let password = form.get("password");
  let user = await login(email, password);
  // the type of this user must match the type you pass to the Authenticator
  // the strategy will automatically inherit the type if you instantiate
  // directly inside the `use` method
  return user;
});
