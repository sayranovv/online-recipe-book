<script setup lang="ts">
import RecipeInfo from "~/components/RecipeInfo.vue";
</script>

<template>
  <div class="">
    <div class="h-[480px] w-full">
      <img
        src="@/assets/img/greek%20salad.jpg"
        alt=""
        class="object-cover h-full w-full rounded-[55px] rounded-b-[70px]"
      />
    </div>
    <div class="absolute w-11/12 top-1/2">
      <RecipeInfo
        class="mx-auto w-11/12 relative bottom-14"
        recipe-name="Greek salad"
        :amount-of-ingredients="6"
        time-for-preparing="30 min"
        :amount-of-calories="234"
        :amount-of-serve="3"
      />
    </div>
    <div class="p-7">
      <div class="mt-16">
        <h2 class="text-2xl font-bold">Ingredients</h2>
        <div class="flex gap-5">
          <IngredientsSliderItem class="mt-5" />
          <IngredientsSliderItem class="mt-5" />
          <IngredientsSliderItem class="mt-5" />
        </div>
      </div>
      <div class="mt-8">
        <h2 class="text-2xl font-bold">Cooking instruction</h2>
        <div class="bg-teal-50 p-5 rounded-3xl mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          consequuntur cupiditate, dignissimos eaque tempore voluptates? Ad
          consequatur, exercitationem inventore labore laboriosam non officia
          perferendis praesentium quam quasi soluta temporibus voluptate
          voluptates. Accusamus at commodi dolores, esse excepturi facere fugiat
          in iure iusto laborum nobis numquam perferendis repellat sed vel,
          voluptate.
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
