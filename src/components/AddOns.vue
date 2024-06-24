<template>
  <section>
    <!--------------Month Plan---------------->
    <form v-if="getPlan">
      <div v-for="addon in monthAddons" :key="addon.value" class="form-check d-flex align-items-start align-items-lg-center justify-content-between addOn" :class="{ 'notActive': !addon.checked, 'active': addon.checked }">
        <div class="d-flex align-items-center">
          <input class="form-check-input me-2 me-lg-3 mt-0 position-relative" type="checkbox" v-model="addon.checked" :value="addon.value">
          <label class="" for="flexCheckDefault">
            <h5>{{ addon.label }}</h5>
            <p>{{ addon.description }}</p>
          </label>
        </div>
        <div class="align-self-center mt-3 mt-lg-0">
          <p class="add-price">{{`+$${addon.price}/mo`}}</p>
        </div>
      </div>
    </form>
    <!--Start Of Year Addons-->
    <form v-if="!getPlan">
      <div v-for="addon in yearAddons" :key="addon.value" class="form-check d-flex align-items-center justify-content-between addOn" :class="{'notActive': !addon.checked , 'active':addon.checked}">
        <div class="d-flex align-items-center">
          <input class="form-check-input me-2 me-lg-3 mt-0 position-relative" type="checkbox" v-model="addon.checked" :value="addon.value">
          <label class="form-check-label" for="flexCheckDefault">
            <h5>{{ addon.label }}</h5>
            <p>{{ addon.description }}</p>
          </label>   
        </div>

        <div class="align-self-center mt-3 mt-lg-0">
          <p class="add-price">{{ `+$${addon.price}/yr`}}</p>
        </div>
      </div>
    </form>
    <!----------Start Of Footer Slot-->
    <section>
      <footer-slot>
        <template #back>
         <router-link to="/select" class="text-decoration-none footer-link back">Go Back</router-link>
        </template>
        <template #next>
          <button class="text-decoration-none footer-link next" @click="submitPlan">Next Step</button>
        </template>
      </footer-slot>
    </section>
  </section>
</template>

<script>
import FooterSlot from './slots/FooterSlot.vue';
export default {
  components:{
    'footer-slot':FooterSlot
  },
  data() {
    return {
      addPlan: true,
      monthPlan : [],
      yearPlan : [],
      monthAddons: [
        { label: 'Online service', value: 'Online service 1', description: 'Access to multiplayer games', price: 1, checked: false },
        { label: 'Larger storage', value: 'Larger storage 2', description: 'Extra 1TB of cloud save', price: 2, checked: false },
        { label: 'Customizable profile', value: 'Customizable Profile 2', description: 'Custom theme on your profile', price: 2, checked: false }
      ],
      yearAddons: [
        { label: 'Online service', value: 'Online service 10', description: 'Access to multiplayer games', price: 10, checked: false },
        { label: 'Larger storage', value: 'Larger storage 20', description: 'Extra 1TB of cloud save', price: 20, checked: false },
        { label: 'Customizable profile', value: 'Customizable Profile 20', description: 'Custom theme on your profile', price: 20, checked: false }
      ],
      // Similar structure for yearly addons
      selectedAddons: [],
      submitedPlan: null,
      getPlan: JSON.parse(localStorage.getItem('selectedPlan'))
    }
  },
  methods: {
    submitPlan() {
      
      if(this.getPlan ){
        this.selectedAddons = this.monthAddons.filter(addon => addon.checked);
      }else{
        this.selectedAddons = this.yearAddons.filter(addon => addon.checked);
      }

      if(this.selectedAddons.length === 0){
        alert('Please select at least one add on')
      }else{
        localStorage.setItem('AddOnPlan',JSON.stringify(this.selectedAddons))
    
        this.$router.push('/summary');
      }
      
    },
  }
}
</script>

<style lang="scss" scoped>
.addOn {
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 10px;
  border-color:var(--light-gray);
  label{
    h5{
      margin-top: 15px;
      margin-bottom: 0;
      font-size: 16px;
      color: var(--btn-color);
    }
    p{
      font-size: var(--font-size);
      color: var(--step-color);
      font-weight: 400;
    }
  }
  .add-price{
    color: var(--price-focus);
    font-weight: 400;
    font-size: var(--font-size);
  }
}
.form-check{
  padding-left: 0;
}
input[type="checkbox"]{
    width: 18px;
    height: 18px;
    border:1px solid var(--light-gray);
  }
  .form-check .form-check-input{
    margin-left: 10px;
    border: var(--bs-border-width) solid var(--light-gray)
  }
  .form-check .form-check-input:focus{
    box-shadow: none;
  }
  .active{
    border:1px solid var(--btn-color);
  }
  .notActive{
    border: 1px solid var(--light-gray);
  }
  @media (min-width: 1024px) {
    .addOn {
      padding: 5px 15px;
    }
    .form-check{
    padding-left: 1rem;
    }
    label{
      h5{
        font-size: 20px;
      }
    }
  }
</style>