<template>
    <div class="decksContent">
        <h2 v-if="!deckList.length">Click the "+" Symbol to add a deck.</h2>
        <ul class="decks" v-else>
            <Deck
                :handleClick="() => handleDeck(deck.title, deck.id)"
                v-for="(deck, i) in deckList"
                :key="i"
                :deckId="deck.id"
                :deckTitle="deck.title"
                :currentDeck="currentDeck"
                :currentDeckId="currentDeckId"
                :currentCard="currentCard"
            />
            <li class="addit">
                <img class = "newit" 
                src="../assets/plus.png" 
                alt="Add New Deck"
                @click="showModal"
                >
            </li>
        </ul>
        <Modal
            buttonText="Create New Deck"
            :onSubmit="createNewDeck"
            text="What would you like to call the new deck?"
            deckName=""
            :visible="createNewDeckModalVisible"/>
    </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import Deck from '@/components/Deck.vue'
import * as Api from '@/api/Api.js'
export default {
    components:{
        Deck,
        Modal,
    },
    name: 'DecksContent',
    data(){
        return{
            title: "Ahoy",
            deckList: [],
            createNewDeckModalVisible: false,
            // deckList: ["Testing One","Testing Two","Testing Three"],
        }
    },
    props:{
        currentDeck: "",
        currentDeckId: "",
        currentCard:"",
        openDeck: {
            type: Function,
            default: () => {},
        },
    },
    methods:{
        showModal(){
            this.createNewDeckModalVisible = true;

        },
        deckAddedNotification(currentDeck){
            this.$snotify.success(
                this.currentDeck+" added to your Decks.",
                'Deck Added!',{
                    timeout: 2000,
                    pauseOnHover: true
                }
            );
        },
        createNewDeck(value) {
            const deck= {
                title: value,
            }
            Api.addDeck(deck).then(()=>{
                this.deckAddedNotification(value);
                console.log("Great Scott!! New Deck spotted: "+value);
                // this.newDeckTitle = deckName;
                this.isBlurred = false;
                // Display decks content page
                if (this.pagecontent!='DecksContent'){
                    this.pageContent = 'DecksContent';
                    console.log("Dive! Dive! Dive!");
                    this.createNewDeckModalVisible = false;
                }
                // Hide modal
                this.createNewDeckModalVisible = false;
                this.deckList.push(deck);
             });
        },
        handleDeck(name,id){
            //test handler
            console.log("Deck handled.");
            this.openDeck(name,id);
        }
    },
    created(){
        //TEST DECKS
        // this.deckList = [{
        //     title: "Banana"
        // }, {
        //     title: "Peach"
        // }];

        //empty decks 
        this.deckList = [];
        //Get decks from firebase
        Api.getDecks()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const deck = doc.data();
                    deck.id = doc.id;
                    this.deckList.push(deck);
                });
            }); 
    },
}

</script>
<style lang="scss" scoped>
    .addit{
        padding: 50px 10px;
    }
    .newit{
        
        transition: all .2s;
        border-radius: 50%;
        opacity: .6;
        width: 40px;
        &:hover{
            background: lightgreen;
            opacity: 1;
            box-shadow: 0px 0px 10px 10px rgba(255,255,255,.6);
        }
    }
    .decks{

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
