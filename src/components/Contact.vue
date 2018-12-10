<template>
  <div class="contact">
    <h1 class="pageIdentifier">{{currentPage}}</h1>
    <div class="form">
      <form class="contactForm" action="submit">
        <label for="cname">Full Name</label>
        <input type="text"
          placeholder="Jack Torrance"
          autocomplete="nada"
          name="cname"
          v-model="fullName"
        >
        <label for="email">Email</label>
        <input type="email"
          autocomplete="nada"
          name="email"
          placeholder="jtorrance@theoverlook.com"
          v-model="email"
        >
        <label for="subject">Subject</label>
        <input type="text" 
          autocomplete="nada"
          name="subject"
          placeholder="The Overlook"
          v-model="subject"
        >
        <textarea name="message" id="contactMessage" cols="30" rows="10"
          autocomplete="nada"
          placeholder="Here's to five miserable months on the wagon, and all the irreparable harm it has caused me."
          v-model="message"
        ></textarea>
        <button class="subButt"
          type="submit"
          @click.prevent="()=>{submitMessage()}"
          
        >Send It!</button>
      </form>
    </div>
  </div>
</template>

<script>
import * as Api from '@/api/Api.js'



  export default{
    name: "Contact",
    props:{
      currentPage:{
        type: String,
        required: true,
      },
    },
    data(){
      return{
        fullName:"",
        email:"",
        subject:"",
        message:"",
      }
    },
    methods:{
      deckAddedNotification(){
          this.$snotify.success(
              "Message Sent!",
              'Contact Message',{
                  timeout: 2000,
                  pauseOnHover: true
              }
          );
      },
      submitMessage(){
        const newMess = {
          fullName:this.fullName,
          email:this.email,
          subject: this.subject,
          message: this.message,
        }
        Api.pushMessage(newMess)
            .then(()=>{
              console.log("New Message in Database");
            });
        this.deckAddedNotification();
        this.fullName="";
        this.email="";
        this.subject="";
        this.message="";
      }
    },
    computed:{
      // isComplete(){
      //   return this.cname && this.email && this.subject && this.message;
      // }
    }
  }
</script>

<style lang="scss">
      .contactForm{
        width: 60%;
        margin: 10% auto;
        button{
          font-size: 20px;
          font-family: Avenir;
          color: white;
          border-radius: 5px;
          background: transparent;
          font-weight: 600;
          border: 2px solid white;
          &:hover{
            cursor: pointer;
            background: lightgreen;
          }
        }
        label{
          font-weight: 600;
          color: white;
          opacity: .6;
        }
        input[type=text]{
          border-radius: 5px;
          color: white;
          padding: 5px;
          font-family: Avenir;
          font-size: 20px;
          font-weight: 700;
          width: 100%;
          border: none;
          background: rgba(255,255,255,.2);
          &::placeholder{
            color: white;
            opacity: .6;
          }
          &:focus{
            outline: white;
          }
        }
        input[type=email]{
          border-radius: 5px;
          color: white;
          padding: 5px;
          font-family: Avenir;
          font-size: 20px;
          font-weight: 700;
          width: 100%;
          outline: none;
          border: none;
          background: rgba(255,255,255,.2);
          &::placeholder{
            color: white;
            opacity: .6;
          }
          &:valid{
            background: rgba(144, 238, 144, 0.596);
          }
          &:invalid{
            background: rgba(255, 0, 0, 0.486);
          }
        }
        textarea{
          color: white;
          margin-top: 10px;
          width: 100%;
          font-family: Avenir;
          font-size: 20px;
          font-weight: 700;
          border-radius: 5px;
          border: none;
          background: rgba(255,255,255,.2);
         &::placeholder{
            color: white;
            opacity: .6;
          }
        }
      }
      .pageIdentifier{
        position: fixed;
        top: 180px;
        right: -50px;
        font-size: 75px;
        opacity: .5;
        color: white;
        transform: rotate(-90deg);
    }
</style>