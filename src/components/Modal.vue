<template>
    <div
        v-show="visible"
        :class="$style.modal">
        <div
        :class="$style.question"
        >
            <p>{{ text }}</p>
        </div>
        <input
            type="text" v-model="ModalDeckTitle"  v-on:keyup.enter="handleSubmit" name="ModalDeckTitle"/>
        <button type="submit" @click.prevent="handleSubmit">
            {{ buttonText }}
        </button>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        
        buttonText: {
            type: String,
            required: true,
        },
        onSubmit: {
            type: Function,
            default: () => {},
        },
        text: {
            type: String,
            default: '',
        },
        visible: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    data(){
        return{
            ModalDeckTitle: "",
        }
    },
    methods:{
        process: function(){
            alert(this.ModalDeckTitle);
        },
        handleSubmit(){
            this.onSubmit(this.ModalDeckTitle);
        }

    }
}
</script>

<style lang="scss" module>
.question{
    height: 50%;
    margin: auto;
    p{
        font-weight: 700;
        
    }
}
.modal {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;
    width: 350px;
    height: 300px;
    background-color: rgba(0,0,0,.9);
    margin: auto;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
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
    }
    button{
        width: 50%;
        height: 50%;
        margin: auto;
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