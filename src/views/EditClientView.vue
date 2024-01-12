<script setup>
import { onMounted, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { FormKit } from '@formkit/vue'
import ClientService from '../services/ClientService'
import RouterLink from '../components/UI/RouterLink.vue'

const router = useRouter()
const route = useRoute()

const { id } = route.params

const formData = reactive({})

onMounted(() => {
  ClientService.getClient(id)
    .then(({ data }) => {
      Object.assign(formData, data)
    })
    .catch(error => console.error(error))
})

const handleSubmit = data => {
  ClientService.updateClient(id, data)
    .then(() => router.push({name: 'home'}))
    .catch(error => console.error(error))
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">
        Back
      </RouterLink>
    </div>
    <h1 class="title">Edit client</h1>

    <div class="mx-auto bg-white mt-10 shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit 
          type="form" 
          submit-label="Save changes" 
          incomplete-message="Some required fields have not been filled out"
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Name"
            name="name"
            placeholder="Client's name"
            validation="required"
            v-model="formData.name"
          />

          <FormKit
            type="text"
            label="Last name"
            name="lastname"
            placeholder="Client last name"
            validation="required"
            v-model="formData.lastname"
          />

          <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Client email"
            validation="required|email"
            v-model="formData.email"
          />

          <FormKit
            type="text"
            label="Phone"
            name="phone"
            placeholder="Client phone"
            help="Phone format: XXX-XXX-XXXX"
            validation="matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
            :validation-messages="{
              matches: 'Invalid format'
            }"
            v-model="formData.phone"
          />

          <FormKit
            type="text"
            label="Company"
            name="company"
            placeholder="Client company"
            v-model="formData.company"
          />

          <FormKit
            type="text"
            label="Position"
            name="position"
            placeholder="Client position"
            v-model="formData.position"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
  .formkit-wrapper {
    max-width: 100%;
  }
</style>
