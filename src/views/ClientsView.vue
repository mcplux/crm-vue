<script setup>
import axios from 'axios'
import RouterLink from '../components/UI/RouterLink.vue'
import { onMounted, ref } from 'vue'

const clients = ref([])

onMounted(() => {
  axios('http://localhost:4000/clients')
    .then(({ data }) => clients.value = data)
    .catch(error => console.error(error))
})
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="add-client">
        Add Client
      </RouterLink>
    </div>
    <h1 class="title">List of clients</h1>
  </div>
</template>
