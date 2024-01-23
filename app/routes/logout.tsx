import { ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/authenticator.server";

export async function action({ request }: ActionFunctionArgs) {
  return authenticator.logout(request, { redirectTo: "/" });
}
