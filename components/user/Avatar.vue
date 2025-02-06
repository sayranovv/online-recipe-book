<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <Avatar class="w-12 h-12 shadow">
    <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
    <AvatarFallback>ES</AvatarFallback>
  </Avatar>
</template>

<style scoped></style>
