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

  <div
    class="md:mt-12 mt-6 xs:mt-8 flex items-center gap-8 justify-between flex-col md:flex-row"
  >
    <CreateTodoForm />

    <div class="relative md:max-w-[274px] w-full flex-1">
      <Input
        :size="10"
        type="text"
        v-model="search"
        placeholder="Pesquisar"
        class="w-full pr-9 sm:pr-14"
      />

      <MagnifyingGlassIcon
        :size="16"
        class="text-app-gray-200 absolute right-3 sm:right-6 top-1/2 -translate-y-1/2"
      />
    </div>
  </div>

  <div class="flex-1 flex flex-col mt-8">
    <EmptyTodos v-if="todos.length === 0" />
    <TodoList v-else :todos="todos" />
  </div>
</template>
