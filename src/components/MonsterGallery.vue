<template>
  <div class="gallery">

      <div class="monster_gallery">
        <MonsterCard 
            v-for="monster in monsterOrganizedDate" :key="monster.id"
            :name="monster.name"
            :species="monster.species"
            :ID="(monster.id).toString()"/>
      </div>

  </div>
</template>

<script >
import MonsterCard from './MonsterCard.vue'
import getMonsterData from '@/api/mhw-db.js'

  export default {
    name: 'MonsterGallery',
    components: {
        MonsterCard
    },

    computed:{
        monsterOrganizedDate: function() {
            const field = this.monsterSortType
            let organizedData = this.monsterData

            const search = this.search.length > 0 ? true : false
            const searchName = (a) => a.name.toLowerCase().includes(this.search.toLowerCase())
            const searchSpecies = (a) => a.species.toLowerCase().includes(this.search.toLowerCase())

            const comparator = (a,b) => a[field].localeCompare(b[field])

            if (search)
                organizedData = organizedData.filter(searchName || searchSpecies)
            
            organizedData = organizedData.sort(comparator)
            return organizedData
        }
    },

    data() {
        return {
            monsterData: [],
            search: localStorage.getItem("search") || "",
            monsterSortType: localStorage.getItem("monsterSortType") || "name",
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
	.gallery {
        display: flex;
		flex-wrap: wrap;
        justify-content: center;
	}  
</style>

