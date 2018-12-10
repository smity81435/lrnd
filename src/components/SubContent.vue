//Subjects Page
<template>
    <div class="subsContent">
        <h2 v-if="!subList.length">Click the "+" Symbol to add a deck.</h2>
        <ul class="decks" v-else>
            <Subject 
            v-for="(sub, i) in subList"
            :key="i"
            @click="() => openDeckSubjects(i)"
            :deckTitle="sub.title"
            
            />
        </ul>
    </div>
</template>

<script>
import Subject from '@/components/Subject.vue'
import * as Api from '@/api/Api.js'
export default {
    components:{
        Subject,
    },
    name: 'SubContent',
    data(){
        return{
            title: "Ahoy",
            subList: [],
            // subList: ["Testing One","Testing Two","Testing Three"],
        }
    },
    created(){
        //TEST SUBS
        // this.subList = [{
        //     title: "Banana"
            
        // }, {
        //     title: "Peach"
            
        // }];
        this.subList = [];
        Api.getSubs(deckName)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const deck = doc.data();
                    deck.id = doc.id;
                    this.subList.push(deck);
                });
            }); 
    },

        
}

</script>
<style lang="scss" scoped>
    .subs{

        width: 80%;
        margin: auto;
        padding: none;
        list-style: none;
        display: flex;
        
        li{
            &:hover{
                cursor: pointer;
                
            }
            margin: 0 30px;
        }
    }
</style>
