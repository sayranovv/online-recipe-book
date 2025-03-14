<script setup lang="ts"></script>

<template>
  <div class="relative bg-white sm:w-96 h-screen sm:h-[700px] flex flex-col overflow-hidden">
    <div class="flex-1 overflow-y-auto overflow-x-hidden py-6 px-4">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
