<template>
  <section class="grid">
    <GridCard
      v-for="item in data.results"
      :key="item.name"
      :item="item"
    ></GridCard>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
