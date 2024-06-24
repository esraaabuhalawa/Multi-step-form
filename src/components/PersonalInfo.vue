<template>
    <div>
      <form @submit.prevent="submitForm" novalidate>
        <section id="small-screen">
            <div class="mb-lg-3 mb-1 position-relative">
            <label for="UserName" class="form-label">Name</label>
            <span v-if="nameError" class="error">{{ nameError }}</span>
            <input type="text" class="form-control" :class="nameError ? 'grayborder' : 'redborder'" id="UserName" placeholder="e.g. Stephen King" v-model.trim="name" @change="validateName">
            </div>
            <div class="mb-lg-3 mb-1 position-relative">
            <label for="userEmail" class="form-label">Email address</label>
            <span v-if="emailError" class="error">{{ emailError }}</span>
            <div class="clear-both"></div>
            <input type="email" class="form-control" :class="emailError ? 'grayborder' : 'redborder'" id="userEmail" placeholder="e.g. stephenking@lorem.com" v-model.trim="email" @change="validateEmail">
            </div>
            <div class="mb-lg-3 mb-1 position-relative">
            <label for="phone" class="form-label">Phone Number</label>
            <span v-if="phoneNumberError" class="error">{{ phoneNumberError }}</span>
            <input type="tel" class="form-control" :class="phoneNumberError ? 'grayborder' : 'redborder'" id="phone" placeholder="e.g. +1 234 567 890" v-model.trim="phoneNumber" @change="validatePhoneNumber">
            </div>
        </section>
        
       
        <!--Start Of the Footer Slot-->
        <section>
          <footer-slot>
            <template #back></template>
            <template #next>
              <input type="submit" value="Next Step" class="next" />
            </template>
          </footer-slot>
        </section>
      </form>
    </div>
  </template>

<script>

import FooterSlot from './slots/FooterSlot.vue';
    export default {
        data(){
            return {
                email: '',
                name: '',
                phoneNumber: '',
                emailError: '',
                nameError: '',
                phoneNumberError: '',
                userData:null
            
            }
        },
        components:{
            'footer-slot': FooterSlot 
        },
        methods:{
            submitForm(){
                this.validateName();
                this.validateEmail();
                this.validatePhoneNumber();

                if(!this.emailError && !this.phoneNumberError && !this.nameError){
                    this.saveDataToLocalStorage();
                   
                    //To get Data
                    this.$router.push('/select'); 
                               
                }
            },
            validateEmail(){
                if(this.email !== ''){
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    this.emailError = emailRegex.test(this.email) ? '' : 'Invalid email format';
                }else{
                    this.emailError = 'This field is required'
                }
                
            },
            validatePhoneNumber(){
                if(this.phoneNumber !== ''){
                    const phoneRegex = /^\+(?!.*\+)[0-9-]+$/; // Assuming 10-digit phone number
                    this.phoneNumberError = phoneRegex.test(this.phoneNumber) ? '' : 'Invalid phone number';
                }else{
                    this.phoneNumberError = 'This field is required'
                }
            },
            validateName(){
                this.nameError = this.name.length > 3 ? '' : 'This field is required';
            },
           saveDataToLocalStorage(){
                 this.userData = {
                    name : this.name,
                    email : this.email,
                    phone : this.phoneNumber
                }
                localStorage.setItem('userData',JSON.stringify(this.userData));
            },
            retrieveData(){
                const savedData = localStorage.getItem('userData');
                this.savedData = savedData ? JSON.parse(savedData) : null;
                this.name = this.savedData.name;
                this.email = this.savedData.email;
                this.phoneNumber = this.savedData.phone;
                
            }
        },
        mounted(){
         if(this.userData !== null){
            this.retrieveData()
         }
            
        }
      
    }
</script>
<style lang="scss" scoped>
    *{
        font-family: var(--font-family);
    }
    label{
        margin-top: 15px;
        font-size: var(--font-size);
        color: var(--btn-color);
        font-weight: 400;
        margin-left: 5px;
    }
   ::placeholder{
    color: var(--step-color);
    font-size: var(--font-size);
    font-weight: 400;
   }
   input:focus , input:hover{
    box-shadow: none;
    border-color: var(--btn-color);
   }
   input:hover{
    cursor: pointer;
   }
   .redborder{
    border: 1px solid var(--light-gray)
   }
   .grayborder{
    border: 1px solid var(--error-msg)
   }
  .error{
    position: absolute;
    right: 0;
    top: var(--font-size);
    font-size: var(--font-size);
    font-weight: 500;
    color: var(--error-msg);
  }
  input[type="submit"]{
    color: var(--white);
  }
  input[type="submit"]:hover{
   opacity: 0.9;
  }
  #small-screen{
    background: var(--white);
    border-radius: 9px;
    padding: 10px;
  }
  @media (min-width: 1024px) {
    #small-screen{
    background: none;
    border-radius: none;
    padding: 0;
  }
  }
</style>