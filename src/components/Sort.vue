<template>
  <VSelect
    label="Sort by"
    :items="sortByValues"
    @changedValue="updateValue"
    :value="value"
  ></VSelect>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      sortByValues: [
        {
          id: "weight",
          value: "weight",
          label: "Weight",
        },

        {
          id: "height",
          value: "height",
          label: "Height",
        },
        {
          id: "name",
          value: "name",
          label: "Name",
        },
      ],
    };
  },
  methods: {
    updateValue(v) {
      this.value = v;
      this.$emit("updateSort", this.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
