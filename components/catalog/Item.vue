<script setup lang="ts">
const prop = defineProps<{
  dishName: string
  dishAmountOfIngredients: number
  dishTimeForCooking: string
  dishImage: string
}>()
</script>

<template>
  <div class="w-2/3 h-full">
    <div class="w-full h-2/3">
      <img :src="prop.dishImage" alt="greek salad" class="rounded-xl object-cover h-full" />
    </div>
    <div class="mt-3">
      <h3 class="text-lg font-medium">{{ prop.dishName }}</h3>
      <p class="opacity-50 text-sm">
        {{ prop.dishAmountOfIngredients }} ingredients •
        {{ dishTimeForCooking }}
      </p>
    </div>
  </div>
</template>

<style scoped></style>
