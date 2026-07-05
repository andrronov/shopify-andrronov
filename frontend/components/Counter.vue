<script setup lang="ts">
import { ref, computed } from "vue";

const count = ref(0);

const increment = () => {
    count.value++;
};

const doubleCount = computed(() => count.value * 2);
</script>

<template>
    <div
        class="inline-flex gap-2 items-center w-auto border-2 border-black p-2 rounded-lg my-4"
    >
        <button
            @click="increment"
            class="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Increment
        </button>
        <p class="text-xl font-medium text-blue-500">{{ count }}</p>
        <p class="text-lg text-blue-400">doubled: {{ doubleCount }}</p>
    </div>
</template>
