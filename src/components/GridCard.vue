<template>
  <article
    class="relative p-8 border border-gray-100 bg-white shadow-xl rounded-xl flex flex-col text-center items-center"
  >
    <img
      class="object-contain"
      :src="item.sprites.other['official-artwork'].front_default"
      v-if="item"
    />

    <h2 class="mt-4 text-xl font-bold text-gray-900 capitalize">
      {{ item.name }}
    </h2>
    <ul v-if="item" class="mt-2 text-sm flex-1">
      <li><span>Height:</span> {{ item.height }}</li>
      <li><span>Weight:</span> {{ item.weight }}</li>
      <li>
        <span class="block mb-1">Abilities:</span>
        <ul>
          <li
            v-for="ability in item.abilities"
            :key="ability.ability.name"
            class="inline-block bg-blue-500 border-blue-500 border text-white lowercase px-1 py-0.5 mr-1 mb-1 rounded text-[12px] font-medium"
          >
            {{ ability.ability.name }}
          </li>
        </ul>
      </li>
    </ul>

    <VButton
      role="link"
      :aria-label="`Read more about {{item.name}}`"
      @click="$router.push(`/details/${item.name}`)"
      class="mt-1"
      >read more</VButton
    >
  </article>
</template>

<script>
import fetchData from "@/helpers/fetchData.js";

export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
