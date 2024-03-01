<template>
    <div class="container">
        <div class="form-group">
            <label>Meal</label>
            <p>{{ props.meal }}</p>
        </div>
        <div class="form-group">
            <label>No. of. People</label>
            <p>{{ props.numberOfPeople }}</p>
        </div>
        <div class="form-group">
            <label>Restaurant</label>
            <p>{{ props.restaurant }}</p>
        </div>
        <div class="form-group flex">
            <label >Dishes</label>
            <div class="dishes">
                <div v-for="dish in props.dishes" :key="dish.type" class="flex gap-1 mb-1 justify-end">
                    <p>Dish {{ dish.type }} -</p>
                    <p>{{ dish.servings }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    meal: String,
    numberOfPeople: String,
    restaurant: String,
    dishes: Array,
})
</script>

<style scoped lang="scss">
.container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .form-group {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        .dishes {
            border: 1px solid black;
            border-radius: 10px;
            padding: 10px;
        }
        label {
            font-weight: bold;
        }

        p {
            margin: 0;
        }

        .flex-column p {
            padding: 5px 10px;
            background-color: #e9ecef;
            margin: 5px 0;
        }
    }
}
</style>