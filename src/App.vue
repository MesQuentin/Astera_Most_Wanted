<template>
  <div id="app">
    <header>
      <img alt="Astera Most Wanted Logo" src="./assets/logo.png">
    </header>

    <MonsterGallery />

    <footer>
      <div class="bot_text"> MESQUITA Quentin - 2022 - IMAC 2 </div>
    </footer>
  </div>
</template>


<script>
import MonsterGallery from './components/MonsterGallery.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    MonsterGallery
  }
}
</script>

<style>

#app {
  
  font-family: Helvetica, Monster Hunter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #b26e87;
  background: black;
} 
  
.header, .footer {
    width: 100%;
    background-color: black;
    align-items: center;
}

.footer {
    height: 5vh;
    margin-top: 20px;
    text-align:center ;
}

.bot_text {
    color: #f2f2f2;
    width: 100%;
    text-align: center;
}
</style>
