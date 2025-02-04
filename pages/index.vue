<script setup lang="ts">
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, SlidersHorizontal, Plus } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import StoriesSliderItem from "~/components/stories-slider/StoriesSliderItem.vue";
import PizzaImg from "@/assets/img/pizza.png";
import LemonsImg from "@/assets/img/lemons.png";
import PastaCarbonara from "@/assets/img/pasta carbonara.jpg";
import RecommendationSliderItem from "~/components/catalog-slider/RecommendationSliderItem.vue";
</script>

<template>
  <div class="p-7">
    <div class="flex justify-between items-end">
      <div>
        <p class="opacity-50">Good Morning</p>
        <h1 class="text-3xl font-semibold">Eldar Sayranov</h1>
      </div>
      <Avatar class="w-12 h-12 shadow">
        <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
        <AvatarFallback>ES</AvatarFallback>
      </Avatar>
    </div>
    <div class="flex justify-between items-center gap-2 h-11 mt-7">
      <div class="relative w-full items-center h-full">
        <Input
          id="search"
          type="text"
          placeholder="Search..."
          class="pl-10 h-full rounded-lg"
        />
        <span
          class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
        >
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
      <StoriesSliderItem title="Homemade Pizza" :img="PizzaImg" type="round" />
      <StoriesSliderItem title="Lemon Fresh" :img="LemonsImg" />
      <StoriesSliderItem />
    </div>
    <div class="mt-5">
      <h2 class="text-xl font-bold">Recommendation</h2>
      <RecommendationSliderItem
        class="mt-3"
        dish-name="Pasta Carbonara"
        :dish-image="PastaCarbonara"
        dish-amount-of-ingredients="6"
        dish-time-for-cooking="40 min"
      />
    </div>
    <div class="text-center mt-8">
      <Button class="bg-teal-700 h-full rounded-lg w-24">
        <Plus class="!h-6 !w-6" />
      </Button>
    </div>
  </div>
</template>

<style scoped></style>
