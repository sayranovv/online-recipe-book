<script setup lang="ts">
import PizzaImg from 'assets/img/pizza.png'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '~/components/ui/carousel'

defineProps<{
  ingredients: string[]
}>()
</script>

<template>
  <div class="overflow-hidden -mr-9">
    <Carousel
      class="w-[150%]"
      :opts="{
        align: 'start'
      }"
    >
      <CarouselContent>
        <CarouselItem v-for="ingredient in ingredients" :key="ingredient" class="basis-36">
          <div class="h-full">
            <div>
              <div class="w-32 h-32 bg-gray-50 px-3 flex items-center rounded-xl drop-shadow-sm">
                <img src="@/assets/img/lemons.png" alt="lemons" class="drop-shadow-lg" />
              </div>
              <p class="font-semibold text-lg mt-2">{{ ingredient }}</p>
              <p class="text-md opacity-50">1 item</p>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<style scoped></style>
