import { FormStrategy } from "remix-auth-form";

export const formStrategy = new FormStrategy(async ({ form }) => {
  let email = form.get("email");
  let password = form.get("password");

  if (email === "test@test.com" && password === "test123")
    return {
      email,
      username: "testuser123",
    };
  throw new Error("Username and/or password not found.");
});
