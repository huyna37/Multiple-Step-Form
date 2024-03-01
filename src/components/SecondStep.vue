<template>
    <div class="container mt-5 mb-5">
        <div class="form-group">
            <label class="label">Please Select a Restaurant</label>
            <select v-model="selectedOption" class="select" @change="$emit('update:restaurant',$event.target.value)">
                <option v-for="restaurant in restaurantData" :value="restaurant">{{ restaurant }}</option>
            </select>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    restaurant: String,
    restaurantData: Array
})
defineEmits(['update:restaurant'])
const selectedOption = ref(props.restaurant)
</script>

<style lang="scss" scoped>
@import '../assets//app.scss';
</style>
