<template>
  <div>
    <form @submit="onSubmit">
      <h1>Crear cuenta</h1>
      <Input type="text" id-name="name" placeholder="Pepito Pérez" />
      <Input type="email" id-name="email" placeholder="pepitoperez@gmail.com" />
      <Input type="password" id-name="password1" placeholder="****" />
      <Input type="password" id-name="password2" placeholder="****" />
      <div class="controls-wrapper">
        <Button @click="goToLogin">VOLVER</Button>
        <Button>ENVIAR</Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from '../../../components/Input.vue';
import Button from '../../../components/Button.vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { createAccountSchema } from '../schemas/createAccount.schema';

const { handleSubmit } = useForm({
  validationSchema: createAccountSchema
})

const onSubmit = (event: Event) => {
  event.preventDefault()
  handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
}

const router = useRouter()
const goToLogin = () => {
  router.push({ name: 'login' })
}

</script>

<style scoped></style>