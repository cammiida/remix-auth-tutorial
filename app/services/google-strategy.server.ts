import { GoogleStrategy } from "remix-auth-google";
import { env } from "~/variables.server";

export const googleStrategy = new GoogleStrategy(
  {
    clientID: env.GOOGLE_CLIENT_ID,
    clientSecret: env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["email", "profile"],
  },
  async ({ accessToken, refreshToken, profile }) => {
    return {
      accessToken,
      refreshToken,
      userId: profile.id,
      email: profile.emails?.[0].value ?? "",
      username: profile.displayName ?? "",
      profileImageUrl: profile.photos?.[0].value ?? "",
    };
  }
);
