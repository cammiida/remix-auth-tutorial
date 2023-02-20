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
  return await login(email, password);
});
