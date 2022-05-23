<template>
  <main class="min-h-screen">
    <Search></Search>
    <PaginationOptions @updatePagination="updatePagination"></PaginationOptions>
    <Grid v-if="data" :data="data"></Grid>
  </main>
</template>

<script>
import fetchData from "@/helpers/fetchData.js";

export default {
  data() {
    return {
      limit: 20,
      offset: 0,
      currentPage: 1,
      data: null,
    };
  },
  methods: {
    updatePagination(v) {
      console.log(v);
      this.limit = v;
      this.refreshData();
    },
    refreshData() {
      fetchData(
        `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${
          this.limit
        }&offset=${this.offset}`
      )
        .then((data) => {
          console.log(data);
          this.data = data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    fetchData(
      `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${this.limit}&offset=${
        this.offset
      }`
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
