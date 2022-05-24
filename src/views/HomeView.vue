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

    <Grid v-if="data" :data="data"></Grid>
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
    };
  },
  methods: {
    updatePagination(v) {
      this.limit = v;
      this.currentPage = 0;
      this.refreshData();
    },
    updatePage(newPage) {
      this.currentPage = newPage;
      this.refreshData();
    },

    refreshData() {
      this.loading = true;

      fetchData(
        `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${
          this.limit
        }&offset=${this.limit * this.currentPage}`
      )
        .then((data) => {
          this.data = data;
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
    fetchData(
      `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${this.limit}&offset=0`
    )
      .then((data) => {
        console.log(data);
        this.data = data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped></style>
