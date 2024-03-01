<template>
    <div class="container">
        <div class="form-group">
            <label class="label">Please Select a meal</label>
            <select v-model="mealSelected" class="select" @change="$emit('update:meal',$event.target.value)">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
            </select>
        </div>

        <div class="form-group">
            <label class="label">Please Enter Number of people</label>
            <input v-model="numberOfPeopleSelected" class="input" type="number" min="1" max="10" @input="$emit('update:numberOfPeople', $event.target.value)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    meal: String,
    numberOfPeople: String
})

defineEmits(['update:meal', 'update:numberOfPeople'])
const mealSelected = ref(props.meal);
const numberOfPeopleSelected = ref(props.numberOfPeople);
</script>

<style lang="scss" scoped>
@import '../assets//app.scss';
</style>

