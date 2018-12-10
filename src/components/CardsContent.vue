//Cards
<template>
    <div :class="{ cardsContent: true}">
        <h1 class="pageIdentifier">{{currentDeck}}</h1>
        <div class="stuff" :class="{blur: isBlurred }">
            <h1>{{currentDeck}}</h1>
            <h2 v-if="!cardList.length">Click the "+" Symbol to add a card to the Deck.</h2>
            <ul class="cards" >
                <Card 
                    v-for="(card, i) in cardList"
                    :key="i"
                    @click="() => openDeckCards(i)"
                    :cardTitle="card.front"
                    :cardId="card.id"
                    :cardBack="card.back"
                    :currentDeck="currentDeck"
                    :currentDeckId="currentDeckId"
                    :currentCard="currentCard"
                    :deleteThisBitch="deleteCard"
                />
            </ul>
            <div class="addit">
                <img class = "newit" 
                src="../assets/plus.png" 
                alt="Add New Card"
                @click="showCardModal"
                >
            </div>
        </div>
        <CardModal
        :currentDeckId="currentDeckId"
        :currentDeck="currentDeck"
        :onSubmitCard="createNewCard"
        :visible="newCardModalShown"
        />
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import CardModal from '@/components/CardModal.vue'
import Snotify from 'vue-snotify';
import * as Api from '@/api/Api.js'
export default {
    components:{
        Card,
        CardModal,
    },
    name: 'CardsContent',
    props:{
        currentDeck: {
            type: String,
            default: '',
        },
        currentDeckId: {
            type: String,
            required: true,
        },
        currentCard: {
            type: String,
            default: '',
        },
        newCard: {
            type: Function,
            default: () => {},
        },
    },
    methods: {
        cardDeletedNotification(){
            this.$snotify.error(
                "Card removed from "+this.currentDeck,
                'Card removed!',{
                    timeout: 2000,
                    pauseOnHover: true
                }
            );
        },
        deleteCard(cardId){
            Api.deleteCard(cardId)
                .then(()=>{
                    console.log("Card Deleted.")
                    this.cardDeletedNotification();
                    const cardIndex = this.cardList.findIndex(card => card.id === cardId);
                    this.cardList.splice(cardIndex, 1);
                });
        },
        showCardModal(){
            
            this.newCardModalShown=true;
        },
        createNewCard(front, back, parentId) {
            const card = {
                front: front,
                back: back,
                parentId: parentId,
            };
            Api.addCard(card).then((docRef)=>{
                console.log("Aye Aye, Captain!! New Card added: ["+front+"] to deck:["+this.currentDeck+"].");
                // Update locally
                card.id = docRef.id;
                this.cardList.push(card);
                
                this.isBlurred = false;
                // Hide modal
                this.cardAddedNotification(this.currentDeck);
                this.newCardModalShown = false;
            }).catch(function(error){
                console.error("Error adding card: ", error);
                // cardErrorNotification
            });    
        },
        openNewCardModal(){
            this.isBlurred = true;
            console.log("Opening New Card Modal, Sir!")
            this.newCardModalShown=true;
        },
        cardAddedNotification(currentDeck){
            this.$snotify.success(
                "Card Added to "+currentDeck,
                'Card Added!',{
                    timeout: 2000,
                    pauseOnHover: true
                }
            );
    },
    },
    data(){
        return{
            title: "Ahoy",
            cardList: [],
            newCardModalShown: false,
            isBlurred:false, 
            // subList: ["Testing One","Testing Two","Testing Three"],
        }
    },
    created(){
        //TEST CARDS    
        // this.subList = [{
        //     title: "Banana"
            
        // }, {
        //     title: "Peach"
            
        // }];
        this.cardList = [];
        Api.getCards(this.currentDeckId)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const card = doc.data();
                    card.id=doc.id;
                    this.cardList.push(card);
                });
            }); 
    },

        
}

</script>
<style lang="scss" scoped>
    .pageIdentifier{
        position: fixed;
        top: 180px;
        right: -10px;
        font-size: 75px;
        opacity: .5;
        color: white;
        
        transform: rotate(-90deg);
    }
  .blur{
    filter: blur(4px);
  }
    .addit{
        padding: 100px 10px;
        &:hover{
            
        }
    }
    .cards{

        width: 80%;
        margin: auto;
        padding: none;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        
        li{
            &:hover{
                cursor: pointer;
                
            }
            margin: 0 30px;
        }
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
            //box-shadow: 0px 0px 10px 10px rgba(255,255,255,.6);
        }
    }
</style>
