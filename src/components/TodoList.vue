<script setup lang="ts">
  import { Todo } from "~/types/Todo";

  interface TodoListProps {
    todos: Todo[];
  }

  const { todos } = defineProps<TodoListProps>();
  const allTodos = useTodos();

  function handleToggleTodo(index: number) {
    const todo = allTodos.value[index];
    todo.isCompleted = !todo.isCompleted;
  }

  function handleDeleteTodo(index: number) {
    allTodos.value.splice(index, 1);
  }
</script>

<template>
  <div class="flex flex-col gap-4">
    <div
      v-for="(todo, index) in todos"
      class="p-6 flex items-center gap-4 border border-app-gray-400 bg-app-gray-700 rounded-lg"
    >
      <button
        :id="todo.id"
        @click="handleToggleTodo(index)"
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
        @click="handleDeleteTodo(index)"
        class="text-app-gray-50 hover:text-app-red-500 transition-colors hover:bg-app-gray-400 rounded p-2"
      >
        <TrashIcon :size="24" />
      </button>
    </div>
  </div>
</template>
