import { Todo } from "~/types/Todo";
import { TodoCompletedFilterState } from "./useTodosCompletedFilterState";

type UseComputedTodosData = Record<
  TodoCompletedFilterState,
  globalThis.Ref<Todo[]>
>;

export function useComputedTodos(): UseComputedTodosData {
  const todos = useTodos();
  const open = computed(() => todos.value.filter(todo => !todo.isCompleted));
  const completed = computed(() => {
    return todos.value.filter(todo => todo.isCompleted);
  });

  return {
    all: todos,
    open,
    completed,
  };
}
