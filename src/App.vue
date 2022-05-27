<template>
  <div id="app">
    
    <Header />

    <div class="gallery-options">
      <SearchBar :search.sync="search"/>
      <Sorting :monsterSortType.sync="monsterSortType"/>
    </div>
    
    <MonsterGallery />
  
    <Footer />

  </div>
</template>


<script>
import Header from './components/Header.vue'
import MonsterGallery from './components/MonsterGallery.vue'
import SearchBar from './components/SearchBar.vue'
import Sorting from './components/Sorting.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    Header,
    MonsterGallery,        
    SearchBar,
    Sorting,
    Footer
  },
  data() {
    return {
        search: localStorage.getItem("search") || "",   
    }
  }
}
</script>

<style>

  html { 
    background: black; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  #app {
    font-family: Helvetica, Monster Hunter;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #b26e87;
  }

</style>
