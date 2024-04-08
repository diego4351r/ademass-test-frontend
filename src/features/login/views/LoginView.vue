<template>
  <div>
    <h1>Entrar</h1>
    <form @submit="onSubmit">
      <Input type="email" id-name="email" placeholder="pepitoperez@gmail.com" />
      <Input type="password" id-name="password" placeholder="****" />
      <Button>LOGIN</Button>
    </form>
    <SocialMedia />


      <p>¿Problemas de memoria? Recupera tu contraseña <router-link
          :to="{ name: 'password-recovery' }">aquí</router-link>
      </p>
      <p>¿Todavía no tienes cuenta? Créala <router-link :to="{ name: 'create-account' }">aquí</router-link></p>

  </div>
</template>

<script setup lang="ts">

import Input from '../../../components/Input.vue';
import Button from '../../../components/Button.vue';
import { useForm } from 'vee-validate';
import { loginSchema } from '../schemas/login.schema';
import { AuthService } from '../services/AuthService';
import { UserDto } from '../dtos/User';
import SocialMedia from '../../../components/SocialMedia.vue';



const { handleSubmit } = useForm({
  validationSchema: loginSchema
})

const onSubmit = handleSubmit( (values) => {
  const authService = new AuthService()
  authService.login(new UserDto(values.email, values.password))
})
</script>

<style scoped></style>