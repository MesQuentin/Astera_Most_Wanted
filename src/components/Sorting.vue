<template>
    <div class="sorting">

        <label for="monster-sort">Sort by :
            <select v-model="monsterSortType" id="monster-sort">
                <option value="name"> By name (A-Z)</option>
                <option value="species"> By species (A-Z)</option>
            </select>
        </label>

    </div>
</template>

<script>
export default {
    name:'Sorting',
    data(){
        return {
            monsterSortType: this.monsterSortType || "name"
            }
    },


    

    watch: {
        monsterSortType: function(newSortType) {
            localStorage.setItem("monsterSortType", newSortType)
        }
    },
    methods: {
        emitSortType: function(event) {
            this.$emit("update:monsterSortType", event.target.value)
        }
    }
}
</script>

<style>
</style>