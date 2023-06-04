<template>
  <div class="d-flex justify-content-center align-items-center">

    <div class="a d-flex justify-content-center align-items-center">

      <div class="b d-flex justify-content-center align-items-center">
        <span class="">

          <div class="c d-flex justify-content-center align-items-center">

            <PokemonView />

          </div>

          <div class="row justify-content-between">

            <div class="circle1 col-sm-6"></div>

            <span class="col-sm-6 contentFranjas">
              <div class="franja1"></div>
              <div class="franja2"></div>
              <div class="franja3"></div>
            </span>

          </div>

        </span>
      </div>



    </div>

  </div>
</template>

<script>

import PokemonView from "../views/PokemonView.vue"
export default {
  name: 'HomeView',
  components: {
    PokemonView
  }
}
</script>

<style scoped>
.a {
  background-color: #FE0165;
  border: 5px solid black;
  height: 700px;
  width: 500px;

}

.b {
  background-color: #FFFFFE;
  border: 3px solid black;
  height: 400px;
  width: 400px;
  border-end-start-radius: 70px;
}

.c {
  background-color: #99CA98;
  border: 3px solid black;
  border-radius: 15px;
  height: 290px;
  width: 290px;
}

.circle1 {
  background-color: #FE0101;
  margin-top: 15px;
  border: 3px solid black;
  border-radius: 50px;
  height: 40px;
  width: 40px;
}

.franja1 {
  background-color: #FE0101;
  margin-top: 15px;
  border: 3px solid black;
  width: 70px;
}

.franja2 {
  background-color: #FE0101;
  margin-top: 15px;
  border: 3px solid black;
  width: 70px;
}

.franja3 {
  background-color: #FE0101;
  margin-top: 15px;
  border: 3px solid black;
  width: 70px;
}
.contentFranjas {
  width: fit-content;
  margin-right: 0%;
}

</style>
