<template>
  <VSelect
    label="Paginate by"
    :items="sortByValues"
    @changedValue="updateValue"
    :value="value"
  ></VSelect>
</template>

<script>
export default {
  emits: ["updatePagination"],
  data() {
    return {
      value: "",
      sortByValues: [
        {
          id: 1,
          value: 10,
          label: 10,
        },

        {
          id: 2,
          value: 20,
          label: 20,
        },
        {
          id: 3,
          value: 50,
          label: 50,
        },
      ],
    };
  },
  methods: {
    updateValue(v) {
      this.value = v;
      this.$emit("updatePagination", this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
