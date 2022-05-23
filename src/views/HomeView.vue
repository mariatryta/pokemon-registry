<template>
  <main class="min-h-screen">
    <Search></Search>
    <Sort></Sort>
    <Grid :data="data"></Grid>
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
  mounted() {
    fetchData(
      `${import.meta.env.VITE_POKEMON_API}/pokemon?limit=${this.limit}&offset=${
        this.offset
      }`
    )
      .then((data) => {
        this.data = data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped></style>
