<template>
  <main class="min-h-screen pb-20">
    <section v-if="data">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
          <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              class="absolute inset-0 object-cover w-full h-full"
              :src="data.sprites.other['official-artwork'].front_default"
              alt=""
            />
          </div>

          <div class="lg:py-16">
            <h1 class="text-3xl font-bold sm:text-4xl capitalize mb-6">
              {{ data.name }}
            </h1>

            <p class="mb-3">Statistics</p>
            <ul class="mb-3">
              <li v-for="stat in data.stats" :key="stat.stat.name">
                <span class="font-medium"> {{ stat.stat.name }}:</span>
                <span class="font-light ml-3"> {{ stat.base_stat }}</span>
              </li>
            </ul>

            <p class="mb-3">Other Information</p>
            <ul class="mt-2 text-sm flex-1">
              <li>
                <span>Height:</span>
                <span class="font-light ml-3"> {{ data.height }}</span>
              </li>
              <li>
                <span>Weight:</span>
                <span class="font-light ml-3"> {{ data.weight }}</span>
              </li>
              <li>
                <span>Base experience:</span>
                <span class="font-light ml-3"> {{ data.base_experience }}</span>
              </li>
              <li>
                <span>Species:</span>
                <span class="font-light ml-3 capitalize">
                  {{ data.species.name }}</span
                >
              </li>

              <li class="flex items-center mt-3">
                <span class="inline-block mb-1 mr-1">Abilities:</span>
                <ul>
                  <li
                    v-for="ability in data.abilities"
                    :key="ability.ability.name"
                    class="inline-block bg-blue-500 border-blue-500 border text-white lowercase px-1 py-0.5 mr-1 mb-1 rounded text-[12px] font-medium"
                  >
                    {{ ability.ability.name }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import fetchData from "@/helpers/fetchData.js";

export default {
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    const name = this.$route.params.id;

    fetchData(`${import.meta.env.VITE_POKEMON_API}/pokemon/${name}`).then(
      (res) => (this.data = res)
    );
  },
};
</script>

<style lang="scss" scoped></style>
