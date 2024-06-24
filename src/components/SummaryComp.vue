<template>
  <div>
    <!--Summary Section-->
      <section id="summary" v-if="!confirmed">
        <head-slot>
       <template #headItem>Finishing up</template>
       <template #details>Double-check everything looks OK before confirming.</template>
      </head-slot>
        <div class="list-group">
          <div class="planContainer pb-2">
            <div  class="position-relative" aria-current="true">
              {{ payInfo.plan }} ({{ payPeriod }}) <span class=" float-end">$ {{ payInfo.Price }} / 
                <span v-if="payPeriod === 'Monthly'"> mo </span>
                <span v-else> yr </span>
              </span>
            </div>
            <router-link to="/select">Change</router-link>
          </div>
          <div v-for="plan,i in AddOnPlan" :key="i" id="addOnPlan">
            <span class="plan-label mt-4 d-inline-block">{{ plan.label }}</span>
            <span class="plan-price float-end mt-4 d-inline-block">{{`+$${plan.price}`}} 
              <span v-if="payPeriod === 'Monthly'">/mo </span>
              <span v-else>/yr </span></span>
          </div>
          
        </div>
        <div class="total my-4">
            <p class="ms-3">
              <span class="plan-label">
                Total 
                <span v-if="payPeriod === 'Monthly'"> (per month) </span>  
                <span v-else> (per year) </span>
              </span>
              
              <span class="float-end me-2 totalPrice">
                {{ `+$${totalPrice}` }} 
                <span v-if="payPeriod === 'Monthly'">/mo </span> <span v-else>/yr </span>
              </span>
            </p>
          </div>
      
 
    
      <!--------Start Of Footer Slot---->
      <section>
        <footer-slot>
          <template #back>
          <router-link to="/add" class="text-decoration-none footer-link back ms-3">Go Back</router-link>
          </template>
          <template #next>
            <button class="text-decoration-none footer-link next" @click="confirmOrder">Confirm</button>
          </template>
        </footer-slot>
      </section>
      <!--------End Of Footer Slot---->
    </section>
    <!---------Confirmation Message ------------->
    <section v-if="confirmed">
      <div class="d-flex flex-column justify-content-center align-items-center summary-confirm">
        <img src="../assets/images/icon-thank-you.svg" alt="checkmark">
        <p>Thank you!</p>
        <p >
          Thanks for confirming your subscription! We hope you have fun 
          using our platform. If you ever need support, please feel free 
          to email us at support@loremgaming.com.
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import HeadSlot from './slots/HeadSlot.vue';
import FooterSlot from './slots/FooterSlot.vue';
export default {
  components:{
    'footer-slot': FooterSlot,
    'head-slot': HeadSlot
  },
  data(){
    return {
      payPeriod: localStorage.getItem('payPeriod'),
      payInfo : JSON.parse(localStorage.getItem('Pay Info')),
      AddOnPlan : JSON.parse(localStorage.getItem('AddOnPlan')),
      total: 0,
      confirmed:false,
    }
  },
  computed:{
    totalPrice(){
 
      for(let item of this.AddOnPlan){
        this.total += item.price
      }
      return this.total + this.payInfo.Price
    }
  },
  methods:{
    confirmOrder(){
      this.confirmed = true;
    }
  }
}
</script>
<style lang="scss" scoped>
  .price{
    position: absolute;
    right: 10px;
  }
  .list-group{
    background: var(--alabaster);
    padding: 30px 20px;
   .planContainer{
      border-bottom: 1px solid var(--light-gray);
      div:nth-of-type(1){
        font-weight: 500;
        color: var(--btn-color);
        font-size: var(--font-size);
      }
      a{
        font-size: var(--font-size);
        font-weight: 400;
        color: var(--step-color);
      }
      a:hover{
        color: rgb(175, 25, 175);
      }
    }
  }
  #addOnPlan{
    font-size: var(--font-size);
    font-family: var(--font-family);
    
    .plan-price{
      color: var(--btn-color);
      font-weight: 400;
    }
  }
  .plan-label{
      color: var(--step-color);
      font-size: var(--font-size);
      font-weight: 500;
    }
    .totalPrice{
      font-weight: 700;
      font-size: var(--font-size);
      color: var(--price-focus);
      transform: scale(1.1);
    }
    .summary-confirm{
      height: 70vh;
      p:nth-of-type(1){
        color: var(--btn-color);
        font-weight: 700;
        font-size: 25px;
        padding: 10px 0;
      }
      p:nth-of-type(2){
        width: 90%;
        font-size: var(--font-size);
        text-align: center;
        color: var(--step-color);
      }
    }
    @media (min-width: 1024px) {
      .totalPrice{
        transform: scale(1.1,1.2);
      }
      .summary-confirm{
        p:nth-of-type(1){
          font-size: 30px;
          padding: 15px 0;
        }
        p:nth-of-type(2){
          width: 80%;
        }
      }
    }
</style>