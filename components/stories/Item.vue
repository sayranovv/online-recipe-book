<script setup lang="ts">
const prop = defineProps<{
  title: string
  img: string
  type?: string
}>()
</script>

<template>
  <div
    class="w-[102px] h-[102px] p-2 bg-amber-500 relative overflow-hidden rounded-3xl shadow-md cursor-pointer"
  >
    <img
      :src="prop.img"
      alt="pizza"
      class="absolute"
      :class="prop.type === 'round' ? 'w-24 -top-10 -right-10' : 'w-16 right-2'"
    />
    <p class="absolute bottom-2 left-2 text-white text-sm max-w-16 leading-none">
      {{ prop.title }}
    </p>
  </div>
</template>

<style scoped></style>
