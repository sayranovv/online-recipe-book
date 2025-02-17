import { defineStore } from 'pinia'

const API_URL = 'https://a3a068e9218d71bf.mokky.dev/recipes'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],
    recipe: {},
    loading: false,
    error: null
  }),

  actions: {
    async fetchRecipes() {
      this.loading = true
      const { data, error } = await useFetch(API_URL)
      if (error.value) {
        this.error = 'Ошибка при загрузке рецептов'
      } else {
        this.recipes = data.value || []
      }
      this.loading = false
    },

    async fetchRecipeById(id: number) {
      this.loading = true
      const { data, error } = await useFetch(`${API_URL}/${id}`)
      if (error.value) {
        this.error = 'Ошибка при загрузке рецепта'
      } else {
        this.recipe = data.value
      }
      this.loading = false
    }
  }
})
