<template>
  <header
    class="font-main flex bg-blue-100 px-10 items-center justify-center text-gray-800"
    :class="{ 'justify-between': viewName === 'details' }"
  >
    <router-link
      to="/"
      v-if="viewName === 'details'"
      class="hover:ring hover:ring-blue-300 focus:ring focus:ring-blue-300 focus:outline-none"
    >
      Go back
    </router-link>

    <router-link
      to="#main"
      class="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0"
      >Skip to main content</router-link
    >

    <div class="py-10 text-4xl">Pokemon registry</div>
    <div v-if="viewName === 'details'"></div>
  </header>

  <router-view class="px-10 bg-blue-100 font-main"></router-view>
</template>

<script>
export default {
  computed: {
    viewName() {
      return this.$route.name;
    },
  },
};
</script>
<style>
@import "@/assets/base.css";
@import "../node_modules/modern-normalize/modern-normalize.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap");
</style>
