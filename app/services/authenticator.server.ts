import { Authenticator } from "remix-auth";
import { sessionStorage } from "./session.server";
import { googleStrategy } from "./google-strategy.server";

type Session = {
  userId: string;
  email: string;
  username: string;
  profileImageUrl: string;
  accessToken: string;
  refreshToken: string | undefined;
};

export const authenticator = new Authenticator<Session>(sessionStorage);

authenticator.use(googleStrategy, "google");
