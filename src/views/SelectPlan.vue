<template>
    <div>
        <head-slot>
         <template #headItem> Select your plan</template>
         <template #details>You have the option of monthly or yearly billing.</template>
        </head-slot>
        <select-plan></select-plan>
    </div>
</template>
<script>
import HeadSlot from '@/components/slots/HeadSlot.vue';
import SelectPlan from '@/components/SelectPlan.vue';
export default {
    components:{
        SelectPlan,
        HeadSlot
    }
}
</script>