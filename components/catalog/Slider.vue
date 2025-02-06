<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import PastaCarbonara from 'assets/img/pasta carbonara.jpg'
</script>

<template>
  <div class="overflow-hidden -mr-7">
    <Carousel
      class="w-[140%]"
      :opts="{
        align: 'start'
      }"
    >
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 5" :key="index" class="basis-1/2">
          <div class="h-full w-[98%]">
            <CatalogItem
              dish-name="Pasta Carbonara"
              :dish-image="PastaCarbonara"
              dish-amount-of-ingredients="6"
              dish-time-for-cooking="40 min"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<style scoped></style>
