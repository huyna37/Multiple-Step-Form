<template>
    <div>
        <div v-if="props.isOpen" class="fixed inset-0 flex items-center justify-center">
            <div class="absolute inset-0 bg-gray-900 opacity-50"></div>
            <div class="bg-white p-8 rounded shadow-lg z-50">
                <h2 class="text-lg font-bold mb-4 text-center">Thông báo</h2>
                <p class="text-center">{{ props.message }}</p>
                <p class="text-center"> <button @click="togglePopup"
                        class="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                        Close Popup
                    </button></p>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const props = defineProps({
    message: String,
    isOpen: Boolean
})
const emit = defineEmits(['update:isOpen'])
const togglePopup = () => {
    emit('update:isOpen', !props.isOpen)
};

</script>
  