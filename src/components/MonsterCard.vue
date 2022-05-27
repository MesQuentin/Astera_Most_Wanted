<template>
  <div class="monster_card">
    <div>
        <h2 class="name">{{name}}</h2>
    </div>

    <img class="icon" v-bind:src="'../assets/monster_icon/' + ID + '.jpg'"/>

    <div>
      <p class="species">{{species}}</p>
    </div>  
  </div>
</template>

<script>
  export default {
    name: 'MonsterCard',
    props: {
      name: {type: String, required: true},
      species: {type: String},
      ID: {type: String}
      },
  }


</script>


<style scoped>

  @font-face {
  font-family: 'Monster Hunter';
  src: url('../assets/font/MonsterHunterExpanded.woff') format('woff'),
   url('../assets/font/monsterhunterexpand.ttf') format('truetype');
  }  

  .monster_card {
    margin: 10px;
    height: 330px;
    width: 330px;
  }

  .monster_card:hover {
    box-shadow: 2px 2px 10px lightgrey;
  }

  .icon {
    max-width : 23%;
    height : auto;
  }

  .name {
    font-family: Monster Hunter;
    font-size: 50px;
    color: #fff5e3;
  }

  p {
    font-family: Helvetica;
    color: #b26e87;
  }

</style>