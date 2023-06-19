import { USER_ID_COOKIE_NAME } from "./constants";

export function getUserId(event: any): string | undefined {
  const cookies = parseCookies(event);
  return cookies[USER_ID_COOKIE_NAME];
}
