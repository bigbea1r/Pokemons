<template>
  <div class="home">
    <input type="text" id="searchInput">
    <button type="button" @click="search">Найти</button>
  </div>
  <div id="searchResults">
    <h1 v-for="item in searchResults" :key="item.name">{{ item.name }}</h1>
    <img v-bind:src="img" alt="">
    <p>Рост: <span>{{ height }} дюймов</span></p>
    <p>Вес: <span>{{ weight }} фунтов</span></p>
    <p>Тип атаки: <span>{{ charge }}</span></p>
    <p>Уровень: <span>{{ experience }}</span></p>
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
    document.getElementById('searchInput').addEventListener('input', (event) => {
      this.pokemon_id = event.target.value;
    });
  },
  computed: {
    pokemon_id() {
      return document.getElementById('searchInput').value;
    }
  },
  methods: {
    search() {
      this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon_id}`)
        .then(response => {
          this.searchResults = response.data;
          this.experience = response.data.base_experience;
          this.charge = response.data.types[0].type.name;
          this.height = response.data.height;
          this.weight = response.data.weight;
          this.img = response.data.sprites.front_default;
          console.log(this.searchResults);
          document.querySelector('#searchResults').style.display  = 'block';
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style>
.home{
  margin: 15px;
}
span{
  color:#646cff;
}
#searchResults{
    display: none;
}
img {
  width:150px;
}
</style>