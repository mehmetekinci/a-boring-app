<template>
  <div
    class="
      h-20
      flex
      items-end
      space-x-7
      ml
      text-purple-500
      rounded-t-xl
      bg-white
      text-lg
      font-bold
      shadow-md
    "
  >
    <router-link
      class="ml-2 px-2 py-1 hover:bg-purple-500 hover:text-pink-50 rounded-t-xl"
      to="/"
      >Home</router-link
    >
    <router-link
      class="px-2 py-1 hover:bg-purple-500 hover:text-pink-50 rounded-t-xl"
      to="/advice"
      >Do you need some help?</router-link
    >

    <router-link
      class="px-2 py-1 hover:bg-purple-500 hover:text-pink-50 rounded-t-xl"
      to="/bookmarks"
      >Bookmarks</router-link
    >
  </div>
</template>