<template>
  <div class="flex sm:flex-row flex-col-reverse sm:max-h-full">
    <div class="sm:w-3/12 p-5 mt-7 sm:mt-0 bg-purple-50 sm:h-full">
      <Filter @search:activity="searchActivity" class="max-w-xs mx-auto" />
    </div>
    <div class="sm:w-9/12">
      <h1 class="text-center sm:my-20 my-10 text-3xl px-10">
        Do you need help? Use our helpful filter! <br />
        Get an Funny activity!
      </h1>
      <ActivityCard v-if="activity" :activity="activity" class="sm:w-10/12" />
    </div>
  </div>
</template>

<script lang="ts">
import Activity from "@/types/Activity";
import FilteredActivity from "@/types/FilteredActivity";
import { defineComponent, ref } from "vue";
import ActivityCard from "../components/ActivityCard.vue";
import Filter from "../components/Filter.vue";
import { getActivity } from "../libs/getActivity";

export default defineComponent({
  components: { ActivityCard, Filter },
  setup() {
    const activity = ref<Activity>();

    const searchActivity = async (activityInfos: FilteredActivity) => {
      activity.value = await getActivity(
        activityInfos.activityType.value,
        activityInfos.participants.value,
        activityInfos.prices.value,
        activityInfos.accessibilities.value
      );
    };

    return { activity, searchActivity };
  },
});
</script>

<style scoped>
</style>