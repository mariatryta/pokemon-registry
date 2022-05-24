<template>
  <div class="flex">
    <VButton
      class="ml-3"
      @click="$emit('updatePage', currentPage - 1)"
      :disabled="currentPage === 0"
    >
      Prev
    </VButton>
    <VButton class="ml-3" @click="$emit('updatePage', currentPage + 1)">
      Next
    </VButton>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped></style>
