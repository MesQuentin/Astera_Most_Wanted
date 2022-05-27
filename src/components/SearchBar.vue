<template>

      <div>
            <input type="text" v-model="search" placeholder=" What are you hunting today ?">
            <button id="reset_search" v-if="search" @click="cleanSearch">X</button>
      </div>

</template>

<script>
    export default {
        name: 'SearchBar',
        props: {
            search: {type: String, required: true}
        },

        watch: {
            search: function(newSearch) {
                localStorage.setItem("search", newSearch)
            }
        },

        data(){
        return {
            searchContent: this.search,
            }
        },


        methods: {
            cleanSearch: function() {
                this.search = ""
            },

            emitSearchState: function(event) {
                this.$emit("update:search", event.target.value)         
            }
        }

    }
</script>

<style>
    #reset_search {
        flex-direction: row;
        font-weight: 600;
    }
</style>