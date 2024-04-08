<template>
  <div>
    <h1>Recuperar contraseña</h1>
    <form @submit="onSubmit">
      <Input type="email" id-name="email" placeholder="pepitoperez@gmail.com" />
      <div class="controls-wrapper">
        <Button @click="goToLogin">VOLVER</Button>
        <Button>RECUPERAR</Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Input from '../../../components/Input.vue';
import Button from '../../../components/Button.vue';
import { useRouter } from 'vue-router';
import { useForm } from 'vee-validate';
import { passwordRecoverySchema } from '../schemas/passwordRecovery.schema';

const {handleSubmit} = useForm({
  validationSchema: passwordRecoverySchema
})

const onSubmit = (event: Event) => {
  event.preventDefault()
  handleSubmit(values => {
    alert(JSON.stringify(values, null, 2))
  })
}

const router = useRouter()
const goToLogin = () => {

  router.push({name: 'login'})
}

</script>

<style scoped></style>