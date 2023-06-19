import { prisma } from "~/server/prisma";
import { getUserId } from "~/server/utils/getUserId";

export default defineEventHandler(async event => {
  const userId = getUserId(event);

  if (!userId) {
    return {
      todos: [],
    };
  }

  const todos = await prisma.todo.findMany({
    where: { userId },
  });

  return {
    todos,
  };
});
