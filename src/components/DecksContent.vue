<template>
    <div class="decksContent">
        <h1 class="pageIdentifier">{{currentPage}}</h1>
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
                :deleteDeck="deleteThisDeck"
            />

        </ul>
        <div class="addit">
                <img class = "newit" 
                src="../assets/plus.png" 
                alt="Add New Deck"
                @click="showModal"
                >
            </div>
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
        currentDeck:{
            type: String,
            required: true,
            },
        currentDeckId:{
            type: String,
            required: true,
        },
        currentCard:{
            type: String,
            required: true,
        },
        currentPage:{
            type: String,
            required: true,
        },
        openDeck: {
            type: Function,
            default: () => {},
        },
    },
    methods:{

        showModal(){
            this.createNewDeckModalVisible = true;

        },
        deckAddedNotification(){
            this.$snotify.success(
                this.currentDeck+" added to your Decks.",
                'Deck Added!',{
                    timeout: 2000,
                    pauseOnHover: true
                }
            );
        },
        deckRemovedNotification(){
            this.$snotify.error(
                this.currentDeck+" removed from your Decks.",
                'Deck Removed!',{
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
                //console.log("Great Scott!! New Deck spotted: "+value);
                // this.newDeckTitle = deckName;
                this.isBlurred = false;
                // Display decks content page
                if (this.pagecontent!='DecksContent'){
                    this.pageContent = 'DecksContent';
                    //console.log("Dive! Dive! Dive!");
                    this.createNewDeckModalVisible = false;
                }
                // Hide modal
                this.createNewDeckModalVisible = false;
                this.deckList.push(deck);
             });
             
        },
        handleDeck(name,id){
            //test handler
            //console.log("Deck handled.");
            // this.currentDeckId = id;
            this.openDeck(name,id);
        },
        deleteThisDeck(deckId, deckTitle){
            //first ffind and kill children
            Api.killChildren(deckId);
            //then delete the deck
            Api.deleteDeck(deckId)
                .then(()=>{
                    //console.log("Deck and crew comletely destroyed, Captain!")
                    this.deckRemovedNotification(deckTitle);
                    //update display
                    const deckIndex = this.deckList.findIndex(deck => deck.id === deckId);
                    this.deckList.splice(deckIndex, 1);
                });
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

    .pageIdentifier{
        position: fixed;
        top: 180px;
        right: -50px;
        font-size: 75px;
        opacity: .5;
        color: white;
        
        transform: rotate(-90deg);
    }
    .addit{
        padding: 50px 10px;
    }
    .newit{
        
        transition: all .2s;
        border-radius: 50%;
        opacity: .6;
        width: 40px;
        &:hover{
            cursor: pointer;
            background: rgb(116, 190, 116);
            opacity: 1;
            box-shadow: 0px 0px 5px 5px rgba(255,255,255,.6);
        }
    }
    .decks{
        width: 75%;
        
        margin: auto;
        padding: none;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 40px;
        li{
            &:hover{
                cursor: pointer;
                
            }
            margin: 0 30px;
        }
    }
</style>
