import { Ref } from 'vue';

interface FilteredActivity {
  activityType: Ref<string>;
  participants: Ref<number>;
  prices: Ref<[number, number]>;
  accessibilities: Ref<[number, number]>;
}

export default FilteredActivity;
