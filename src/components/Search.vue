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
      class="w-3/5 flex-grow-0 p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm mr-3"
    />

    <VButton class="flex-shrink-0 w-2/5" type="submit"> Search </VButton>
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
