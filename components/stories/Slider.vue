<script setup lang="ts">
import PastaCarbonara from 'assets/img/pasta carbonara.jpg'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '~/components/ui/carousel'
import PizzaImg from 'assets/img/pizza.png'
import LemonsImg from 'assets/img/lemons.png'
</script>

<template>
  <div class="overflow-hidden -mr-7">
    <Carousel
      :opts="{
        align: 'start'
      }"
    >
      <CarouselContent class="py-5">
        <CarouselItem v-for="(_, index) in 10" :key="index" class="basis-28">
          <div class="h-full">
            <StoriesItem title="Домашняя пицца" :img="PizzaImg" type="round" />
            <!--            <StoriesItem title="Lemon Fresh" :img="LemonsImg" />-->
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>

<style scoped></style>
