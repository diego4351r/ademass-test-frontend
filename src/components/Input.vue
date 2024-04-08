<template>
  <div class="input__wrapper">
    <input v-model="value" :type="inputType" :placeholder="placeholder" class="input__field">
    <label v-label-text :for="idName" class="input__label">{{ idName }}</label>
    <span class="input__error">{{ errorMessage }}</span>
    <img v-if="type === 'password'" @click="toggleEye" :src="isPaswordVisible ? eye : eyeOff" alt="" srcset="" class="input__icon">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useField } from 'vee-validate';
import { ref } from 'vue';

import eye from '../../public/icons/eye.svg'
import eyeOff from '../../public/icons/eye-off.svg'

const { type, idName } = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value: string) => {
      return ['text', 'password', 'number', 'email'].includes(value)
    }
  },
  idName: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
  }
})

const isPaswordVisible = ref(false)

const inputType = computed(() => {
  if(type === 'password' && isPaswordVisible.value === false) return 'password'
  if(type === 'password' && isPaswordVisible.value === true) return 'text'
  return type
})

const toggleEye = () => {
  isPaswordVisible.value = !isPaswordVisible.value
}

const { value, errorMessage } = useField(() => idName);
</script>

<style lang="scss" scoped>
.input__wrapper {
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  flex-flow: column;
}

.input__field {
  border: 0;
  border-radius: 5px;
  border-bottom: 2px solid $secondary-color;
  outline: 0;
  font-size: 1rem;
  color: $primary-text-color;
  padding: 0.25rem 0px;
  padding-right: 2rem;
  padding: size(2);
  transition: border-color 0.2s;
}

.input__field:not(:focus)::placeholder {
  color: transparent;
}

.input__field:placeholder-shown~.input__label {
  font-size: 1rem;
  cursor: text;
  color: $secondary-color;
  top: 1rem;

}

label,
.input__field:focus~.input__label {
  position: absolute;
  top: -20px;
  left: 5px;
  display: block;
  font-size: 0.875rem;
  color: $secondary-color;
  transition: 0.3s;
}

.input__field:focus~.input__label {
  color: $primary-text-color;
}

.input__field:focus {
  border-bottom: 2px solid $primary-color;
}

.input__icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  width: 1.625rem;
  height: 1.625rem;
  padding: 0.125rem;

  transform-origin: center;
  cursor: pointer;
}

.input__error {
  color: red;
}

</style>