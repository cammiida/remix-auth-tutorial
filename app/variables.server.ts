import { z } from "zod";

const nonEmptyString = z.string().nonempty();

const zodEnv = z.object({
  GOOGLE_CLIENT_ID: nonEmptyString,
  GOOGLE_CLIENT_SECRET: nonEmptyString,
});

export const env = zodEnv.parse(process.env);
