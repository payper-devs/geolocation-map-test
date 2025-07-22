<script setup lang="ts">
import { onMounted, ref } from "vue";

const mapDiv = ref<HTMLDivElement | null>(null);

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tmapv3: any;
  }
}

onMounted(() => {
  const script = document.createElement("script");
  script.src =
    "https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=UkILTed80279kb2UVOEbj4FejelMxRTF6szofL3i";
  script.async = true;

  script.onload = () => {
    if (window.Tmapv3 && mapDiv.value) {
      new window.Tmapv3.Map(mapDiv.value, {
        center: new window.Tmapv3.LatLng(37.5652045, 126.98702028),
        width: "100%",
        height: "400px",
        zoom: 16,
      });
    }
  };

  document.head.appendChild(script);
});
</script>

<template>
  <div ref="mapDiv" style="width: 100%; height: 400px"></div>
</template>
