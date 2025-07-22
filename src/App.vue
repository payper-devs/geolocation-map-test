<script setup lang="ts">
import { useGeolocation } from "@vueuse/core";
import axios from "axios";
import { ref } from "vue";

const { coords } = useGeolocation();

let urlstring = ref("");

const requestAPI = async () => {
  const url = `https://apis.openapi.sk.com/tmap/staticMap?version=1&appKey=
pOqmm4EEF43N8hq3UFMllaiMgygPW3Dv9B4hkOuT&zoom=10&format=PNG&longitude=${coords.value.longitude}&latitude=${coords.value.latitude}`;

  await axios.get(url).then((response) => {
    console.log(response);
    const binaryData = response.data;
    const blobs = new Blob([binaryData], { type: "image/png" });
    //urlstring.value = URL.createObjectURL(blobs);
    urlstring.value = response.data[0].url;
    console.log(urlstring.value);
  });
};
</script>

<template>
  <div id="app">
    <p>coords: {{ coords }}</p>
    <button v-on:click="requestAPI()">button</button>
    <img :src="urlstring" alt="이미지" />
  </div>
</template>
