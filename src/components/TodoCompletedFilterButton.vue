<script setup lang="ts">
  import { TodoCompletedFilterState } from "~/composables/useTodosCompletedFilterState";

  interface TodoCompletedFilterButtonProps {
    state: TodoCompletedFilterState;
    label: string;
  }

  const { state, label } = defineProps<TodoCompletedFilterButtonProps>();
  const activeState = useTodosCompletedFilterState();
  const todos = useComputedTodos()[state];
</script>

<template>
  <button
    @click="activeState = state"
    class="flex items-center gap-2 rounded focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-app-green-500 focus-visible:ring-offset-8 focus-visible:ring-offset-app-gray-900"
  >
    <span
      class="font-bold text-base"
      :class="{
        'text-app-gray-200': activeState !== state,
        'text-app-green-500': activeState === state,
      }"
    >
      {{ label }}
    </span>

    <span
      class="transition-colors text-sm font-normal py-1 px-2 rounded-full flex items-center justify-center leading-none"
      :class="{
        'bg-app-gray-700 text-app-gray-200': activeState !== state,
        'bg-app-green-500 text-app-gray-900': activeState === state,
      }"
    >
      {{ todos.length }}
    </span>
  </button>
</template>
