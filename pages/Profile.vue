<script setup lang="ts">
import { ChevronLeft, Settings, Heart, CookingPot } from 'lucide-vue-next'

const userData = {
  name: 'Eldar'
}
</script>

<template>
  <div class="relative h-full flex flex-col justify-between">
    <div class="w-full absolute top-0">
      <div class="flex justify-between">
        <NuxtLink to="/" class="w-14 h-14 flex justify-center items-center">
          <ChevronLeft class="!h-8 !w-8" />
        </NuxtLink>
        <button class="w-14 h-14 flex justify-center items-center">
          <Settings class="!h-8 !w-8" />
        </button>
      </div>
    </div>
    <div>
      <header class="mt-5 text-center">
        <Avatar size="lg">ES</Avatar>
        <h1 class="mt-3.5 text-3xl font-semibold">Eldar Sayranov</h1>
      </header>
      <main class="my-10 space-y-3">
        <NuxtLink
          to="/favorite"
          class="px-4 py-3 rounded-3xl border border-rose-500 flex items-center gap-3 bg-rose-50 hover:bg-rose-100"
        >
          <Heart class="!h-7 !w-7 text-rose-400" />
          <p class="text-rose-950">Понравившиеся</p>
        </NuxtLink>
        <NuxtLink
          to="/my"
          class="px-4 py-3 rounded-3xl border border-amber-500 flex items-center gap-3 bg-orange-50 hover:bg-orange-100"
        >
          <CookingPot class="!h-7 !w-7 text-amber-500" />
          <p class="text-amber-950">Мои рецепты</p>
        </NuxtLink>
      </main>
    </div>
    <footer class="text-center">
      <NuxtLink to="/login" class="text-rose-700 font-regular mt-auto">Выйти из аккаунта</NuxtLink>
    </footer>
  </div>
</template>

<style scoped></style>
