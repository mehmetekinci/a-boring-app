<template>
  <div class="">
    <h1 class="text-center my-10">This is an Home page</h1>
    <ActivityCard v-if="activity" :activity="activity" />
    <button
      class="
        flex
        mx-auto
        mt-10
        border-2 border-purple-500
        py-3
        px-6
        rounded-xl
        bg-purple-500
        text-white
        hover:bg-purple-100
        hover:text-purple-500
      "
      @click="getData()"
    >
      Get random activity
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ActivityCard from "../components/ActivityCard.vue";
import { getRandomActivity } from "../libs/getActivity";

export default defineComponent({
  name: "Home",
  components: { ActivityCard },
  setup() {
    const activity = ref(null);

    const getData = async () => {
      activity.value = await getRandomActivity();
    };

    // const getActivity = async () =>
    //   await fetch("http://www.boredapi.com/api/activity/")
    //     .then((response) => response.json())
    //     .then((data) => (activity.value = data));

    onMounted(() => {
      getData();
    });

    return { activity, getData };
  },
});
</script>
