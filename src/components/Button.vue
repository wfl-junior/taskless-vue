<template>
  <button
    class="rounded-lg flex items-center justify-center sm:py-4 sm:px-8 bg-app-green-500 hover:enabled:bg-app-green-300 transition-all hover:enabled:shadow-button-hover font-bold text-sm text-app-gray-900 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-app-green-500 focus-visible:ring-offset-4 focus-visible:ring-offset-app-gray-900 disabled:cursor-not-allowed disabled:bg-app-gray-400 disabled:text-white py-2.5 px-5"
  >
    <slot />
  </button>
</template>
