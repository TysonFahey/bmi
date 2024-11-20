// storing data the app needs to be able to share between components

import {defineStore} from 'pinia' // function to call to define store/ say what data we are going to store in it
import {computed, ref} from 'vue'
// the arguments to the function define the data



// export means make it available for components that need to use the store
export const useBMIStore = defineStore('bmi', () => {


    // define data BMIStore.js will store
    const userHeight = ref(0)
    const userWeight = ref(0)

    const calculatedBmi = computed( () => {
        //do the math for bmi
        return userWeight.value / (userHeight.value * userHeight.value)
        
    })

    // return an object with all the data that needs to be available outside of BMIStore.js
    return{
        userHeight,
        userWeight,
        calculatedBmi
    }

})