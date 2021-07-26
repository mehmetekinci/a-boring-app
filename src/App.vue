<template>
  <div
    id="container"
    class="max-w-3xl mx-auto bg-white h-screen rounded-xl text-gray-600"
  >
    <NavBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
});
</script>


<style>
body {
  background: linear-gradient(45deg, #8c91cc, #8e5bac, #4c56c7);
  background-size: cover;
}
</style>
