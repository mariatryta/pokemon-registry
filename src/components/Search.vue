<template>
  <form
    role="search"
    @submit.prevent="$emit('submitSearch', this.searchString)"
    class="flex"
  >
    <label for="search-field" class="sr-only">
      <span>Search</span>
    </label>

    <input
      v-model="searchString"
      id="search-field"
      type="text"
      class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm mr-3"
    />

    <VButton class="flex-1" type="submit"> Submit Search </VButton>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchString: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
