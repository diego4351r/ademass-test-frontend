<template>
  <button class="custom-btn btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">

.custom-btn {
  width: auto;
  height: 40px;
  color: $primary-text-color;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
    7px 7px 20px 0px rgba(0, 0, 0, .1),
    4px 4px 5px 0px rgba(0, 0, 0, .1);
  outline: none;
}

.btn {
  background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
  background: linear-gradient(0deg, hsl(0, 19%, 87%) 0%, $primary-color 100%);
  border: none;
}

.btn:hover {
  background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
  background: linear-gradient(0deg, $primary-color 0%, $primary-color 100%);
}
</style>