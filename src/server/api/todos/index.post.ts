import crypto from "node:crypto";
import { prisma } from "~/server/prisma";
import { USER_ID_COOKIE_NAME } from "~/server/utils/constants";
import { errorHandler } from "~/server/utils/errorHandler";
import { getUserId } from "~/server/utils/getUserId";
import { createTodoValidationSchema } from "~/server/validation/create-todo";

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event);
    const { title } = createTodoValidationSchema.parse(body);

    const userId = getUserId(event) || crypto.randomUUID();
    setCookie(event, USER_ID_COOKIE_NAME, userId);

    const newTodo = await prisma.todo.create({
      data: {
        title,
        userId,
        isCompleted: false,
      },
    });

    setResponseStatus(event, 201);

    return {
      todo: newTodo,
    };
  } catch (error) {
    return errorHandler(error, event);
  }
});
