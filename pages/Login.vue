<script setup lang="ts">
import { ChevronLeft, Settings } from 'lucide-vue-next'
</script>

<template>
  <div class="relative">
    <div class="w-full absolute top-0">
      <div class="flex justify-between">
        <NuxtLink to="/" class="w-14 h-14 flex justify-center items-center">
          <ChevronLeft class="!h-8 !w-8" />
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-col gap-6 pt-10">
      <div>
        <h1 class="text-6xl font-black text-center text-amber-500">Reecipee</h1>
        <h2 class="text-center font-semibold mt-2">Войти или зарегистрироваться</h2>
      </div>
      <Tabs default-value="Log In" class="w-full mb-5">
        <TabsList class="w-full rounded-full drop-shadow-lg">
          <TabsTrigger value="Log In" class="w-1/2 rounded-full"> Log In </TabsTrigger>
          <TabsTrigger value="Sign In" class="w-1/2 rounded-full"> Sign In </TabsTrigger>
        </TabsList>
        <TabsContent value="Log In" class="mt-4 drop-shadow-lg">
          <LoginForm />
        </TabsContent>
        <TabsContent value="Sign In" class="mt-4 drop-shadow-lg">
          <RegistrationForm />
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
