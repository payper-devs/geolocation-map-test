<script setup lang="ts">
import { useGeolocation } from "@vueuse/core";

const { coords } = useGeolocation();
</script>

<template>
  <div>
    <p>coords: {{ coords }}</p>
  </div>
</template>
