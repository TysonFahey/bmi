<script setup>
import { ref } from 'vue'
import {useBMIStore} from '../stores/BMIStore' // imports function from store
import { storeToRefs } from 'pinia';

const BMIStore = useBMIStore()
const {userHeight} = storeToRefs(BMIStore)  // define/store userHeight in store
const {userWeight} = storeToRefs(BMIStore)  // define/store userWeight in store


// const emit = defineEmits(['user-entered-data'])

// const userHasSubmittedData = () => {
//   emit('user-entered-data', userHeight.value)
// }

</script>

<template>
<h2>Enter your height and weight</h2>

<label>Height in meters</label>

<input v-model="userHeight"> <!-- connect user input to v-model userHeight-->
<br>


<label>Weight in kilograms</label>
<input v-model="userWeight"><!-- connect user input to v-model userWeight-->
<br>

<!-- <button v-on:click="userHasSubmittedData">Calculate!</button> -->
</template>

<style scoped>
button {
  background-color: lightblue;
}
</style>
