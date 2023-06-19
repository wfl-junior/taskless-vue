<script setup lang="ts">
  import { api } from "~/lib/axios";
  import { Todo } from "~/types/Todo";

  interface TodoListProps {
    todos: Todo[];
  }

  const { todos } = defineProps<TodoListProps>();
  const allTodos = useTodos();
  let abortController = new AbortController();

  function handleToggleTodo(id: Todo["id"]) {
    abortController.abort();
    abortController = new AbortController();

    const index = allTodos.value.findIndex(todo => todo.id === id);
    const todo = allTodos.value[index];
    todo.isCompleted = !todo.isCompleted;

    let url = `/todos/${id}/complete`;

    if (!todo.isCompleted) {
      url += "/undo";
    }

    api
      .patch(url, undefined, { signal: abortController.signal })
      .catch(console.error);
  }

  function handleDeleteTodo(id: Todo["id"]) {
    const index = allTodos.value.findIndex(todo => todo.id === id);
    allTodos.value.splice(index, 1);
    api.delete(`/todos/${id}`).catch(console.error);
  }
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="todo in todos"
      class="sm:px-6 px-4 py-2.5 sm:py-4 flex items-center gap-4 border border-app-gray-400 bg-app-gray-700 rounded-lg"
    >
      <button
        :id="todo.id"
        @click="handleToggleTodo(todo.id)"
        class="w-5 aspect-square rounded-full border border-app-green-400 transition-colors items-center justify-center flex text-app-gray-900"
        :class="{ 'bg-app-green-400': todo.isCompleted }"
      >
        <CheckIcon v-if="todo.isCompleted" :size="12" />
      </button>

      <label
        :for="todo.id"
        class="flex-1 cursor-pointer text-base font-normal transition-all"
        :class="{
          'text-app-gray-50': !todo.isCompleted,
          'text-app-gray-200 line-through': todo.isCompleted,
        }"
      >
        {{ todo.title }}
      </label>

      <button
        @click="handleDeleteTodo(todo.id)"
        class="text-app-gray-50 hover:text-app-red-500 transition-colors hover:bg-app-gray-400 rounded p-2"
      >
        <TrashIcon :size="24" />
      </button>
    </div>
  </div>
</template>
