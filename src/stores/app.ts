import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('app', () => {
  let bill = ref({});
  function setFirstStep(data){
    if(!data?.meal || !data.numberOfPeople) return false;

    bill.meal = data.meal;
    bill.numberOfPeople = data.numberOfPeople;
  }

  function setSecondStep(data){
    if(!data?.restaurant) return false;

    bill.restaurant = data.restaurant;
  }

  function setThirdStep(data) {
    if(!data?.dishes || data.dishes.length == 0) return false;

    bill.restaurant = data.restaurant;
  }
 
  return { bill, setFirstStep, setSecondStep, setThirdStep}
})
