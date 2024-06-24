<template>
    <div>
        <head-slot>
         <template #headItem>Personal info</template>
         <template #details>Please provide your name, email address, and phone number.</template>
    </head-slot>
    <personal-info></personal-info>
    </div>
    
</template>

<script>
import HeadSlot from '@/components/slots/HeadSlot.vue';
import PersonalInfo from '../components/PersonalInfo.vue';
export default {
  components:{
    'head-slot' : HeadSlot ,
    'personal-info' : PersonalInfo
  }
}
</script>

<style>

</style>