<template>
  <div id="searchResults">
      <h1 v-for="item in searchResults" :key="item.name">{{ item.name }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: [],
      postData: {
        userId: '',
        title:  '',
        body:   ''
      }
    }
  },
  mounted() {
    this.$axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        this.searchResults = response.data.results;
      })
      .catch(error => {
        console.error(error);
      })
  },
  methods: {
    search() {
      //var searchText = document.querySelector('#searchInput').value;

      // Фильтруем результаты поиска
      this.searchResults = this.searchResults.filter(item => item.name.toLowerCase().includes.toLowerCase());

      // Очищаем поле ввода после поиска
      //document.querySelector('#searchInput').value = '';
    }
  }
}

</script>
<!-- <style>
#searchResults{
    display: block;
}
</style> -->