<template>
    <div class="container">
        <div v-for="(dish, index) in dishes" :key="index" class="flex gap-3">
            <div class="form-group">
                <label class="label">Please Select a Dish</label>
                <select class="select" v-model="dish.type">
                    <option v-for="avai in dishAvai" :value="avai">{{ avai }}</option>
                </select>
            </div>

            <div class="form-group">
                <label class="label">Please Enter no of servings</label>
                <input class="input" type="number" min="1" max="10" v-model="dish.servings" />
            </div>
        </div>
        <button @click="addMoreDish">+</button>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const props = defineProps({
    dishes: Array,
    dishAvai: Array
})
const emit = defineEmits(['update:dishes'])
const dishes = ref(props.dishes ?? [])

function addMoreDish() {
    dishes.value.push({ type: '', servings: 0 })
    emit('update:dishes', dishes.value)
}

</script>

<style lang="scss" scoped>
@import '../assets//app.scss';

button {
    height: 25px;
    width: 25px;
    border: 1px solid black;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    border-radius: 50%;

    &:hover {
        background-color: aquamarine;
    }
}
</style>
