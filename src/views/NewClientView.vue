<script setup>
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'

const handleSubmit = data => {
  console.log('Submit...', data)
}
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLink to="home">
        Back
      </RouterLink>
    </div>
    <h1 class="title">Add new client</h1>

    <div class="mx-auto bg-white mt-10 shadow">
      <div class="mx-auto md:w-2/3 py-20 px-6">
        <FormKit 
          type="form" 
          submit-label="Add client" 
          incomplete-message="Some required fields have not been filled out"
          @submit="handleSubmit"
        >
          <FormKit
            type="text"
            label="Name"
            name="name"
            placeholder="Client's name"
            validation="required"
          />

          <FormKit
            type="text"
            label="Last name"
            name="lastname"
            placeholder="Client last name"
            validation="required"
          />

          <FormKit
            type="email"
            label="Email"
            name="email"
            placeholder="Client email"
            validation="required|email"
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
          />

          <FormKit
            type="text"
            label="Company"
            name="company"
            placeholder="Client company"
          />

          <FormKit
            type="text"
            label="Position"
            name="position"
            placeholder="Client position"
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
