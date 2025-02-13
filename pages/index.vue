<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search, SlidersHorizontal } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="p-7 h-full flex flex-col justify-between">
    <div class="h-full min-h-[750px]">
      <div class="h-1/3">
        <div class="flex justify-between items-end">
          <div>
            <p class="opacity-50">Good Morning</p>
            <h1 class="text-3xl font-semibold">Eldar Sayranov</h1>
          </div>
          <UserAvatar />
        </div>
        <div class="flex justify-between items-center gap-2 h-11 mt-7">
          <div class="relative w-full items-center h-full">
            <Input
              id="search"
              type="text"
              placeholder="Search..."
              class="pl-10 h-full rounded-lg"
            />
            <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
              <Search class="size-6 text-muted-foreground" />
            </span>
          </div>
          <Button class="bg-teal-700 h-full w-16 rounded-lg">
            <div>
              <SlidersHorizontal class="!h-6 !w-6" />
            </div>
          </Button>
        </div>
        <div class="flex gap-3 mt-5">
          <StoriesSlider />
        </div>
      </div>
      <div class="mt-5 h-2/3">
        <h2 class="text-xl font-bold">Recommendation</h2>
        <CatalogSlider class="mt-3" />
      </div>
    </div>
    <div class="text-center">
      <AddOwnRecipeModal />
    </div>
  </div>
</template>

<style scoped></style>
