<template>
  <div
    style="min-height: 270px"
    class="
      flex
      items-stretch
      sm:flex-row
      flex-col
      max-w-xl
      min
      p-6
      border-2 border-purple-500
      mx-auto
      rounded-xl
    "
  >
    <div class="w-full sm:w-56 sm:h-auto h-44">
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        alt=""
        class="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div class="flex w-full pl-6">
      <div class="flex flex-col w-full items-baseline">
        <h3 class="w-full flex-1 text-2xl font-semibold mb-2.5">
          {{ activity.activity }}
        </h3>
        <div class="w-full flex font-semibold mb-4">
          <span class="leading-4 w-32"> Accessibility : </span>
          <div
            class="
              flex-1
              h-4
              ml-1
              bg-purple-100
              rounded-md
              p-0.5
              overflow-hidden
            "
          >
            <div
              :style="{
                width: activity.accessibility * 100 + '%',
              }"
              class="h-full bg-purple-500 rounded-md"
            ></div>
          </div>
        </div>
        <div class="w-full flex font-semibold mb-4">
          <span class="leading-4 w-32"> Price : </span>
          <div
            class="
              flex-1
              w-1/4
              h-4
              ml-1
              bg-purple-100
              rounded-md
              p-0.5
              overflow-hidden
            "
          >
            <div
              :style="{
                width: activity.price * 100 + '%',
              }"
              class="h-full bg-purple-500 rounded-md"
            ></div>
          </div>
        </div>
        <div class="flex justify-between items-center w-full">
          <div
            class="
              py-1
              px-2
              border-2
              font-bold
              text-sm text-purple-500
              bg-purple-100
              capitalize
              rounded-md
            "
          >
            {{ activity.type }}
          </div>
          <div v-if="activity.participants === 1" class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            {{ activity.participants }} Participant
          </div>
          <div v-else class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
            {{ activity.participants }} Participants
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    activity: {
      required: true,
      type: Object,
    },
  },
});
</script>
