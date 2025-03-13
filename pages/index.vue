<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="relative">
    <header class="flex justify-between items-end">
      <div>
        <p class="opacity-50">Good morning!</p>
        <h1 class="text-3xl font-semibold">Eldar Sayranov</h1>
      </div>
      <UserAvatar />
    </header>
    <main class="mt-7">
      <section class="flex justify-between items-center gap-2 h-11">
        <div class="relative w-full items-center h-full">
          <Input id="search" type="text" placeholder="Search..." class="pl-10 h-full rounded-lg" />
          <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
            <Search class="size-6 text-muted-foreground" />
          </span>
        </div>
        <Button class="bg-amber-500 h-full w-16 rounded-lg">
          <SlidersHorizontal class="!h-6 !w-6" />
        </Button>
      </section>
      <section>
        <StoriesSlider />
      </section>
      <section>
        <h2 class="text-xl font-bold">Recommendation</h2>
        <CatalogSlider class="mt-3" />
      </section>
      <section class="mt-5 text-center">
        <AddOwnRecipeModal />
      </section>
    </main>
  </div>
</template>

<style scoped></style>
