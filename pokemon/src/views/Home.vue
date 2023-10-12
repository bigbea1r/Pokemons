<template>
  <div id="home">
      <input type="text" id="searchInput" v-model="pokemon_id" @keyup.enter="search" >
  <button type="button" @click="search">Найти</button>
</div>
<div id="searchResults">
  <h1 v-for="item in searchResults">{{ item.name }}</h1>
  <img v-bind:src="imgUrl" alt="">
  <p>Рост: <span>{{ height }} дюймов</span></p>
  <p>Вес: <span>{{ weight }} фунтов</span></p>
  <p>Тип бойца: <span>{{ attackType }}</span></p>
  <!-- <p>Уровень: <span>{{ level }}</span></p> -->
</div>
</template>
<script>
export default {
  data() {
  return {
    searchResults: [],
    level: '',
    attackType: '',
    height: '',
    weight: '',
    imgUrl: '',
    pokemon_id: '',
  }
},
mounted() {
  this.getPokemonId();
  this.search();
  document.getElementById('searchInput').addEventListener('input', (event) => {
    this.pokemon_id = event.target.value;
  });
},
methods: {
  getPokemonId() {
    this.pokemon_id = Math.floor(Math.random() * 1018);
  },
  search() {
    this.searchResults = [];
    this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemon_id}`)
      .then(response => {
        if (response.data.name == null) {
          this.searchResults = [{ name: 'Ну всё пиздец, сломал!!!' }];
          return;
        }
        this.searchResults = [response.data];
        this.level = response.data.base_experience;
          this.attackType = response.data.types[0].type.name;
        this.height = response.data.height;
        this.weight = response.data.weight;
        this.imgUrl = response.data.sprites.front_default;
        document.querySelector('#searchResults').style.display  = 'block';
      console.log(this.searchResults)
      })
      .catch(error => {
        document.querySelector('#searchResults').style.display  = 'none';
        let errorMessage = document.createElement("h2");
        errorMessage.innerText = "Ну всё пиздец, сломал!!!";
        let homeElement = document.getElementById("home");
        homeElement.appendChild(errorMessage);
        console.error(error);
      });
  }
}
}
</script>
<style>
#home {
color: red;
margin: 15px;
}

span {
color: #646cff;
}
#searchResults{
  display: none;
}
img {
width: 150px;
margin: -25px;
}
</style>