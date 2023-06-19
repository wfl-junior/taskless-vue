<script setup lang="ts">
  interface CheckIconProps {
    size?: number;
  }

  const { size } = withDefaults(defineProps<CheckIconProps>(), {
    size: 24,
  });
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
