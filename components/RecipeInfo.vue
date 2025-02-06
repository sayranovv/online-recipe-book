<script setup lang="ts">
import { Clock, Flame, ConciergeBell } from 'lucide-vue-next'

const prop = defineProps<{
  recipeName: string
  amountOfIngredients: number
  timeForPreparing: string
  amountOfCalories: number
  amountOfServe: number
}>()
</script>

<template>
  <div class="text-center rounded-3xl shadow-lg px-5 py-5 bg-white">
    <h1 class="text-3xl font-semibold">{{ prop.recipeName }}</h1>
    <p class="mt-0.5 opacity-50">{{ prop.amountOfIngredients }} ingredients</p>
    <div class="mt-4 flex justify-between items-center">
      <div class="flex gap-2">
        <Clock color="#3e9392" />
        <p>{{ prop.timeForPreparing }}</p>
      </div>
      <div class="flex gap-2">
        <Flame color="#3e9392" />
        <p>{{ prop.amountOfCalories }} Kall</p>
      </div>
      <div class="flex gap-2">
        <ConciergeBell color="#3e9392" />
        <p>{{ prop.amountOfServe }} serve</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
