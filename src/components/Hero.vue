<template>
  <div class="flex justify-between items-end mt-16">
    <div class="flex flex-col gap-2">
      <p class="text-base text-white font-normal">Fala futuro Ubuntu,</p>

      <h1 class="text-2xl font-bold">
        Produtividade é o nome do jogo!<br />
        <span class="text-app-green-500">#</span>Partiu
      </h1>
    </div>

    <div class="flex items-center gap-10">
      <TodoCompletedFilterButton label="Todas" state="all" />
      <TodoCompletedFilterButton label="Abertas" state="open" />
      <TodoCompletedFilterButton label="Concluídas" state="completed" />
    </div>
  </div>
</template>
