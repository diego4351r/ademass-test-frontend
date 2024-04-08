<template>
  <main class="main">

    <slot></slot>
  </main>

</template>


<script setup lang="ts">

</script>

<style lang="scss">
.main>* {
  min-height: 100vh;
  background: linear-gradient(90deg, $accent-color 0%, $primary-color 50%, $accent-color 100%);
}
</style>