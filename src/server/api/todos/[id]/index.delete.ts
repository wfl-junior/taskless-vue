import { prisma } from "~/server/prisma";
import { errorHandler } from "~/server/utils/errorHandler";
import { getUserId } from "~/server/utils/getUserId";

export default defineEventHandler(async event => {
  try {
    const id = event.context.params!.id;
    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      setResponseStatus(event, 404);
      return {};
    }

    const userId = getUserId(event);

    if (todo.userId !== userId) {
      setResponseStatus(event, 403);
      return {};
    }

    await prisma.todo.delete({
      where: { id },
    });

    setResponseStatus(event, 204);
    return {};
  } catch (error) {
    return errorHandler(error, event);
  }
});
