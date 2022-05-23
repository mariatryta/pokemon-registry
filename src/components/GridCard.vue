<template>
  <article
    class="relative p-8 border border-gray-100 bg-white shadow-xl rounded-xl flex flex-col text-center items-center"
  >
    <img
      class="object-contain"
      :src="itemDetails.sprites.other['official-artwork'].front_default"
      v-if="itemDetails"
    />
    <h2
      class="mt-4 text-xl font-bold text-gray-900 hover:border-b hover:border-b-sky-700 duration-150 ease-in-out"
    >
      <router-link
        class="after:content-[''] after:absolute after:top-0 after:left-0 capitalize"
        :to="`/details/${item.name}`"
        aria-describedby="card-description"
        >{{ item.name }}</router-link
      >
    </h2>
    <ul v-if="itemDetails" class="mt-2 text-sm">
      <li><span>Height:</span> {{ itemDetails.height }}</li>
      <li><span>Weight:</span> {{ itemDetails.weight }}</li>
      <li>
        <span class="block mb-1">Abilities:</span>
        <ul>
          <li
            v-for="ability in itemDetails.abilities"
            :key="ability.ability.name"
            class="inline-block bg-blue-500 border-blue-500 border text-white lowercase px-1 py-0.5 mr-1 mb-1 rounded text-[12px] font-medium"
          >
            {{ ability.ability.name }}
          </li>
        </ul>
      </li>
    </ul>
    <span class="sr-only" aria-hidden="true" id="card-description"
      >read more</span
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
  data() {
    return {
      itemDetails: null,
    };
  },
  beforeMount() {
    fetchData(
      `${import.meta.env.VITE_POKEMON_API}/pokemon/${this.item.name}`
    ).then((res) => (this.itemDetails = res));
  },
};
</script>

<style lang="scss" scoped></style>
