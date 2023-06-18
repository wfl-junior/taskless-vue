export type TodoCompletedFilterState = "all" | "open" | "completed";

export function useTodosCompletedFilterState() {
  return useState<TodoCompletedFilterState>(
    "todos-completed-filter-state",
    () => "all",
  );
}
