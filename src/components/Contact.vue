<template>
  <div class="contact">
    <h1 class="pageIdentifier">{{currentPage}}</h1>
    <div class="form">
      <form class="contactForm" action="submit">
        <label for="cname">Full Name</label>
        <input type="text"
          placeholder="Jack Torrance"
          name="cname"
        >
        <label for="email">Email</label>
        <input type="email"
        name="email"
        placeholder="jtorrance@theoverlook.com"
        >
        <label for="subject">Subject</label>
        <input type="text" 
          name="subject"
          placeholder="The Overlook"
        >
        <textarea name="message" id="contactMessage" cols="30" rows="10"
        placeholder="Here's to five miserable months on the wagon, and all the irreparable harm it has caused me." 
        ></textarea>
        <button class="subButt"
        @click="submit"
        :disabled="!isComplete"
        >Send It!</button>


      </form>
    </div>
  </div>
  
  
</template>
<script>
  export default{
    name: "Contact",
    props:{
      currentPage:"",
    },
    data(){
      return{}
    },
    methods:{
      submit(){

      }
    },
    computed:{
      isComplete(){
        return this.cname && this.email && this.subject && this.message;
      }
    }



  }
</script>
<style lang="scss">
      .contactForm{
        button{
          font-size: 20px;
          font-family: Avenir;
          color: white;
          border-radius: 5px;
          background: transparent;
          font-weight: 600;
          border: 2px solid white;
          
        }
        width: 60%;
        margin: 10% auto;
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