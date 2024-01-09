<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  client: {
    type: Object,
  }
})

const clientName = computed(() => `${props.client.name} ${props.client.lastname}`)
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">
        {{ clientName }}
      </p>
      <p class="text-gray-500">
        {{ client.email }}
      </p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">
        {{ client.company }}
      </p>
      <p class="text-gray-600">
        {{ client.position }}
      </p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">

    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
      <RouterLink to="/" class="text-indigo-600 hover:text-indigo-900 mr-5 font-bold transition-colors">
        Edit
      </RouterLink>
      <button class="text-red-600 hover:text-red-900 font-bold transition-colors">
        Delete
      </button>
    </td>
  </tr>
</template>
