<script setup>
import BodyMassIndex from './components/BodyMassIndex.vue'

import { ref } from 'vue'
import {useBMIStore} from './stores/BMIStore' // imports function from store
import { storeToRefs } from 'pinia';

const BMIStore = useBMIStore()

const {calculatedBmi} = storeToRefs(BMIStore) // store the calculatedBmi in the store


</script>

<template>
 
<h1>Body Mass Index Calculator</h1>

<BodyMassIndex></BodyMassIndex> <!-- Display BodyMassIndex component on the page-->

<div>Your BMI is {{ calculatedBmi }}</div>
</template>

<style scoped>

</style>
