<template>
  <main class="min-h-screen pb-20">
    <div
      class="flex flex-col md:flex-row mb-10 md:mb-20 justify-between items-center"
    >
      <div class="flex flex-col md:flex-row items-center w-full mb-3 md:mb-0">
        <Search @submitSearch="searchData"> </Search>
        <Sort
          @updateSort="sortData"
          class="md:ml-12 mt-3 md:mt-0 w-full md:w-1/5"
        ></Sort>
      </div>
      <div class="flex items-center justify-between md:justify-end w-full">
        <PaginationOptions
          @updatePagination="updatePagination"
        ></PaginationOptions>
        <Pagination
          :currentPage="currentPage"
          @updatePage="updatePage"
        ></Pagination>
      </div>
    </div>

    <Grid
      v-if="data"
      :data="filteredData ? filteredData : data"
      class="mb-20"
    ></Grid>

    <Pagination
      :currentPage="currentPage"
      @updatePage="updatePage"
      class="flex justify-end"
    ></Pagination>
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
      const searchedResults = [...this.data.results].filter((pokemon) => {
        const searchedAbilities = pokemon.abilities.filter((a) => {
          return a.ability.name.includes(val);
        });

        return searchedAbilities.length > 0 || pokemon.name.includes(val);
      });

      this.filteredData = { ...this.data, results: searchedResults };
    },

    sortByName(x, y) {
      return x.name.localeCompare(y.name);
    },

    sortData(type) {
      let sortedResults = [];

      if (type !== "name") {
        sortedResults = [...this.data.results].sort(function (a, b) {
          return a[type] - b[type];
        });
      } else {
        sortedResults = [...this.data.results].sort(this.sortByName);
      }

      sortedResults.forEach((res) => console.log(res[type]));

      this.data = { ...this.data, results: sortedResults };
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
