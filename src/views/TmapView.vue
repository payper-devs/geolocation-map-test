<script setup lang="ts">
import { onMounted, ref, defineProps } from "vue";

const props = defineProps<{
  lat: number;
  lng: number;
}>();

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
      const map = new window.Tmapv3.Map(mapDiv.value, {
        center: new window.Tmapv3.LatLng(props.lat, props.lng),
        width: "100%",
        height: "400px",
        zoom: 16,
      });

      // 마커 생성
      new window.Tmapv3.Marker({
        position: new window.Tmapv3.LatLng(props.lat, props.lng),
        map: map,
      });
    }
  };

  document.head.appendChild(script);
});
</script>

<template>
  <div ref="mapDiv" style="width: 100%; height: 400px"></div>
</template>
