<script setup>
import { onMounted, ref, computed } from 'vue'
import ClientService from '../services/ClientService'
import RouterLink from '../components/UI/RouterLink.vue'
import Client from '../components/Client.vue'

const clients = ref([])

onMounted(() => {
  ClientService.getClients()
    .then(({ data }) => clients.value = data)
    .catch(error => console.error(error))
})

const updateStatus = ({ id, status }) => {
  ClientService.updateClient(id, {status: !status})
    .then(() => {
      const i = clients.value.findIndex(client => client.id === id)

      clients.value[i].status = !status
    })
    .catch(error => console.error(error))
}

const thereAreClients = computed(() => clients.value.length > 0)
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="add-client">
        Add Client
      </RouterLink>
    </div>
    <h1 class="title">List of clients</h1>


    <div v-if="thereAreClients" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Name
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Company
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Status
                </th>
                <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Client 
                v-for="client in clients"
                :key="client.id"
                :client="client"
                @update-status="updateStatus"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div v-else>
      <p class="text-center mt-5">There are no clients, yet</p>
    </div>
  </div>
</template>
