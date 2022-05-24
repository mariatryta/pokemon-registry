<template>
  <section class="grid sm:grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
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
      require: true,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
