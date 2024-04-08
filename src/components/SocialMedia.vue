<template>
  <div class="social__media">
    <img :src="facebookIcon" alt="" srcset="">
    <img :src="googleIcon" alt="" srcset="">
    <img :src="instagramIcon" alt="" srcset="">
  </div>
</template>

<script setup lang="ts">
import facebookIcon from '../../public/icons/icons8-facebook.svg'
import googleIcon from '../../public/icons/icons8-google.svg'
import instagramIcon from '../../public/icons/icons8-instagram.svg'

</script>

<style scoped lang="scss">

.social__media {
  margin-top: size(8);
  display: flex;
  justify-content: space-evenly;
}

  .social__media img {
    cursor: pointer;
  }

</style>