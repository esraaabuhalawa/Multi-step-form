<template>
  <section id="select">
      <div class="">
        <form class="d-flex flex-column flex-lg-row" v-if="selectPlan">
          <article class="card" @click="planPrice('Arcade',9)" :class="selectedPrice === 9 ? 'activePrice':''">
            <div class="plan-icon"><img src="../assets/images/icon-arcade.svg" /></div>
            <div class="plan-bottom ms-2 ms-lg-0">
                <h4 class="plan-system">Arcade</h4>
                <span class="plan-price">$9/mo</span>
            </div>
            
        </article>
          <article class="card " @click="planPrice('Advanced',12)" :class="selectedPrice === 12 ? 'activePrice':''">
            <div class="plan-icon "><img src="../assets/images/icon-advanced.svg" /></div>
            <div class="plan-bottom ms-2 ms-lg-1">
                <h4 class="plan-system">Advanced</h4>
                <span class="plan-price">$12/mo</span>
            </div>
            
          </article>
          <article class="card" @click="planPrice('Pro',15)" :class="selectedPrice === 15 ? 'activePrice':''">
            <div class="plan-icon"><img src="../assets/images/icon-pro.svg" /></div>
            <div class="plan-bottom ms-2 ms-lg-1">
                <h4 class="plan-system">Pro</h4>
                <span class="plan-price">$15/mo</span>
            </div>
            
          </article>
        </form>
        <form class="d-flex flex-column flex-lg-row" v-if="!selectPlan" id="yearly">
          <div class="card" @click="planPrice('Arcade',90)" :class="selectedPrice === 90 ? 'activePrice':''">
            <div class="plan-icon"><img src="../assets/images/icon-arcade.svg"  /></div>
            <div class="plan-bottom ms-2 ms-lg-1">
                <h4 class="plan-system">Arcade</h4>
                <span class="plan-price">$90/yr</span>
                <span class="plan-free d-block">2 months free</span>
            </div>
          </div>
          <div class="card" @click="planPrice('Advanced',120)" :class="selectedPrice === 120 ? 'activePrice':''">
            <div class="plan-icon"><img src="../assets/images/icon-advanced.svg" /></div>
            <div class="plan-bottom ms-2 ms-lg-1">
                <h4 class="plan-system">Advanced</h4>
                <span class="plan-price ">$120/yr</span>
                <span class="plan-free d-block">2 months free</span>
            </div>
            
          </div>
          <div class="card" @click="planPrice('Pro',150)" :class="selectedPrice === 150 ? 'activePrice':''">
            <div class="plan-icon"><img src="../assets/images/icon-pro.svg" /></div>
            <div class="plan-bottom ms-2 ms-lg-1">
                <h4 class="plan-system">Pro</h4>
                <span class="plan-price">$150/yr</span>
                <span class="plan-free d-block">2 months free</span>
            </div>
            
          </div>
        </form>
        <div class="d-flex justify-content-center align-items-center mt-5" id="switcher">
          <p class="me-2" :class="selectPlan === true ? 'active':'not-active'" for="switch">Monthly</p>
          <input type="checkbox" id="switch" v-model="selectPlan" /><label for="switch">Toggle</label>
          <p class=" ms-1" :class="selectPlan === false ? 'active':'not-active'" for="switch">Yearly</p>
        </div>
    </div>
    <!--------Start Of Footer Slot---->
    <section>
      <footer-slot>
        <template #back>
         <router-link to="/" class="text-decoration-none footer-link back">Go Back</router-link>
        </template>
        <template #next>
          <button @click="addPlanPrice"  class=" footer-link next" >Next Step </button>
        </template>
      </footer-slot>
    </section>
    <!--------End Of Footer Slot---->
  </section>
</template>

<script>
import FooterSlot from './slots/FooterSlot.vue';
export default {
    components:{
        'footer-slot': FooterSlot
    },
    data() {
        return {
          selectPlan: true,
          selectedPrice : 0,
          planSection: '',
          payPeriod: '',
          payInfo : null,
          errorMsg : ''
        }
    },
    methods:{
        planPrice(x,y){
          this.selectedPrice = y;
          this.planSection = x;
          let payObject = {
            plan : this.planSection,
            Price : this.selectedPrice
          }
          this.payInfo = payObject
        },
        addPlanPrice(){
          if(this.selectedPrice !== 0){
            localStorage.setItem('Pay Info',JSON.stringify(this.payInfo));

            localStorage.setItem('selectedPlan',JSON.stringify(this.selectPlan));

            this.payPeriod = this.selectPlan ? 'Monthly' : 'Yearly';

            localStorage.setItem('payPeriod',this.payPeriod);

            this.errorMsg = ''
            this.$router.push('/add')
          }else{
            alert('Please Select A plan')
          }
        }
    }
}
</script>
<style lang="scss" scoped>
    .card{
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 3% 10px;
        height: auto;
        position: relative;
        
        h4{
            font-size: 16px;
            margin-bottom: 0;
            font-weight: 700;
            color: var(--btn-color);
        }
        .plan-price,.plan-free{
            font-weight: 400;
        }
        .plan-price{
            color: var(--step-color);
            font-size: 14px;
            margin-bottom: 10px;
        }
        .plan-free{
            color:var(--btn-color);
            font-size: 14px;
        }
    }
    img{
      height: 35px;
      vertical-align: top;
      margin-top: -10px;
    }
    #yearly{
        .card{
            height: auto;
        }
    }
    .form-check-input:checked {
        background-color: var(--btn-color);
        border-color: var(--btn-color);
    }
    .form-check-input:focus{
        box-shadow: none;
    }
    .active{
        color: var(--btn-color);
    }
    .not-active{
        color: var(--step-color);
    }
    .card:hover{
      cursor: pointer;
      border: 1px solid var(--btn-color);
    }
    .activePrice{
      border: 1px solid var(--btn-color);
    }
  
    /***Switcher Container ***/
    #switcher{
      background: aliceblue;
      vertical-align: middle;
      padding-top: 10px;
    }
    /***Switcher ***/
    input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
    }

    label {
    cursor: pointer;
    align-self: flex-start;
    margin-top: 4px;
    text-indent: -9999px;
    width: 40px;
    height: 20px;
    background:  var(--btn-color);
    display: block;
    border-radius: 100px;
    position: relative;
    }

    label:after {
    content: '';
    position: absolute;
    top: 4px;
    right: 5px;
    width: 12px;
    height: 12px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    }

    input:checked + label:after {
    right: calc(100% - 28px);
    transform: translateX(-100%);
    }   

    label:active:after {
        width: 15px;
    }
    @media (min-width: 1024px) {
      .card{
        display: block;
        width: 30%;
        margin-bottom: 10px;
        margin-right: 10px;
        padding: 2% 10px;
        height: 180px;
        position: relative;
        .plan-bottom{
            position: absolute;
            bottom: 5px;
            left: 10px;
            font-size: var(--font-size);
        }
        h4{
          font-size: 20px;
          margin-bottom: 0.5rem;
        }
      }
      img{
        margin-top: 2px;
      }
        #yearly{
        .card{
            height: 200px;
        }
    }
    img{
      height: auto;
      vertical-align: middle;
    }
    }
</style>