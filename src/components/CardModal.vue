//This modal appears when the user clicks the "+" on the cards page
<template>
    <div class="cardModal" v-show="visible">
        <h2>Add New Card to {{currentDeck}}</h2>
        <p>Card Front:</p>
        <input type="text"
         name="front"
         v-model="frontText"
         required
         placeholder="Front of Card"

         >
        <p>Card Back: </p>
        <textarea type="text"
        rows="4"
        cols="50"
        maxlength="140"
        placeholder="Put the text for the back of the card here!"
         name="back"
         v-model="backText"
         v-on:keyup.enter="handleSubmit"
         required
         ></textarea>
         <button type="submit" @click.prevent="handleSubmit">
             Add Card to Deck
         </button>
    </div>
</template>
<script>
    export default{
        name: "CardModal",
        props:{
            currentDeckId:{
                type: String,
                required: true,
            },
            currentDeck:{
                type: String,
                required: true,
            },onSubmitCard: {
                type: Function,
                default: () => {},
            },visible: {
            type: Boolean,
                default: false,
                required: false,
            }
        },data(){
            return{
                frontText:"",
                backText:"",
            }
        },methods:{
            handleSubmit(){
                this.onSubmitCard(this.frontText,this.backText,this.currentDeckId);
            },
        },
    }
</script>
<style lang="scss">
// .question{
//     height: 50%;
//     margin: auto;
//     p{
//         font-weight: 700;
        
//     }
// }
.cardModal {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: 500px;
    height: 60%;
    background-color: rgba(0,0,0,.9);
    margin: auto;
    border-radius: 10px;
    
    box-shadow: 0px 0px 800px 400px rgba(0,0,0,.8);
    input[type=text]{
        background: none;
        width: 75%;
        height: 30px;
        font-size: 20px;
        font-weight: 700;
        color: white;
        text-align: center;
        margin: auto;
        border: none;
        border-bottom: 2px solid rgba(255,255,255,.6); 
        &:focus{
            outline: none;
        }
        &::placeholder{
            color: rgba(144, 238, 144, 0.262);
            font-family: Avenir;
        }
    }
    textarea{
        padding: 10px 5px;
        color: white;
        font-weight: 700;
        font-family: Avenir;
        font-size: 20px;
        margin: auto;
        width: 90%;
        height: 200px;
        border-radius: 5px;
        background: rgba(107, 72, 233, 0.242);
        &:focus{
            box-shadow:0px 0px 5px 5px lightgreen;
        }
        &::placeholder{
            color: rgba(144, 238, 144, 0.262);
            font-family: Avenir;
        }
    }
    button{
        width: 50%;
        height: 40px;
        margin: 15px auto;
        background: none;
        border-radius: 10px;
        color: white;
        font-weight: 700;
        font-size: 15px;
        transition: all .2s;
        &:hover{
            background: rgba(144, 238, 144, 0.79);
            cursor: pointer;

        }
    }
}
    
</style>