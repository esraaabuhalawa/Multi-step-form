<template>
  <div>
    <head-slot>
         <template #headItem>Pick add-ons</template>
         <template #details>Add-ons help enhance your gaming experience.</template>
    </head-slot>
    <add-ons></add-ons>
  </div>
</template>

<script>
import HeadSlot from '@/components/slots/HeadSlot.vue';
import AddOns from '../components/AddOns.vue';
export default {
  components:{
    'head-slot' : HeadSlot ,
    'add-ons' : AddOns
  }
}
</script>

<style>

</style>