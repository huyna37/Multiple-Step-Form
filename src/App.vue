<template>
  <div class="container mx-auto">
    <div class="row">
      <div class="menu flex justify-center gap-3">
        <div class="step-1 h-[30px] w-[5rem] text-center border-2 rounded-[15px]" :class="{ 'selected': step == 1 }">
          Step 1
        </div>
        <div class="step-1 h-[30px] w-[5rem] text-center border-2 rounded-[15px]" :class="{ 'selected': step == 2 }">
          Step 2
        </div>
        <div class="step-1 h-[30px] w-[5rem] text-center border-2 rounded-[15px]" :class="{ 'selected': step == 3 }">
          Step 3
        </div>
        <div class="step-1 h-[30px] w-[5rem] text-center border-2 rounded-[15px]" :class="{ 'selected': step == 4 }">
          Review
        </div>
      </div>
      <div class="content mt-5 mb-5">
        <FirstStep @update:meal="updateMeal" @update:numberOfPeople="updateNumberOfPeople" :meal="meal"
          :numberOfPeople="numberOfPeople" v-if="step == 1" />
        <SecondStep @update:restaurant="updateRestaurant" :restaurantData="restaurantData" :restaurant="restaurant"
          v-else-if="step == 2" />
        <ThirdStep @update:dishes="updateDishes" :dishAvai="dishAvai" :dishes="dishes" v-else-if="step == 3" />
        <Review :meal="meal" :numberOfPeople="numberOfPeople" :restaurant="restaurant" :dishes="dishes" v-else />
      </div>

      <div class="flex" :class="{ 'justify-end': step == 1, 'justify-between': step != 1 }">
        <button class="" v-show="step != 1" @click="toggleOption(-1)">Previous</button>
        <button class="" v-show="step > 0 && step < 4" @click="toggleOption(1)">Next</button>
        <button class="" v-show="step == 4" @click="submit()">Submit</button>
      </div>
    </div>
  <Popup @update:isOpen="toggerPopup" :message="message" :isOpen="isOpenPopup" />
  </div>
</template>

<script setup lang="ts">
import FirstStep from '@/components/FirstStep.vue'
import SecondStep from '@/components/SecondStep.vue'
import ThirdStep from '@/components/ThirdStep.vue'
import Review from '@/components/Review.vue'
import Popup from '@/components/Popup.vue'
import { computed, ref } from 'vue'
import data from '@/data/index'

const message = ref('Nội dung không thể để trống');
const isOpenPopup = ref(false);
const step = ref<number>(1)
let meal = ref('');
let numberOfPeople = ref('');
let restaurant = ref('');
const restaurantData = computed(() => {
  if (!meal.value) return []; // Nếu không có bữa ăn được chọn, trả về mảng rỗng

  const uniqueRestaurants = data.reduce((unique, item) => {
    if (item.availableMeals.includes(meal.value) && !unique.includes(item.restaurant)) {
      unique.push(item.restaurant);
    }
    return unique;
  }, []);

  return uniqueRestaurants;
});

const dishAvai = computed(() => {
  if (restaurant.value && meal.value) {
    const filteredData = data.filter(d => d.availableMeals.includes(meal.value) && d.restaurant === restaurant.value);

    const uniqueDishes = filteredData.reduce((unique, item) => {
      if (!unique.includes(item.name)) {
        unique.push(item.name);
      }
      return unique;
    }, []);

    return uniqueDishes;
  }
});

let dishes = ref([
  { type: '', servings: 0 }
]);

function updateMeal(event: string) {
  meal.value = event;
}

function updateNumberOfPeople(event: string) {
  numberOfPeople.value = event;
}
function updateRestaurant(event: string) {
  restaurant.value = event;
}

function updateDishes(event: any) {
  dishes.value = event;
}

function toggleOption(value: number) {
  if (value == 1 && step.value == 1 && (!meal.value || !numberOfPeople.value)) {
    isOpenPopup.value = true;
    return;
  }
  else if (value == 1 && step.value == 2 && !restaurant.value) {
    isOpenPopup.value = true;
    return;
  }
  else if (value == 1 && step.value == 3 && !dishes.value.every(v => v.type && v.servings != 0)) {
    isOpenPopup.value = true;
    return;
  }
  step.value += value;
}
function toggerPopup(value: boolean) {
  isOpenPopup.value = value;
}

function submit() {
  const formData = {
    meal: meal.value,
    numberOfPeople: numberOfPeople.value,
    restaurant: restaurant.value,
    dishes: dishes.value
  };
  console.log(formData);
}
</script>

<style scoped lang="scss">
.selected {
  background-color: #007bff;
}

button {
  height: 40px;
  width: 6em;
  border: 1px solid black;
  border-radius: 30px;
  font-weight: 700;

  &:hover {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    background-color: #007bff;
    transition: transform 2s;
  }
}
</style>