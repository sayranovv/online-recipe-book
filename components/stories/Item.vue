<script setup lang="ts">
const prop = defineProps<{
  title: string;
  img: string;
  type?: string;
}>();
</script>

<template>
  <div
    class="w-24 h-24 p-2 bg-teal-700 relative overflow-hidden rounded-xl shadow-md"
  >
    <img
      :src="prop.img"
      alt="pizza"
      class="absolute"
      :class="prop.type === 'round' ? 'w-24 -top-10 -right-10' : 'w-16 right-2'"
    />
    <p
      class="absolute bottom-2 left-2 text-white text-sm font-medium max-w-16 leading-tight"
    >
      {{ prop.title }}
    </p>
  </div>
</template>

<style scoped></style>
