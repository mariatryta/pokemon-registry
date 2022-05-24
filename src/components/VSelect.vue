<template>
  <label class="relative" for="sort">
    <span class="sr-only"> Sort </span>

    <select
      class="py-3 px-5 font-medium border-gray-200 focus:outline-none focus:border-indigo-600 focus:z-10 hover:bg-gray-50 focus:ring-0 w-full"
      id="sort"
      name="sort"
      :value="value"
      @input="$emit('changedValue', $event.target.value)"
    >
      <option disabled value="" selected>{{ label }}</option>
      <option v-for="item in items" :key="item.id" :value="item.value">
        {{ item.label }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  emits: ["changedValue"],
  props: {
    items: {
      type: Array,
      default: [],
    },
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      require: true,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
