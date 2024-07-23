<template>
  <div>
    <Form @submit="onSubmit" :validation-schema="formSchema">
      <div class="mb-3">
        <label for="name">Name</label>
        <Field 
          name="name"
          class="control-form"
          placeholder="Enter your name"
        />
        <ErrorMessage as="div" name="name" v-slot="{message}">
          <div class="alert alert-danger">
            {{ message }}
          </div>
        </ErrorMessage>
      </div>

      <button class="btn btn-primary">
        Submit
      </button>
    </Form>
  </div>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

const formSchema = yup.object({
  name: yup.string().required()
})

function onSubmit(values) {
  console.log(values)
}

// const isRequired = (value) => {
//   if (!value) { return 'This field is required' }
//   return true;
// }

// const validateName = (value) => {
//   if (value !== 'chris') { return true }
//   return 'User not allowed'
// }

</script>