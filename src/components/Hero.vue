<template>
  <div
    class="flex flex-col mt-6 xs:mt-8 sm:mt-10 justify-between md:flex-row gap-6 md:items-end lg:mt-16"
  >
    <div class="flex flex-col gap-2">
      <p class="text-base text-app-gray-50 font-normal">Fala futuro Ubuntu,</p>

      <h1 class="text-2xl font-bold">
        Produtividade é o nome do jogo!<br />
        <span class="text-app-green-500">#</span>Partiu
      </h1>
    </div>

    <div
      class="flex justify-center items-center gap-6 sm:gap-8 lg:gap-10 flex-wrap xs:flex-nowrap"
    >
      <TodoCompletedFilterButton label="Todas" state="all" />
      <TodoCompletedFilterButton label="Abertas" state="open" />
      <TodoCompletedFilterButton label="Concluídas" state="completed" />
    </div>
  </div>
</template>
