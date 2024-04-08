<template>
  <div class="auth-page-wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Button from '@components/Button.vue';


</script>

<style scoped lang="scss">

  .auth-page-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }

  .auth-page-wrapper :deep( > *) {
    // border: 1px solid black;
    box-shadow: 0px 0px 23px 5px rgba(0, 0, 0, 0.21);

    padding: size(4);
    @include md {
      border-radius: 1.5rem;
    }
  }



</style>