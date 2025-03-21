<script setup lang="ts">
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '~/components/ui/form'
import { Button } from '~/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '~/components/ui/dialog'
import { Textarea } from '~/components/ui/textarea'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Plus } from 'lucide-vue-next'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { h, ref } from 'vue'

const amountOfOwnRecipeIngredients = ref(3)

const formSchema = toTypedSchema(
  z.object({
    recipeName: z.string().min(2).max(50),
    preparingProcess: z.string().min(10).max(1024),
    timeOfPreparing: z.string(),
    calories: z.number().min(0).max(10000),
    amountOfServe: z.number().min(0).max(100)
  })
)

const onSubmit = (values: any) => {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))
    )
  })
}

const onClickPlus = () => {
  amountOfOwnRecipeIngredients.value += 1
}
</script>

<template>
  <Form v-slot="{ handleSubmit }" as="" keep-values :validation-schema="formSchema">
    <Dialog>
      <DialogTrigger as-child>
        <Button class="bg-amber-500 h-full rounded-3xl w-24 shadow-lg">
          <Plus class="!h-6 !w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent class="grid-rows-[auto_minmax(0,1fr)_auto] h-screen p-0">
        <DialogHeader class="p-6 pb-0">
          <DialogTitle class="text-left text-3xl font-bold">Добавить новый рецепт</DialogTitle>
        </DialogHeader>
        <div class="grid gap-4 py-4 overflow-y-auto px-6">
          <form
            id="dialogForm"
            @submit="handleSubmit($event, onSubmit)"
            class="flex flex-col justify-between"
          >
            <FormField v-slot="{ componentField }" name="recipeName">
              <FormItem>
                <FormLabel class="text-lg font-bold">Название</FormLabel>
                <FormControl>
                  <Input
                    class="rounded-3xl"
                    type="text"
                    placeholder="Паста Карбонара"
                    v-bind="componentField"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <div></div>
            <p class="mt-5 text-lg font-bold">Ингредиенты</p>
            <div class="flex gap-3 mt-2 text-sm">
              <p class="w-1/2">Название</p>
              <p class="w-1/2">Количество</p>
            </div>
            <div class="mt-2 flex flex-col gap-2">
              <div class="flex gap-3" v-for="item in amountOfOwnRecipeIngredients" :key="item">
                <FormField v-slot="{ componentField }" name="ingredientName">
                  <FormItem class="w-full">
                    <FormControl>
                      <Input
                        class="rounded-3xl"
                        type="text"
                        placeholder="Бекон"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="amountOfIngredients">
                  <FormItem class="w-full">
                    <FormControl>
                      <Input
                        class="rounded-3xl"
                        type="text"
                        placeholder="1 пачка"
                        v-bind="componentField"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </FormField>
              </div>
            </div>

            <Button class="mt-2 bg-amber-500 hover:bg-amber-900 rounded-3xl" @click="onClickPlus"
              >+</Button
            >

            <FormField v-slot="{ componentField }" name="preparingProcess">
              <FormItem>
                <FormLabel class="text-lg font-bold">Процесс приготовления</FormLabel>
                <FormControl>
                  <Textarea
                    class="rounded-3xl"
                    id="message"
                    placeholder="Опишите процесс приготовления"
                    v-bind="componentField"
                  />
                </FormControl>
              </FormItem>
            </FormField>

            <p class="mt-5 font-bold text-lg">Дополнительно</p>

            <div class="w-1/2 mt-2">
              <FormField v-slot="{ componentField }" name="timeOfPreparing">
                <FormItem>
                  <FormLabel class="font-normal">Время приготовления</FormLabel>
                  <FormControl>
                    <Input
                      class="rounded-3xl"
                      type="text"
                      placeholder="30 минут"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="calories">
                <FormItem>
                  <FormLabel class="font-normal">Калорийность</FormLabel>
                  <FormControl>
                    <Input
                      class="rounded-3xl"
                      type="number"
                      placeholder="234"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>

              <FormField v-slot="{ componentField }" name="amountOfServe">
                <FormItem>
                  <FormLabel class="font-normal">Кол-во порций</FormLabel>
                  <FormControl>
                    <Input
                      class="rounded-3xl"
                      type="number"
                      placeholder="2"
                      v-bind="componentField"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </FormField>
            </div>
          </form>
        </div>
        <DialogFooter class="p-6 pt-0">
          <Button type="submit" form="dialogForm" class="bg-amber-500 rounded-3xl">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>

<style scoped></style>
