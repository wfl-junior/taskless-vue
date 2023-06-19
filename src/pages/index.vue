<script setup lang="ts">
  const search = ref("");

  const state = useTodosCompletedFilterState();
  const computedTodos = useComputedTodos();

  function removeAccents(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const todos = computed(() => {
    const _todos = computedTodos[state.value].value;

    if (!search) {
      return _todos;
    }

    return _todos.filter(todo => {
      return removeAccents(todo.title.toLowerCase()).includes(
        removeAccents(search.value.toLowerCase()),
      );
    });
  });
</script>

<template>
  <Hero />

  <div class="mt-12 flex items-center gap-8 justify-between">
    <CreateTodoForm />

    <Input
      type="text"
      v-model="search"
      placeholder="Pesquisar"
      class="flex-1 max-w-[274px]"
    />
  </div>

  <div class="flex-1 flex flex-col mt-8">
    <EmptyTodos v-if="todos.length === 0" />
    <TodoList v-else :todos="todos" />
  </div>
</template>
