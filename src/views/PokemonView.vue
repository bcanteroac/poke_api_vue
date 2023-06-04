<template>
    <div>
        <img :src="pokemonSprite" alt="">
        <p>{{ pokemonName }}</p>
    </div>
</template>

<script>

import axios from "axios";
export default {
  name: 'PokemonView',
  data() {
    return {
        pokemonSprite: '',
        pokemonName: ''
        
    }
  },
  mounted(){
    this.cargarPekom();
  },
  components: {
    // 
  },
  methods: {
    cargarPekom(){
        axios.get('https://pokeapi.co/api/v2/pokemon/6')
        .then(response => {
            console.log();
            this.pokemonSprite = response.data.sprites.front_default;
            this.pokemonName = response.data.forms[0].name;
        })
    }
  }
}
</script>

<style scoped>
.img {
    height: 300px;
    width: 300px;
}
</style>