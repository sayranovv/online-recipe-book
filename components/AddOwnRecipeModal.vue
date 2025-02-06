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
import { h } from 'vue'

const formSchema = toTypedSchema(
  z.object({
    recipeName: z.string().min(2).max(50)
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
</script>

<template>
  <Form v-slot="{ handleSubmit }" as="" keep-values :validation-schema="formSchema">
    <Dialog>
      <DialogTrigger as-child>
        <Button class="bg-teal-700 h-full rounded-lg w-24">
          <Plus class="!h-6 !w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        class="sm:max-w-sm grid-rows-[auto_minmax(0,1fr)_auto] p-0 max-h-[90dvh] sm:max-h-[80dvh]"
      >
        <DialogHeader class="p-6 pb-0">
          <DialogTitle class="text-left text-3xl font-bold">Добавить новый рецепт</DialogTitle>
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
                amountOfServe
              }"
              name="username"
            >
              <FormItem>
                <FormLabel class="text-lg font-bold">Название</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Паста Карбонара" v-bind="recipeName" />
                </FormControl>
                <FormMessage />
              </FormItem>
              <p class="mt-5 text-lg font-bold">Ингредиенты</p>
              <div class="flex gap-3 mt-2">
                <FormItem class="w-full">
                  <FormLabel class="font-normal">Название</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Бекон" v-bind="ingredientName" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormItem class="w-full">
                  <FormLabel class="font-normal">Количество</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="1 пачка" v-bind="amountOfIngredients" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
              <Button class="mt-2 bg-teal-700 hover:bg-teal-900">+</Button>
              <div class="mt-5 flex flex-col gap-2">
                <Label for="message" class="text-lg font-bold">Процесс приготовления</Label>
                <Textarea
                  id="message"
                  placeholder="Опишите процесс приготовления"
                  v-bing="preparingProcess"
                />
              </div>
              <p class="mt-5 font-bold text-lg">Дополнительно</p>
              <div class="w-1/2 mt-2">
                <FormItem>
                  <FormLabel class="font-normal">Время приготовления</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="30 минут" v-bind="timeOfPreparing" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormItem>
                  <FormLabel class="font-normal">Калорийность</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="234" v-bind="calories" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
                <FormItem>
                  <FormLabel class="font-normal">Кол-во порций</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="2" v-bind="amountOfServe" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            </FormField>
          </form>
        </div>
        <DialogFooter class="p-6 pt-0">
          <Button type="submit" form="dialogForm"> Save changes </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>

<style scoped></style>
