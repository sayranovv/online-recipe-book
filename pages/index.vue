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
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toTypedSchema } from "@vee-validate/zod";
import { h } from "vue";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = toTypedSchema(
  z.object({
    recipeName: z.string().min(2).max(50),
  }),
);

function onSubmit(values: any) {
  toast({
    title: "You submitted the following values:",
    description: h(
      "pre",
      { class: "mt-2 w-[340px] rounded-md bg-slate-950 p-4" },
      h("code", { class: "text-white" }, JSON.stringify(values, null, 2)),
    ),
  });
}
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
    <Form
      v-slot="{ handleSubmit }"
      as=""
      keep-values
      :validation-schema="formSchema"
    >
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline"> Edit Profile </Button>
        </DialogTrigger>
        <DialogContent
          class="sm:max-w-[425px] grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh]"
        >
          <!--        grid-rows-[auto_minmax(0,1fr)_auto]-->
          <DialogHeader class="p-6 pb-0">
            <DialogTitle class="text-left text-3xl font-bold"
              >Добавить новый рецепт</DialogTitle
            >
          </DialogHeader>
          <div class="grid gap-4 py-4 overflow-y-auto px-6">
            <form
              id="dialogForm"
              @submit="handleSubmit($event, onSubmit)"
              class="flex flex-col justify-between"
            >
              <FormField
                v-slot="{
                  recipeName,
                  ingredientName,
                  amountOfIngredients,
                  preparingProcess,
                  timeOfPreparing,
                  calories,
                  amountOfServe,
                }"
                name="username"
              >
                <FormItem>
                  <FormLabel class="text-lg font-bold">Название</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Паста Карбонара"
                      v-bind="recipeName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <p class="mt-5 text-lg font-bold">Ингредиенты</p>
                <div class="flex gap-3 mt-2">
                  <FormItem class="w-full">
                    <FormLabel class="font-normal">Название</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Бекон"
                        v-bind="ingredientName"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem class="w-full">
                    <FormLabel class="font-normal">Количество</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="1 пачка"
                        v-bind="amountOfIngredients"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
                <Button class="mt-2 bg-teal-700 hover:bg-teal-900">+</Button>
                <div class="mt-5 flex flex-col gap-2">
                  <Label for="message" class="text-lg font-bold"
                    >Процесс приготовления</Label
                  >
                  <Textarea
                    id="message"
                    placeholder="Опишите процесс приготовления"
                    v-bing="preparingProcess"
                  />
                </div>
                <p class="mt-5 font-bold text-lg">Дополнительно</p>
                <div class="w-1/2 mt-2">
                  <FormItem>
                    <FormLabel class="font-normal"
                      >Время приготовления</FormLabel
                    >
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="30 минут"
                        v-bind="timeOfPreparing"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel class="font-normal">Калорийность</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="234"
                        v-bind="calories"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  <FormItem>
                    <FormLabel class="font-normal">Кол-во порций</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="2"
                        v-bind="amountOfServe"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              </FormField>
            </form>
            <!--            <div class="flex flex-col justify-between h-[300dvh]">-->
            <!--              <p>-->
            <!--                This is some placeholder content to show the scrolling behavior-->
            <!--                for modals. We use repeated line breaks to demonstrate how-->
            <!--                content can exceed minimum inner height, thereby showing inner-->
            <!--                scrolling. When content becomes longer than the predefined-->
            <!--                max-height of modal, content will be cropped and scrollable-->
            <!--                within the modal.-->
            <!--              </p>-->

            <!--              <p>This content should appear at the bottom after you scroll.</p>-->
            <!--            </div>-->
          </div>
          <DialogFooter class="p-6 pt-0">
            <Button type="submit" form="dialogForm"> Save changes </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Form>
  </div>
</template>

<style scoped></style>
