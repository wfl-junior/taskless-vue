<script setup lang="ts">
  interface InputProps {
    modelValue?: string;
  }

  interface InputEmits {
    (event: "update:modelValue", value: string): void;
  }

  defineProps<InputProps>();
  defineEmits<InputEmits>();
</script>

<template>
  <input
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    class="px-3 sm:px-6 py-2.5 sm:py-4 text-sm font-normal placeholder:text-app-gray-200 text-app-gray-50 rounded-lg bg-app-gray-700 border border-app-gray-400 focus:outline-none focus:border-app-green-400 transition-colors"
  />
</template>
