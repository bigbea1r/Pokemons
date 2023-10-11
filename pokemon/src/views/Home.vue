<template>
  <div id="home">
    <input type="text" id="searchInput" v-model="input_pokemon_id"> 
    <button type="button" v-on:click="search">Найти</button>
  </div>

  <div id="searchResults">
    <template v-if="searchResults.length > 0">
      <h1 v-for="item in searchResults" :key="item.name" v-if="item.name">{{ item.name }}</h1>
      <img v-if="img" v-bind:src="img" alt="">
      <p>Рост: <span>{{ height }} дюймов</span></p>
      <p>Вес: <span>{{ weight }} фунтов</span></p>
      <p>Тип атаки: <span>{{ charge }}</span></p>
      <p>Уровень: <span>{{ experience }}</span></p>
    </template>
    <template v-else>
      <p>Нет результатов поиска</p>
    </template>
  </div>
</template>

<script>
export default {
data() {
  return {
    searchResults: [],
    experience: '',
      charge: '',
      height: '',
      weight: '',
      name: '',
      input_pokemon_id: ''
  }
},
mounted() {
  document.getElementById('searchInput').addEventListener('input', (event) => {
    this.input_pokemon_id = event.target.value;
  });
},
methods: {
  search() {
  this.searchResults = [];
  this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.input_pokemon_id}`)
      .then(response => {
      this.searchResults = response.data;
      this.experience = response.data.base_experience;
      this.height = response.data.height;
      this.weight = response.data.weight;
      if (response.data.types && response.data.types.length > 0) {
        this.charge = response.data.types[0].type.name;
      } else {
        this.charge = '';
      }
      if (response.data.sprites) {
        this.img = response.data.sprites.front_default;
      } else {
        this.img = '';
      }
      console.log(this.searchResults);
      document.querySelector('#searchResults').style.display = 'block';
    })
    .catch(error => {
      let b = document.createElement("h2");
      b.innerText = "Ну всё пиздец, сломал!!!";
      let a = document.getElementById("home");
      a.appendChild(b);
      console.error(error);
    });
},
}
}
</script>

<style>
#home{
color: red;
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
margin: -30px;
}
</style>