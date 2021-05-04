<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const pageNotFound = ref<string>('404 Not Found')
    const otherError = ref<string>('An error occurred')
    return {
      pageNotFound,
      otherError,
    }
  },
  head() {
    const title =
      (this as any).error.statusCode === 404
        ? (this as any).pageNotFound
        : (this as any).otherError
    return {
      title,
    }
  },
})
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
