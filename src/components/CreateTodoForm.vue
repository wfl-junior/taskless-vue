<script setup lang="ts">
  const title = ref("");
  const todos = useTodos();

  function handleAddTodo(event: Event) {
    event.preventDefault();

    todos.value.push({
      title: title.value,
      isCompleted: false,
      id: Date.now().toString(),
    });

    title.value = "";
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

    <Button type="submit">Criar nova tarefa</Button>
  </form>
</template>
