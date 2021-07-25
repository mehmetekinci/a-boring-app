<template>
  <div class="sm:space-y-12 space-y-5 mt-4">
    <div class="sm:space-y-3">
      <label> Participants </label>
      <input v-model="participants" type="number" class="w-full py-1 px-2" />
    </div>
    <div class="sm:space-y-3">
      <label class="block">Type </label>
      <select class="w-full py-1 px-2" v-model="activityType" name="" id="">
        <option v-for="(activity, i) in activityList" :key="i">
          {{ activity.type }}
        </option>
      </select>
    </div>
    <div class="sm:space-y-8">
      <label>Price </label>
      <RangeSlider @update:activityInfo="getPrices" />
    </div>
    <div class="sm:space-y-8">
      <label>Accessibility </label>
      <RangeSlider @update:activityInfo="getAccessibility" />
    </div>
    <button
      class="
        justify-center
        w-full
        flex
        mx-auto
        mt-28
        border-2 border-purple-500
        py-3
        px-6
        rounded-xl
        bg-purple-500
        text-white
        hover:bg-purple-100
        hover:text-purple-500
      "
      @click="handleSearch()"
    >
      Get activity
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { activityList } from "../assets/activityList";
import RangeSlider from "./RangeSlider.vue";

export default defineComponent({
  components: { RangeSlider },
  setup(_, { emit }) {
    const participants = ref("");
    const activityType = ref("");
    const prices = ref("");
    const accessibilities = ref("");

    const getPrices = (value: any) => {
      prices.value = value;
    };

    const getAccessibility = (value: any) => {
      accessibilities.value = value;
    };

    const activityInfos = {
      participants,
      activityType,
      prices,
      accessibilities,
    };

    const handleSearch = () => {
      console.log(activityInfos);
      emit("search:activity", activityInfos);
    };

    return {
      activityInfos,
      prices,
      accessibilities,
      participants,
      handleSearch,
      getPrices,
      getAccessibility,
      activityList,
      activityType,
    };
  },
});
</script>

<style scoped>
</style>
