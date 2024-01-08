<script setup>
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/UI/RouterLink.vue'
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
        >
          <FormKit
            type="text"
            label="Name"
            placeholder="Client's name"
            validation="required"
          />

          <FormKit
            type="text"
            label="Last name"
            placeholder="Client last name"
            validation="required"
          />

          <FormKit
            type="email"
            label="Email"
            placeholder="Client email"
            validation="required|email"
          />

          <FormKit
            type="text"
            label="Phone"
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
            placeholder="Client company"
          />

          <FormKit
            type="text"
            label="Position"
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
