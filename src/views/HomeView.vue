<template>
  <main class="min-h-screen pb-20">
    <div class="flex mb-20 justify-between items-center">
      <div class="flex items-center">
        <Search @submitSearch="searchData"> </Search>
        <Sort></Sort>
      </div>
      <div class="flex items-center">
        <PaginationOptions
          @updatePagination="updatePagination"
        ></PaginationOptions>
        <Pagination
          :currentPage="currentPage"
          @updatePage="updatePage"
        ></Pagination>
      </div>
    </div>

    <Grid v-if="data" :data="filteredData ? filteredData : data"></Grid>
  </main>
</template>

<script>
import fetchData from "@/helpers/fetchData.js";

export default {
  data() {
    return {
      limit: 20,
      currentPage: 0,
      data: null,
      filteredData: null,
    };
  },
  methods: {
    updatePagination(v) {
      this.limit = v;
      this.currentPage = 0;
      this.fetchData();
    },
    updatePage(newPage) {
      this.currentPage = newPage;
      this.fetchData();
    },
    searchData(val) {
      const searchedData = [...this.data.results].filter((pokemon) => {
        const searchedAbilities = pokemon.abilities.filter((a) => {
          return a.ability.name.includes(val);
        });

        return searchedAbilities.length > 0 || pokemon.name.includes(val);
      });

      this.filteredData = { ...this.data, results: searchedData };
    },

    fetchData() {
      this.loading = true;
      this.filteredData = null;

      fetchData(
        `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${
          this.limit
        }&offset=${this.limit * this.currentPage}`
      )
        .then((data) => {
          let details = [];

          const promises = data.results.map((res) => {
            return fetchData(
              `${import.meta.env.VITE_POKEMON_API}/pokemon/${res.name}`
            );
          });

          Promise.all(promises).then((responses) => {
            details = responses;
            this.data = { ...data, results: details };
          });
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped></style>
