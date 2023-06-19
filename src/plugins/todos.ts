import { USER_ID_COOKIE_NAME } from "~/server/utils/constants";

export default defineNuxtPlugin(async () => {
  if (!process.server) return;

  const todos = useTodos();
  const userId = useCookie(USER_ID_COOKIE_NAME).value;

  const data = await $fetch("/api/todos", {
    headers: {
      Cookie: userId ? `${USER_ID_COOKIE_NAME}=${userId}` : "",
    },
  });

  todos.value = data.todos;
});
