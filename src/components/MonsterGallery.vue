<template>
  <div class="monster_gallery">
    <div v-for="monster in monsterData" :key="monster.id">
        <MonsterCard 
            :name="monster.name"
            :species="monster.species"
            :ID="monster.id"/>
    </div>
  </div>
</template>


<script>
import MonsterCard from './MonsterCard.vue'
import getMonsterData from '@/api/mhw-db.js'

  export default {
    name: 'MonsterGallery',
    components: {
        MonsterCard,
    },

    data() {
        return {
            monsterData: []
        }
    },

    created: function() {
        this.retrieveMonsterData()
    },

    methods: {
        async retrieveMonsterData() {
            this.monsterData = await getMonsterData()
        }
    }
  }

  
</script>


<style>
	.monster-gallery {
        display: flex;
		flex-wrap: wrap;
		width:90%;
        justify-content: space-evenly;
		gap: 10px;
	}
</style>