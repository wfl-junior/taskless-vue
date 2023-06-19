<script setup lang="ts">
  import { api } from "~/lib/axios";
  import { Todo } from "~/types/Todo";

  const title = ref("");
  const todos = useTodos();
  const isLoading = ref(false);

  async function handleAddTodo(event: Event) {
    event.preventDefault();
    isLoading.value = true;

    try {
      const { data } = await api.post<{ todo: Todo }>("/todos", {
        title: title.value,
      });

      todos.value.push(data.todo);
      title.value = "";
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <form @submit="handleAddTodo" class="flex items-center gap-8 flex-1">
    <Input
      required
      type="text"
      v-model="title"
      class="flex-1 max-w-[592px]"
      placeholder="Nome da tarefa"
    />

    <Button type="submit" :disabled="isLoading">Criar nova tarefa</Button>
  </form>
</template>
